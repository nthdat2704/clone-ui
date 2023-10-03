import { Button } from '@/shared/components/button/button';
import { Container } from '@/shared/components/container/container';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import styles from './detail-product.module.scss';
import { SliderWithThumb } from '../slider-with-thumb/slider-with-thumb';
import { sliders, productDetail, breadcrumbs, socialList } from '@/shared/mockup';
import { AnimalCerfiticateIcon, HeartCerfiticateIcon, ShareIcon } from '@/shared/icons';
import { BreadCrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import Link from 'next/link';
import { HealthCerfiticate } from '../health-cerfiticate/health-cerfiticate';
type DetailProductProps = {};
const cx = classNames.bind(styles);

export const DetailProduct = ({}: DetailProductProps) => {
    return (
        <Container>
            <div className={cx('container')}>
                <div className={cx('slider')}>
                    <SliderWithThumb data={sliders} fullWidth={true} />
                    <HealthCerfiticate className={cx('health')} />
                    <div className={cx('social')}>
                        <div className={cx('social-heading')}>
                            <div className={cx('social-icon')}>
                                <ShareIcon />
                            </div>
                            Share:
                        </div>
                        <ul className={cx('social-list')}>
                            {socialList.map((item) => {
                                return (
                                    <li>
                                        <Link className={cx('social-item')} href={item.url}>
                                            {item.icon}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={cx('product')}>
                    <BreadCrumbs data={breadcrumbs} />
                    <p className={cx('product-id')}>SKU #1000078</p>
                    <h3 className={cx('product-name')}>Shiba Inu Sepia</h3>
                    <h3 className={cx('product-price')}>34.000.000 VND</h3>
                    <div className={cx('product-action')}>
                        <Button variant="contained" color="primary">
                            Contact us
                        </Button>
                        <Button variant="outlined" color="primary">
                            Chat with Monito
                        </Button>
                    </div>
                    <div className={cx('product-detail')}>
                        {productDetail.map((item) => {
                            return (
                                <div className={cx('product-row-group')}>
                                    <p className={cx('product-heading')}>{item.heading}</p>
                                    <p className={cx('product-desc')}>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                    <HealthCerfiticate className={cx('health-mobile')} />
                </div>
            </div>
        </Container>
    );
};
