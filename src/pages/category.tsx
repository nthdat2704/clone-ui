import { Banner } from '@/features/category-features/components/banner/banner';
import { Product } from '@/features/category-features/components/products/product';
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
