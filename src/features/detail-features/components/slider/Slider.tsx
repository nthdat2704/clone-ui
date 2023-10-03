import classNames from 'classnames/bind';
import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';

type SliderItem = {
    id: number;
    imageUrl: StaticImageData;
    alt: string;
};
type SliderProps = {
    data: SliderItem[];
};
const cx = classNames.bind(styles);
export const Slider = ({ data }: SliderProps) => {
    const classes = cx('slider');
    return (
        <div className={classes}>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={12}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {data.map((item) => {
                    return (
                        <SwiperSlide className={cx('slider-item')}>
                            <Image key={item.id} src={item.imageUrl} alt={item.alt} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
