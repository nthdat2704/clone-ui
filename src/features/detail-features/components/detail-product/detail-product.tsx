import { BreadCrumbs } from '@/shared/components/breadcrumbs/breadcrumbs';
import { Container } from '@/shared/components/container/container';
import { breadcrumbs, socialList } from '@/shared/mockup';
import classNames from 'classnames/bind';
import { Detail } from '../detail/detail';
import { HealthCerfiticate } from '../health-cerfiticate/health-cerfiticate';
import { SliderWithThumb } from '../slider-with-thumb/slider-with-thumb';
import { Social } from '../social/social';
import styles from './detail-product.module.scss';
import { productDetail, sliders } from '../../mockup';
type DetailProductProps = {};
const cx = classNames.bind(styles);

export const DetailProduct = ({}: DetailProductProps) => {
    return (
        <Container>
            <div className={cx('container')}>
                <div className={cx('slider')}>
                    <SliderWithThumb data={sliders} fullWidth={true} />
                    <HealthCerfiticate className={cx('health')} />
                    <Social data={socialList} />
                </div>
                <div className={cx('product')}>
                    <BreadCrumbs data={breadcrumbs} />
                    <Detail data={productDetail} />
                    <HealthCerfiticate className={cx('health-mobile')} />
                </div>
            </div>
        </Container>
    );
};
