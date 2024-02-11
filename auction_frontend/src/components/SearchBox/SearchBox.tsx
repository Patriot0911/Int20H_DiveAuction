"use client";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { useRef } from "react";
import './SearchBox.css';

const SearchBox = () => {
    const router = useRouter();
    const searchRef = useRef<HTMLInputElement>(null);
    const searchHandle = () => {
        const searchValue = searchRef.current?.value;
        if(!searchValue || searchValue.length < 3)
            return searchRef.current?.focus();
        router.replace(`/search/${searchValue}`);
    };
    return (
        <div
            className={'search-box'}
        >
            <input
                placeholder={'Пошук'}
                className={'search-input'}
                ref={searchRef}
            />
            <IoSearch
                className={'search-button'}
                size={28}
                color={'#ffff'}
                onClick={searchHandle}
            />
        </div>
    );
};

export default SearchBox;
