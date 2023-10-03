import { DetailProduct } from '@/features/detail-features/detail-product/detail-product';
import { OutLovelyCustomer } from '@/features/detail-features/our-lovely-customer/out-lovely-customer';
import { SeeMore } from '@/features/detail-features/see-more/see-more';
import { MainLayout } from '@/shared/layouts/main-layout/main-layout';
import React from 'react';

type DetailProps = {};

export default function Detail({}: DetailProps) {
    return (
        <>
            <DetailProduct />
            <OutLovelyCustomer />
            <SeeMore />
        </>
    );
}
Detail.getLayout = function getLayout(page: React.ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};
