import { Button } from '@/shared/components/button/button';
import { Container } from '@/shared/components/container/container';
import { ListProduct } from '@/shared/components/list-product/list-product';
import { ArrowRightIcon } from '@/shared/icons';
import { products } from '@/shared/mockup';
import classNames from 'classnames/bind';
import styles from './whatsnew.module.scss';

const cx = classNames.bind(styles);
type WhatsnewProps = {};

export const Whatsnew = (props: WhatsnewProps) => {
    return (
        <Container>
            <div className={cx('container')}>
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
                <ListProduct data={products} />
                <div className={cx('container-right-mobile')}>
                    <Button fullWidth={true} variant="outlined" endIcon={<ArrowRightIcon />}>
                        View more
                    </Button>
                </div>
            </div>
        </Container>
    );
};
