import classNames from 'classnames/bind';

import { PhoneIcon, LocationIcon, GmailIcon } from '~/components/icons';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('icon')}>
                    <PhoneIcon width="17px" height="17px" />
                </div>
                <label className={cx('label')}>090989xxx</label>
            </div>

            <div className={cx('info')}>
                <div className={cx('icon')}>
                    <GmailIcon width="17px" height="17px" />
                </div>
                <label className={cx('label')}>wsearch@gmail.com</label>
            </div>

            <div className={cx('info')}>
                <div className={cx('icon')}>
                    <LocationIcon width="16px" height="16px" />
                </div>
                <label className={cx('label')}>
                    Số xxx/x Đường Đình Phong Phú, Phường Tăng Nhơn Phú B, Quận 9, TP. Thủ Đức, TP Hồ Chí Minh
                </label>
            </div>
        </div>
    );
}

export default Footer;
