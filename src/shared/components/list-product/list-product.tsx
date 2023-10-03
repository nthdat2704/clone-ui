import { StaticImageData } from 'next/image';
import React from 'react';
import { Card } from '../card/card';
import classNames from 'classnames/bind';
import styles from './list-product.module.scss';
type ListProductItem = {
    id: number;
    imageUrl: StaticImageData;
    title: string;
    price: string;
};
type ListProductProps = {
    data: ListProductItem[];
    className?: any;
};

const cx = classNames.bind(styles);
export const ListProduct = ({ data = [], className }: ListProductProps) => {
    const classes = cx('product-list', {
        [className]: className,
    });
    return (
        <div className={classes}>
            {data.map((item) => {
                return <Card fullWidth={true} className={cx('product-item')} data={item} />;
            })}
        </div>
    );
};
