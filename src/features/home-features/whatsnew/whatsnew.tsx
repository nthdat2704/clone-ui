import React from 'react';
import classNames from 'classnames/bind';
import styles from './whatsnew.module.scss';
import { Container } from '@/shared/components/container/container';
import { Button } from '@/shared/components/button/button';
import { ArrowRightIcon } from '@/shared/icons';
// import { animal } from '@/shared/assets/images/animal-1.png';
import { animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8 } from '@/shared/assets/images';

import { Card } from '@/shared/components/card/card';

const cx = classNames.bind(styles);
const data = [
    {
        id: 1,
        imageUrl: animal1,
        title: 'MO231 - Pomeranian White',
        price: '6.900.000 VND',
    },
    {
        id: 2,
        imageUrl: animal2,
        title: 'MO502 - Poodle Tiny Yellow',
        price: '3.900.000 VND',
    },
    {
        id: 3,
        imageUrl: animal3,
        title: 'MO102 - Poodle Tiny Sepia',
        price: '4.000.000 VND',
    },
    {
        id: 4,
        imageUrl: animal4,
        title: 'MO512 - Alaskan Malamute Grey',
        price: '8.900.000 VND',
    },
    {
        id: 5,
        imageUrl: animal5,
        title: 'MO231 - Pembroke Corgi Cream',
        price: '7.900.000 VND',
    },
    {
        id: 6,
        imageUrl: animal6,
        title: 'MO502 - Pembroke Corgi Tricolor',
        price: '9.000.000 VND',
    },
    {
        id: 7,
        imageUrl: animal7,
        title: 'MO231 - Pomeranian White',
        price: '6.500.000 VND',
    },
    {
        id: 8,
        imageUrl: animal8,
        title: 'MO512 - Poodle Tiny Dairy Cow',
        price: '5.000.000 VND',
    },
];
type WhatsnewProps = {};

export const Whatsnew = (props: WhatsnewProps) => {
    return (
        <section className={cx('container')}>
            <Container>
                <div className={cx('container-top')}>
                    <div className={cx('container-left')}>
                        <span className={cx('heading-top')}>Whats new?</span>
                        <h3 className={cx('heading-bottom')}>Take a look at some of our pets</h3>
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
