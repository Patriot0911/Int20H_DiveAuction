"use client";
import { IoSearch } from "react-icons/io5";
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div
            className={'search-box'}
        >
            <input
                placeholder={'Пошук'}
                className={'search-input'}
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
