import { Banner } from '@/features/dog-features/banner/banner';
import { Product } from '@/features/dog-features/products/product';
import { MainLayout } from '@/shared/layouts/main-layout/main-layout';
import React from 'react';

type DogProps = {};

export default function Dog({}: DogProps) {
    return (
        <>
            <Banner />
            <Product />
        </>
    );
}
Dog.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
