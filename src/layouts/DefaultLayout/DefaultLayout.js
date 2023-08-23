import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './DefaultLayout.module.scss';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const cx = classNames.bind(styles);

const { default: Header } = require('../components/Header/Header');

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('wrapper')}>
                <Sidebar className={cx('sidebar')} />
                <div className={cx('content')}>{children}</div>
            </div>
            <ScrollToTop />
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
