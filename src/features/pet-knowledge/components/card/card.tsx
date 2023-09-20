import { knowlege1, knowlege2 } from '@/shared/assets/images';
import classNames from 'classnames/bind';
import Image from 'next/image';
import React from 'react';
import styles from './card.module.scss';

type CardData = {
    id: number;
    urlImage: string | any;
    title: string;
    desc: string;
};
type CardProps = {
    data: CardData;
};
const cx = classNames.bind(styles);

export const Card = ({ data }: CardProps) => {
    return (
        <div className={cx('card-container')}>
            <div className={cx('card-media')}>
                <Image src={data.urlImage} alt="image" />
            </div>
            <div className={cx('card-content')}>
                <span className={cx('card-chip')}>Pet knowledge</span>
                <div className={cx('card-child-content')}>
                    <h1 className={cx('card-title')}>{data.title}</h1>
                    <div className={cx('card-desc')}>{data.desc}</div>
                </div>
            </div>
        </div>
    );
};
