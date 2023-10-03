import { DetailProduct } from '@/features/detail-features/detail-product/detail-product';
import { MainLayout } from '@/shared/layouts/main-layout/main-layout';
import React from 'react';

type DetailProps = {};

export default function Detail({}: DetailProps) {
    return (
        <>
            <DetailProduct />
        </>
    );
}
Detail.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
