import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { EyeSlashIcon, EyeIcon, LockIcon, UserIcon } from '~/components/icons';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

async function loginUser(credentials) {
    //console.log(credentials);
    return fetch(`http://localhost:5000/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const token = await loginUser({
            username,
            password,
        });
        //console.log(token);
        navigate(-1);

        setToken(token);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <div className={cx('tittle')}>Login</div>

                <div className={cx('item')}>
                    <UserIcon className={cx('icon')} />
                    <input
                        className={cx('username')}
                        value={username}
                        placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
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
                <Button className={cx('login-btn')} onClick={handleLogin}>
                    Login
                </Button>
                <a href="./forgot-password" className={cx('forgot-password')}>
                    Forgot password
                </a>
                <div className={cx('line')}></div>
                <Button href="./signup" className={cx('signup-btn')}>
                    Create New Account
                </Button>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;
