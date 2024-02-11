"use client";
import { IoSearch } from "react-icons/io5";
import { useRef } from "react";
import './SearchBox.css';

const SearchBox = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    return (
        <div
            className={'search-box'}
            onClick={() => searchRef.current?.focus()}
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
                onClick={() => {}}
            />
        </div>
    );
};

export default SearchBox;
