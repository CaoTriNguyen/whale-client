import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, outline, capsule, disabled, className, children, onClick, ...passProps }) {
    const classes = cx('wrapper', { [className]: className, primary, outline, capsule, disabled });

    let Comp = 'button';

    const props = { onClick, ...passProps };

    //Delete props.conlick
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on' && typeof [key] === 'function')) {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    capsule: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default Button;
