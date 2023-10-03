import { DetailProduct } from '@/features/detail-features/components/detail-product/detail-product';
import { OutLovelyCustomer } from '@/features/detail-features/components/our-lovely-customer/out-lovely-customer';
import { SeeMore } from '@/features/detail-features/components/see-more/see-more';
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
