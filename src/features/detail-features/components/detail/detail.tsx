import classNames from 'classnames/bind';
import React from 'react';
import styles from './detail.module.scss';
import { Button } from '@/shared/components/button/button';
type DetailItem = {
    heading: string;
    desc: string;
};
type DetailProps = {
    data: DetailItem[];
};
const cx = classNames.bind(styles);

export const Detail = ({ data = [] }: DetailProps) => {
    return (
        <div className={cx('product')}>
            <p className={cx('product-id')}>SKU #1000078</p>
            <h3 className={cx('product-name')}>Shiba Inu Sepia</h3>
            <h3 className={cx('product-price')}>34.000.000 VND</h3>
            <div className={cx('product-action')}>
                <Button variant="contained" color="primary">
                    Contact us
                </Button>
                <Button variant="outlined" color="primary">
                    Chat with Monito
                </Button>
            </div>
            <div className={cx('product-detail')}>
                {data.map((item: DetailItem) => {
                    return (
                        <div className={cx('product-row-group')}>
                            <p className={cx('product-heading')}>{item.heading}</p>
                            <p className={cx('product-desc')}>{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
