import React from 'react';
import styles from './see-more.module.scss';
import classNames from 'classnames/bind';
import { Container } from '@/shared/components/container/container';
type SeeMoreProps = {};
const cx = classNames.bind(styles);
import { products } from '@/shared/mockup';
import { Card } from '@/shared/components/card/card';

export const SeeMore = (props: SeeMoreProps) => {
    return (
        <Container>
            <div className={cx('container')}>
                <div className={cx('see-more')}>
                    <div className={cx('see-more-header')}>
                        <div className={cx('see-more-heading')}>Whats new?</div>
                        <div className={cx('see-more-sub-heading')}>See more puppies</div>
                    </div>
                    <div className={cx('see-more-content')}>
                        {products.map((item, index) => {
                            return <Card key={index} fullWidth={true} className={cx('see-more-item')} data={item} />;
                        })}
                    </div>
                </div>
            </div>
        </Container>
    );
};
