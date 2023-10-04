import { Button } from '@/shared/components/button/button';
import { Container } from '@/shared/components/container/container';
import { ArrowRightIcon, PlayIcon } from '@/shared/icons';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { bannersImage } from '../../assets';
import styles from './pet-seller.module.scss';
import { brands } from '../../mockup';
type PetSellerProps = {};
const cx = classNames.bind(styles);

export const PetSeller = (props: PetSellerProps) => {
    return (
        <Container className={cx('container')}>
            <div className={cx('container-wrapper')}>
                <div className={cx('heading')}>
                    <div className={cx('heading-left')}>
                        <span className={cx('title')}>Proud to be part of</span>
                        <h3 className={cx('sub-title')}>Pet Sellers</h3>
                    </div>
                    <div className={cx('heading-right')}>
                        <Button variant="outlined" endIcon={<ArrowRightIcon />}>
                            View all our sellers
                        </Button>
                    </div>
                </div>
                <div className={cx('brand-logo')}>
                    {brands.map((item) => {
                        return (
                            <div className={cx('brand-logo-wrapper')}>
                                <Image src={item.imageUrl} alt="brand" />
                            </div>
                        );
                    })}
                </div>
                <div className={cx('banner')}>
                    <div className={cx('banner-left')}>
                        <h1 className={cx('title')}>Adoption</h1>
                        <h3 className={cx('sub-title')}>We need help. so do they.</h3>
                        <div className={cx('body')}>
                            Adopt a pet and give it a home, it will be love you back unconditionally.
                        </div>
                        <div className={cx('action')}>
                            <Button variant="contained">Explore Now</Button>
                            <Button variant="outlined" endIcon={<PlayIcon />}>
                                View Intro
                            </Button>
                        </div>
                    </div>
                    <Image src={bannersImage.image2} alt="image" />
                    <div className={cx('block-left')}></div>
                    <div className={cx('block-right')}></div>
                </div>
            </div>
        </Container>
    );
};
