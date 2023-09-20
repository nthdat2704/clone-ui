import React from 'react';
import { Header } from '@/shared/components/header/header';
import { Footer } from '@/shared/components/footer/footer';
import styles from './main-layout.module.scss';
import classNames from 'classnames/bind';
import { Button } from '@/shared/components/button/button';
import { Input } from '@/shared/components/input/input';
import { Banner } from '@/shared/components/banner/banner';
import { FlagIcon } from '@/shared/icons';
import { Card } from '@/shared/components/card/card';
import { Container } from '@/shared/components/container/container';
import { CheckBox } from '@/shared/components/checkbox/checkbox';
import Image from 'next/image';
import hero from '@/shared/assets/images/herobanner.png';
import { BannerOneMore } from '@/features/banner-one-more/banner-one-more';

type MainLayoutProps = {
    children: React.ReactNode;
};
const cx = classNames.bind(styles);
const handleClick = () => {
    alert('clicked ...');
};
const data = [
    {
        urlImage:
            'https://images.unsplash.com/photo-1694384512183-5d51407b08cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80',
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, dolores facere voluptatibus, ab ipsa inventore dolor dolorum ratione, nulla placeat voluptates ullam quaerat quis dignissimos? Eligendi consectetur impedit temporibus sapiente.',
        info: 'this is info one',
        price: '120000',
    },
    {
        urlImage:
            'https://plus.unsplash.com/premium_photo-1671253988317-4ac145c8305e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80',
        title: 'this is image twothis is image twothis is image twothis is image twothis is image two',
        info: '〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇',
        price: '120000',
    },
    {
        urlImage:
            'https://images.unsplash.com/photo-1693922874336-fd3c4b0084b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80',
        title: 'this is image three',
        info: 'this is info three',
        price: '120000',
    },
    {
        urlImage:
            'https://images.unsplash.com/photo-1694467666983-3fa4a29e7ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=120',
        title: 'this is image four',
        info: 'this is info four',
        price: '120000',
    },
];

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className={cx('container')}>
            <div className={cx('background-container')}>
                <Header />
                <Banner />
            </div>
            <main className={cx('main')}>{children}</main>
            <Footer />
        </div>
    );
};
