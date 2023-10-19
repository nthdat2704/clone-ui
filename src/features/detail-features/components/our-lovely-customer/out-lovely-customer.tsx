import { Container } from '@/shared/components/container/container';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './out-lovely-customer.module.scss';
import { ourSliders } from '../../mockup';
import Slider from '../slider/slider';
type OutLovelyCustomerProps = {};

const cx = classNames.bind(styles);

export const OutLovelyCustomer = (props: OutLovelyCustomerProps) => {
    return (
        <Container>
            <div className={cx('container')}>
                <h1 className={cx('heading')}>Our lovely customer</h1>
                <div className={cx('slider')}>
                    <Slider data={ourSliders} />
                </div>
            </div>
        </Container>
    );
};
