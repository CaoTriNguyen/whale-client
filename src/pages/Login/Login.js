import classNames from 'classnames/bind';

import Button from '~/components/Button';

import styles from './Login.module.scss';
import { LockIcon, UserIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <div className={cx('tittle')}>Login</div>

                <div className={cx('item')}>
                    <UserIcon className={cx('icon')} />
                    <input className={cx('username')} />
                </div>
                <div className={cx('item')}>
                    <LockIcon className={cx('icon')} />
                    <input className={cx('password')} />
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
