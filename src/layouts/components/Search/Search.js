import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import { CircleXmarkSolidIcon, SearchIcon } from '~/components/icons';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    //console.log(state);
    const searchRef = useRef();

    const handleClearSearchBox = () => {
        setSearchValue('');
        searchRef.current.focus();
    };

    //let darkTheme = state.theme === 'dark';

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
