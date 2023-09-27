import { Footer } from '@/shared/components/footer/footer';
import { Header } from '@/shared/components/header/header';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './main-layout.module.scss';

type MainLayoutProps = {
    children: React.ReactNode;
};
const cx = classNames.bind(styles);
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={cx('container')}>
            <Header />
            <main className={cx('main')}>{children}</main>
            <Footer />
        </div>
    );
};
