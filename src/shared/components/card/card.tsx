import React from 'react';
import styles from './card.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import image from './../../assets/images/testimage.webp';
import { DotIcon, GiftIcon } from '@/shared/icons';
type DataProps = {
    id?: number;
    imageUrl: string | any;
    title: string;
    gene?: string;
    age?: string;
    product?: string;
    size?: string;
    price?: string;
    gift?: boolean;
};

type CardProps = {
    data: DataProps;
    className?: string;
};

const cx = classNames.bind(styles);
export const Card = ({ className, data }: CardProps) => {
    return (
        <div className={cx('card__container', className)}>
            <div className={cx('card__image')}>
                <Image src={data.imageUrl} alt="image" />
            </div>
            <div className={cx('card__body')}>
                <div className={cx('card-wrapper')}>
                    <div className={cx('card__title')}>{data.title}</div>
                    <div className={cx('card__info')}>
                        <span>
                            Gene: <span className="bold">Male</span>
                        </span>
                        <span className={cx('icon')}>
                            <DotIcon />
                        </span>
                        <span>
                            Age: <span className="bold">02 months</span>
                        </span>
                    </div>
                    <div className={cx('card__sub-info')}>{data.price} VND</div>
                </div>
                {data.gift && (
                    <div className={cx('card__action')}>
                        <span className={cx('action-icon')}>
                            <GiftIcon />
                        </span>
                        <span className={cx('icon')}>
                            <DotIcon />
                        </span>
                        Free Toy & Free Shaker
                    </div>
                )}
            </div>
        </div>
    );
};

//container
//img
//card-title
//gene | age
//price
