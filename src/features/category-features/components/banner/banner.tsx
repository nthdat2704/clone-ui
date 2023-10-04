import { BreadCrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Button } from '@/shared/components/button/button';
import { Container } from '@/shared/components/container/container';
import { PlayIcon } from '@/shared/icons';
import { breadcrumbs } from '@/shared/mockup';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { bannerImage } from '../../assets/images';
import styles from './banner.module.scss';

type Props = {};
const cx = classNames.bind(styles);

export const Banner = (props: Props) => {
    return (
        <Container className={cx('container')}>
            <BreadCrumbs data={breadcrumbs} />
            <div className={cx('banner')}>
                <div className={cx('banner-left')}>
                    <Image className={cx('banner-image')} src={bannerImage.image1} alt="banner" />
                </div>
                <div className={cx('banner-right')}>
                    <h1 className={cx('banner-heading')}>One more friend</h1>
                    <h3 className={cx('banner-sub-heading')}>Thousands more fun!</h3>
                    <p className={cx('banner-body')}>
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you
                        to have fun. We have 200+ different pets that can meet your needs!
                    </p>
                    <div className={cx('banner-action')}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={cx('banner-view-btn')}
                            endIcon={<PlayIcon />}
                        >
                            View Intro
                        </Button>
                        <Button variant="contained" color="primary" className={cx('banner-explore-btn')}>
                            Explore Now
                        </Button>
                    </div>
                </div>
                <div className={cx('banner-block-primary')}></div>
            </div>
        </Container>
    );
};
