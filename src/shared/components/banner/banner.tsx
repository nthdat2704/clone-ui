import banner from '@/shared/assets/images/banner.png';
import block from '@/shared/assets/images/block.png';
import { PlayIcon } from '@/shared/icons';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { Button } from '../button/button';
import { Container } from '../container/container';
import styles from './banner.module.scss';

type BannerProps = {};
const cx = classNames.bind(styles);
export const Banner = (props: BannerProps) => {
    return (
        <div className={cx('container')}>
            <Container>
                <div className={cx('banner__content')}>
                    <div className={cx('banner__left')}>
                        <h1 className={cx('title')}>One More Friend</h1>
                        <h3 className={cx('sub-title')}>Thousands more fun!</h3>
                        <p className={cx('body')}>
                            Having a pet means you have more joy, a new friend, a happy person who will always be with
                            you to have fun. We have 200+ different pets that can meet your needs!
                        </p>
                        <div className={cx('action')}>
                            <Button variant="outlined" endIcon={<PlayIcon />}>
                                View Intro
                            </Button>
                            <Button variant="contained">Explore Now</Button>
                        </div>
                    </div>
                    <div className={cx('banner__right')}>
                        <Image className={cx('human')} src={banner} alt="banner" />
                    </div>
                </div>
            </Container>
        </div>
    );
};
