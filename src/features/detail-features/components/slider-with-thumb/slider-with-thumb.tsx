import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import required modules
import { NextIcon, PrevIcon } from '@/shared/icons';
import Image, { StaticImageData } from 'next/image';
import { useRef, useState } from 'react';
import styles from './slider-with-thumb.module.scss';

import classNames from 'classnames/bind';

type SliderWithThumbItem = {
    id: number;
    imageUrl: StaticImageData;
    alt: string;
};
type SliderWithThumbProps = {
    data: SliderWithThumbItem[];
    fullWidth?: boolean;
    className?: any;
};
const cx = classNames.bind(styles);

export const SliderWithThumb = ({ data = [], fullWidth = false, className }: SliderWithThumbProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const classes = cx('slider', {
        fullWidth,
        [className]: className,
    });
    return (
        <div className={cx(classes)}>
            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                //@ts-ignore
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('slider-swiper-main')}
            >
                {data.map((item: SliderWithThumbItem, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Image src={item.imageUrl} alt={item.alt} />
                        </SwiperSlide>
                    );
                })}
                <div className={cx('prev-btn', 'control-btn')} ref={prevRef}>
                    <PrevIcon />
                </div>
                <div className={cx('next-btn', 'control-btn')} ref={nextRef}>
                    <NextIcon />
                </div>
            </Swiper>
            <Swiper
                //@ts-ignore
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={'auto'}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('slider-swiper-thumb')}
            >
                {data.map((item: SliderWithThumbItem, index) => {
                    return (
                        <SwiperSlide key={index} className={cx('slider-thumb')}>
                            <Image src={item.imageUrl} alt={item.alt} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
