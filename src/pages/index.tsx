import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Whatsnew } from '@/features/whatsnew/whatsnew';
import { BannerOneMore } from '@/features/banner-one-more/banner-one-more';
import OutProducts from '@/features/our-products/our-products';
import { PetSeller } from '@/features/pet-seller/pet-seller';
import { PetKnowledge } from '@/features/pet-knowledge/pet-knowledge';

const inter = Inter({ subsets: ['latin'] });

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
