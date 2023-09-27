import { Banner } from '@/shared/components/banner/banner';
import { Footer } from '@/shared/components/footer/footer';
import { Header } from '@/shared/components/header/header';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './banner-layout.module.scss';

type BannerLayoutProps = {
    children: React.ReactNode;
};
const cx = classNames.bind(styles);

export const BannerLayout = ({ children }: BannerLayoutProps) => {
    return (
        <div className={cx('container')}>
            <div className={cx('background-container')}>
                <Header />
                <Banner />
                <div className={cx('background-block-top')}></div>
                <div className={cx('background-block-bottom')}></div>
            </div>
            <main className={cx('main')}>{children}</main>
            <Footer />
        </div>
    );
};
