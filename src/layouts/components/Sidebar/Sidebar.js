import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import styles from './Sidebar.module.scss';
import { BlogIcon, HomeIcon, MoreIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Button className={cx('item', 'active')}>
                <HomeIcon width="25px" height="25px" />
            </Button>

            <Button className={cx('item')}>
                <BlogIcon width="25px" height="25px" />
            </Button>

            <Button className={cx('item', 'more')}>
                <MoreIcon width="25px" height="25px" />
            </Button>
        </div>
    );
}

export default Sidebar;
