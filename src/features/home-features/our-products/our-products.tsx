import React from 'react';
import styles from './our-products.module.scss';
import classNames from 'classnames/bind';
import { Container } from '@/shared/components/container/container';
import { Button } from '@/shared/components/button/button';
import { ArrowRightIcon } from '@/shared/icons';
import { Card } from '@/shared/components/card/card';
import { animal10, animal11, animal12, animal15, animal16, animal3, animal4, animal9 } from '@/shared/assets/images';
import { products } from '@/shared/mockup';
const cx = classNames.bind(styles);
type OutProductsProps = {};
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
                    {products.map((item) => {
                        return <Card className={cx('product')} fullWidth={true} data={item} />;
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
