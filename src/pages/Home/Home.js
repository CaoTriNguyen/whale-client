import { useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    useEffect(() => {
        fetch(`http://localhost:5000/api`, {
            method: 'GET',
        })
            .then((response) => {
                //console.log(response);
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => console.log(actualData))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    return <div className={cx('wrapper')}>Home</div>;
}

export default Home;
