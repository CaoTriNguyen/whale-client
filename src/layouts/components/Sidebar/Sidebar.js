import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './Sidebar.module.scss';
import { BlogIcon, HomeIcon, MoreIcon } from '~/components/icons';
import DarkMode from '~/components/DarkMode';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className="items">
                <Button className={cx('item', 'active')}>
                    <HomeIcon width="100%" height="100%" />
                </Button>

                <Button className={cx('item')}>
                    <BlogIcon width="100%" height="100%" />
                </Button>

                <Button className={cx('item', 'more')}>
                    <MoreIcon width="100%" height="100%" />
                </Button>
            </div>

            <div className={cx('theme-btn')}>
                <DarkMode />
            </div>
        </div>
    );
}

export default Sidebar;
