import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import { CircleXmarkSolidIcon, SearchIcon } from '~/components/icons';
import stypes from './Search.module.scss';

const cx = classNames.bind(stypes);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const searchRef = useRef();

    const handleClearSearchBox = () => {
        setSearchValue('');
        searchRef.current.focus();
    };

    return (
        <div className={cx('search')}>
            <div className={cx('search-icon', searchValue && 'active')}>
                <SearchIcon />
            </div>
            <input
                className={cx('input')}
                placeholder="Search"
                value={searchValue}
                ref={searchRef}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />
            {searchValue && (
                <div className={cx('status')} onClick={handleClearSearchBox}>
                    <CircleXmarkSolidIcon />
                </div>
            )}
        </div>
    );
}

export default Search;
