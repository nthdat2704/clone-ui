import { BannerOneMore } from '@/features/home-features/banner-one-more/banner-one-more';
import { OutProducts } from '@/features/home-features/our-products/our-products';
import { PetKnowledge } from '@/features/home-features/pet-knowledge/pet-knowledge';
import { PetSeller } from '@/features/home-features/banner-one-more/pet-seller/pet-seller';
import { Whatsnew } from '@/features/home-features/whatsnew/whatsnew';
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
