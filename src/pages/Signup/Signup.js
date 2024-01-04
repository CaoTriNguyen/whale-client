import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import {
    EyeSlashIcon,
    EyeIcon,
    LockIcon,
    UserIcon,
    FirstNameIcon,
    LastNameIcon,
    GmailIcon,
    BirthdayIcon,
} from '~/components/icons';

import styles from './Signup.module.scss';

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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gmail, setGmail] = useState('');
    const [birthday, setBirthday] = useState(new Date('2000-01-01'));
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rePassword, setRePassword] = useState('');
    const [showRePassword, setShowRePassword] = useState(false);
    const navigate = useNavigate();

    // const handleInputBirthday = (event) =>{
    //     if()
    // }

    console.log(birthday);
    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleInputRePassword = (event) => {
        setRePassword(event.target.value);
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
            <div className={cx('signup')}>
                <div className={cx('tittle')}>Create an account</div>

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
                    <FirstNameIcon className={cx('icon')} />
                    <input
                        className={cx('username')}
                        value={firstName}
                        placeholder="First Name"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>
                <div className={cx('item')}>
                    <LastNameIcon className={cx('icon')} />
                    <input
                        className={cx('username')}
                        value={lastName}
                        placeholder="Last Name"
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                    />
                </div>
                <div className={cx('item')}>
                    <GmailIcon className={cx('icon')} />
                    <input
                        className={cx('username')}
                        value={gmail}
                        placeholder="Gmail"
                        onChange={(e) => {
                            setGmail(e.target.value);
                        }}
                    />
                </div>
                <div className={cx('item')}>
                    <BirthdayIcon className={cx('icon')} />
                    <input
                        className={cx('username')}
                        type="date"
                        value={birthday.getFullYear + '-' + birthday.getMonth}
                        placeholder="Birthday"
                        onChange={(e) => {
                            setBirthday(e.target.value);
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

                <div className={cx('item')}>
                    <LockIcon className={cx('icon')} />
                    <input
                        placeholder="Re-enter Password"
                        type={showRePassword ? 'text' : 'password'}
                        value={rePassword}
                        onChange={handleInputRePassword}
                        className={cx('password')}
                    />
                    <div className={cx('password-status')} onClick={() => setShowRePassword(!showRePassword)}>
                        {!showRePassword && <EyeIcon />}
                        {showRePassword && <EyeSlashIcon />}
                    </div>
                </div>
                <Button className={cx('login-btn')} onClick={handleLogin}>
                    Sign Up
                </Button>
                <div className={cx('line')}></div>
                <Button href="./login" className={cx('signup-btn')}>
                    Login
                </Button>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default Login;
