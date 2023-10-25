import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import { GoToTopIcon } from '~/components/icons';
import Button from '~/components/Button/Button';
import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

function ScrollToTop({ className }) {
    const [showGoToTop, setShowGoToTop] = useState(false);

    const handleShowToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {showGoToTop && (
                <Button className={cx('wrapper')} onClick={handleShowToTop}>
                    <GoToTopIcon width="30px" height="30px" />
                </Button>
            )}
        </>
    );
}

export default ScrollToTop;
