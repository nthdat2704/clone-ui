import { Button } from '@/shared/components/button/button';
import { Container } from '@/shared/components/container/container';
import { PlayIcon } from '@/shared/icons';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { bannersImage } from '../../assets';
import styles from './banner-one-more.module.scss';
const cx = classNames.bind(styles);
type BannerOneMoreProps = {};

export const BannerOneMore = (props: BannerOneMoreProps) => {
    return (
        <Container>
            <div className={cx('container')}>
                <div className={cx('container-wrapper')}>
                    <div className={cx('banner-left')}>
                        <Image src={bannersImage.image1} alt="banner" />
                    </div>
                    <div className={cx('banner-right')}>
                        <div className={cx('banner-right-content')}>
                            <h1 className={cx('title')}>One more friend</h1>
                            <h3 className={cx('sub-title')}>Thousands more fun!</h3>
                            <p className={cx('body')}>
                                Having a pet means you have more joy, a new friend, a happy person who will always be
                                with you to have fun. We have 200+ different pets that can meet your needs!
                            </p>
                            <div className={cx('action')}>
                                <Button variant="outlined" endIcon={<PlayIcon />}>
                                    View Intro
                                </Button>
                                <Button variant="contained">Explore Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('banner-left-block')}></div>
                    <div className={cx('banner-right-block')}></div>
                </div>
            </div>
        </Container>
    );
};
