import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './SidebarFooterLayout.module.scss';

const cx = classNames.bind(styles);

function SidebarFooterLayout({ children }) {
    return (
        <div>
            <Sidebar className={cx('sidebar')} />
            <div className={cx('wrapper')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

SidebarFooterLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidebarFooterLayout;
