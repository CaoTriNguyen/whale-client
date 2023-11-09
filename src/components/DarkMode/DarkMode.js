import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './DarkMode.module.scss';
import { actions, useTheme } from '../../store';
import { MoonIcon, SunIcon } from '../icons';
const cx = classNames.bind(styles);

function DarkMode() {
    // eslint-disable-next-line
    const [state, dispatch] = useTheme();
    const [darkTheme, setDarkTheme] = useState(state.theme === 'dark');
    return (
        <div
            className={cx('wrapper')}
            onClick={async () => {
                await dispatch(actions.setTodoTheme(darkTheme ? 'light' : 'dark'));
                setDarkTheme(state.theme === 'dark');
                document.querySelector('body').setAttribute('data-theme', state.theme);
            }}
        >
            {darkTheme && <SunIcon className={cx('icon')} />}
            {!darkTheme && <MoonIcon className={cx('icon')} />}
        </div>
    );
}

export default DarkMode;
