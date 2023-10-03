import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import required modules
import { animal1, animal10, animal11 } from '@/shared/assets/images';
import { NextIcon, PrevIcon } from '@/shared/icons';
import Image, { StaticImageData } from 'next/image';
import { useRef, useState } from 'react';
import styles from './slider.module.scss';

import classNames from 'classnames/bind';

type SliderItem = {
    id: number;
    imageUrl: StaticImageData;
    alt: string;
};
type SliderProps = {
    data: SliderItem[];
    fullWidth?: boolean;
    className?: any;
};
const cx = classNames.bind(styles);

export const Slider = ({ data = [], fullWidth = false, className }: SliderProps) => {
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
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('slider-swiper-main')}
            >
                {data.map((item: SliderItem) => {
                    return (
                        <SwiperSlide key={item.id}>
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
                onSwiper={setThumbsSwiper}
                spaceBetween={12}
                slidesPerView={'auto'}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={cx('slider-swiper-thumb')}
            >
                {data.map((item: SliderItem) => {
                    return (
                        <SwiperSlide className={cx('slider-thumb')}>
                            <Image src={item.imageUrl} alt={item.alt} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
