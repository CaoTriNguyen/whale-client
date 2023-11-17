import { useState } from 'react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { EyeSlashIcon, EyeIcon, LockIcon, UserIcon } from '~/components/icons';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <div className={cx('tittle')}>Login</div>

                <div className={cx('item')}>
                    <UserIcon className={cx('icon')} />
                    <input className={cx('username')} placeholder="Username" />
                </div>
                <div className={cx('item')}>
                    <LockIcon className={cx('icon')} />
                    <input
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handleInputPassword}
                        className={cx('password')}
                    />
                    <div className={cx('password-status')} onClick={() => setShowPassword(!showPassword)}>
                        {!showPassword && <EyeIcon />}
                        {showPassword && <EyeSlashIcon />}
                    </div>
                </div>
                <Button className={cx('login-btn')}>Login</Button>
                <a href="./signup" className={cx('forgot-password')}>
                    Forgot password
                </a>
                <div className={cx('line')}></div>
                <Button className={cx('signup-btn')}>Create New Account</Button>
            </div>
        </div>
    );
}

export default Login;
