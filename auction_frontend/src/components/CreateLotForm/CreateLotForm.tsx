'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import CreateLotButtons from './CreateLotButtons';
import { ICatData, IImageData } from '@/types';
import LotSelectCat from './LotSelectCat';
import LotDataInput from './LotDataInput';
import fetchData from '@/scripts/api';
import './CreateLotForm.css';
import ImageUploader from './ImageUploader';
import { useReduxSelector } from '@/redux/store';

const CreateLotForm = () => {
    const [cats, setCats] = useState<ICatData[]>([]);
    const [images, setImages] = useState<IImageData[]>([]);
    const catRef = useRef<HTMLSelectElement>(null);
    const startDateRef = useRef<HTMLInputElement>(null);
    const endDateRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        fetchData('categories')
        .then(
            data => setCats(data)
        );
    }, []);

    const submitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = titleRef.current?.value;
        const description = descriptionRef.current?.value;
        const startDate = startDateRef.current?.value;
        const endDate = endDateRef.current?.value;
        const cat = catRef.current?.value;
        const token = localStorage.getItem('token');
        const auth = {
            'Authorization': `Bearer ${token}`
        };
        const formData = new FormData();
        Object.values(images).forEach(
            (image, index) => formData.append(`dron${index+1}`, image.file)
        );
        formData.append('title', `"${title}"`);
        formData.append('description', `"${description}"`);
        formData.append('startDate', `"${startDate}"`);
        formData.append('endDate', `"${endDate}"`);
        formData.append('categoryId', `${cat}`);
        formData.append('startPrice', '10');
        console.log(
            formData.forEach((item, key) => console.log(key, item))
        );
        fetch('http://localhost:8000/api/auctions',
            {
                method: 'POST',
                headers: {
                    ...auth
                },
                body: formData
            }
        ).then(response => response.json().then(data => console.log(data)))
    };

    return (
        <form
            className={'create-auction-form'}
            onSubmit={submitHandle}
        >
            <div
                className={'lot-info-form'}
            >
                <div
                    className={'input-fields'}
                >
                    <div
                        className={'lot-name-cat'}
                    >
                        <input
                            className={'lot-name-field'}
                            placeholder={'Назва Лоту'}
                            minLength={5}
                            maxLength={64}
                            ref={titleRef}
                        />
                        <LotSelectCat
                            cats={cats}
                            ref={catRef}
                        />
                    </div>
                    <LotDataInput
                        label={'Починається'}
                        ref={startDateRef}
                    />
                    <LotDataInput
                        label={'Закінчится'}
                        ref={endDateRef}
                    />
                    <textarea
                        className={'lot-description-field'}
                        placeholder={'Опис Лоту'}
                        minLength={5}
                        maxLength={2000}
                        ref={descriptionRef}
                    />
                </div>
                <CreateLotButtons />
            </div>
            <ImageUploader
                images={images}
                setImages={setImages}
            />
        </form>
    );
};

export default CreateLotForm;
