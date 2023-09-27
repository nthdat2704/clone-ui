import { BannerOneMore } from '@/features/banner-one-more/banner-one-more';
import OutProducts from '@/features/our-products/our-products';
import { PetKnowledge } from '@/features/pet-knowledge/pet-knowledge';
import { PetSeller } from '@/features/pet-seller/pet-seller';
import { Whatsnew } from '@/features/whatsnew/whatsnew';
import { BannerLayout } from '@/shared/layouts/banner-layout/banner-layout';

export default function Home() {
    return (
        <>
            <Whatsnew />
            <BannerOneMore />
            <OutProducts />
            <PetSeller />
            <PetKnowledge />
        </>
    );
}
Home.getLayout = function getLayout(page: React.ReactElement) {
    return <BannerLayout>{page}</BannerLayout>;
};
