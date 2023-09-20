import React from 'react';
import styles from './pet-seller.module.scss';
import classNames from 'classnames/bind';
import { Container } from '@/shared/components/container/container';
import { Button } from '@/shared/components/button/button';
import { ArrowRightIcon, PlayIcon } from '@/shared/icons';
import { brand1, brand2, brand3, brand4, brand5, brand6, brand7, hand } from '@/shared/assets/images';
import Image from 'next/image';
type PetSellerProps = {};
const cx = classNames.bind(styles);
const brands = [
    { id: 1, imageUrl: brand1 },
    { id: 2, imageUrl: brand2 },
    { id: 3, imageUrl: brand3 },
    { id: 4, imageUrl: brand4 },
    { id: 5, imageUrl: brand5 },
    { id: 6, imageUrl: brand6 },
    { id: 7, imageUrl: brand7 },
];
export const PetSeller = (props: PetSellerProps) => {
    return (
        <div className={cx('container')}>
            <Container>
                <div className={cx('heading')}>
                    <div className={cx('heading-left')}>
                        <span className={cx('title')}>Proud to be part of</span>
                        <h3 className={cx('sub-title')}>Pet Sellers</h3>
                    </div>
                    <div className={cx('heading-right')}>
                        <Button variant="outlined" endIcon={<ArrowRightIcon />}>
                            View all our sellers
                        </Button>
                    </div>
                </div>
                <div className={cx('brand-logo')}>
                    {brands.map((item) => {
                        return (
                            <div className={cx('brand-logo-wrapper')}>
                                <Image src={item.imageUrl} alt="brand" />
                            </div>
                        );
                    })}
                </div>
                <div className={cx('banner')}>
                    <div className={cx('banner-left')}>
                        <h1 className={cx('title')}>Adoption</h1>
                        <h3 className={cx('sub-title')}>We need help. so do they.</h3>
                        <div className={cx('body')}>
                            Adopt a pet and give it a home, it will be love you back unconditionally.
                        </div>
                        <div className={cx('action')}>
                            <Button variant="contained">Explore Now</Button>
                            <Button variant="outlined" endIcon={<PlayIcon />}>
                                View Intro
                            </Button>
                        </div>
                    </div>
                    <Image src={hand} alt="image" />
                    <div className={cx('block-left')}></div>
                    <div className={cx('block-right')}></div>
                </div>
            </Container>
        </div>
    );
};
