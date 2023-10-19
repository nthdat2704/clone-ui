import { StaticImageData } from 'next/image';
import React from 'react';
import { Card } from '../card/card';
import classNames from 'classnames/bind';
import styles from './list-product.module.scss';
import Link from 'next/link';
import { ROUTER } from '@/shared/constants';
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
            {data.map((item, index) => {
                return <Card key={index} className={cx('product-item')} fullWidth={true} data={item} />;
            })}
        </div>
    );
};
