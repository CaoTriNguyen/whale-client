import React from 'react';
import classNames from 'classnames/bind';

import styles from './Popup.module.scss';

var cx = classNames.bind(styles);

function Popup(props) {
    return props.trigger ? (
        <div className={cx('wrapper')}>
            <div className={cx('popup-inner')}>
                <button className={cx('popup-close')}>close</button>
                {props.children}
            </div>
        </div>
    ) : (
        ''
    );
}

export default Popup;
