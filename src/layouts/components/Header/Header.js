import classNames from 'classnames/bind';

import Image from '~/components/Image/Image';
import Search from '~/layouts/components/Search';
import styles from './Header.module.scss';
import Button from '~/components/Button/Button';
import { BellIcon } from '~/components/icons';
import { useToken } from '~/store';

const cx = classNames.bind(styles);
function Header() {
    //var currentUser = false;
    // eslint-disable-next-line
    const { token, setToken } = useToken();
    console.log(token);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('logo')}>Whale</div>
                <Search />
                <div className={cx('active')}>
                    {token ? (
                        <>
                            <BellIcon width="22px" height="22px" className={cx('announcement')} />
                            <div className={cx('count-announcement')}>9+</div>
                            <Image
                                className={cx('user-avatar')}
                                src="https://th.bing.com/th/id/OIP.oCLuRGZOBZsCyWW9bhMi5AAAAA?pid=ImgDet&rs=1"
                                alt="Nguyen Van A"
                                fallback="https://th.bing.com/th/id/R.396f180c451e7308aa7af9df23ee8ccd?rik=G3KqovAnYTn%2fxQ&pid=ImgRaw&r=0"
                            />
                        </>
                    ) : (
                        <>
                            <Button href="/signup" capsule className={cx('sign-up')}>
                                Sign up
                            </Button>
                            <Button href="/login" primary capsule className={cx('log-in')}>
                                Log in
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
