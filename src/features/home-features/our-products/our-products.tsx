import React from 'react';
import styles from './our-products.module.scss';
import classNames from 'classnames/bind';
import { Container } from '@/shared/components/container/container';
import { Button } from '@/shared/components/button/button';
import { ArrowRightIcon } from '@/shared/icons';
import { Card } from '@/shared/components/card/card';
import { animal10, animal11, animal12, animal15, animal16, animal3, animal4, animal9 } from '@/shared/assets/images';

const cx = classNames.bind(styles);
type OutProductsProps = {};
const data = [
    {
        id: 1,
        imageUrl: animal9,
        title: 'MO231 - Pomeranian White',
        price: '6.900.000 VND',
        gift: true,
    },
    {
        id: 2,
        imageUrl: animal10,
        title: 'MO502 - Poodle Tiny Yellow',
        price: '3.900.000 VND',
        gift: true,
    },
    {
        id: 3,
        imageUrl: animal11,
        title: 'MO102 - Poodle Tiny Sepia',
        price: '4.000.000 VND',
        gift: true,
    },
    {
        id: 4,
        imageUrl: animal12,
        title: 'MO512 - Alaskan Malamute Grey',
        price: '8.900.000 VND',
        gift: true,
    },
    {
        id: 5,
        imageUrl: animal3,
        title: 'MO231 - Pembroke Corgi Cream',
        price: '7.900.000 VND',
        gift: true,
    },
    {
        id: 6,
        imageUrl: animal4,
        title: 'MO502 - Pembroke Corgi Tricolor',
        price: '9.000.000 VND',
        gift: true,
    },
    {
        id: 7,
        imageUrl: animal15,
        title: 'MO231 - Pomeranian White',
        price: '6.500.000 VND',
        gift: true,
    },
    {
        id: 8,
        imageUrl: animal16,
        title: 'MO512 - Poodle Tiny Dairy Cow',
        price: '5.000.000 VND',
        gift: true,
    },
];
export const OutProducts = (props: OutProductsProps) => {
    return (
        <section className={cx('container')}>
            <Container>
                <div className={cx('container-top')}>
                    <div className={cx('container-left')}>
                        <span className={cx('heading-top')}>Hard to choose right products for your pets?</span>
                        <h3 className={cx('heading-bottom')}>Our Products</h3>
                    </div>
                    <div className={cx('container-right')}>
                        <Button variant="outlined" endIcon={<ArrowRightIcon />}>
                            View more
                        </Button>
                    </div>
                </div>
                <div className={cx('container-bottom')}>
                    {data.map((item) => {
                        return <Card data={item} />;
                    })}
                </div>
                <div className={cx('container-right-mobile')}>
                    <Button fullWidth={true} variant="outlined" endIcon={<ArrowRightIcon />}>
                        View more
                    </Button>
                </div>
            </Container>
        </section>
    );
};
