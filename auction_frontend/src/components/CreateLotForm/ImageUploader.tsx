import { IImageData, IImageUploaderProps } from "@/types";
import { FormEvent, useEffect, useState } from "react";
import {BiSolidImageAdd} from "react-icons/bi";

const ImageUploader = ({ images, setImages }: IImageUploaderProps) => {
    const [file, setFile] = useState<File>();
    useEffect(() => {
        if(!file)
            return;
        const objectUrl = URL.createObjectURL(file)
        const imgInfo: IImageData = {
            file,
            imgURL: objectUrl
        };
        setImages((imgs) =>
            [
                ...imgs,
                imgInfo
            ]
        );
        return () => URL.revokeObjectURL(objectUrl)
    }, [file]);
    const uploadFileHandle = (e: FormEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        if(!files || files?.length < 1)
            return;
        if(images.length > 5)
            return;
        setFile(files[0]);
    };
    return (
        <div
            className={'img-input'}
        >
            {
                images.length > 0 &&
                <div
                    className={`image-lis`}
                >

                    {
                        images &&
                        images.map(
                            image =>
                            <img
                                key={image.imgURL}
                                src={image.imgURL}
                                className={"image standart-border"}
                            />
                        )
                    }
                </div>
            }
            <div
                className={'upload-wrapper'}
            >
                <label
                    htmlFor={'img-selector'}
                >
                    <BiSolidImageAdd size={50}/>
                </label>
                <input
                    type={'file'}
                    name={'img'}
                    id={'img-selector'}
                    accept={'image/png'}
                    onChange={uploadFileHandle}
                />
            </div>
        </div>
    );
};

export default ImageUploader;
