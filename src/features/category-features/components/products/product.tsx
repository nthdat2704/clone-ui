import { Button } from '@/shared/components/button/button';
import { Card } from '@/shared/components/card/card';
import { Container } from '@/shared/components/container/container';
import { FilterIcon } from '@/shared/icons';
import { products } from '@/shared/mockup';
import classNames from 'classnames/bind';

import { filters } from '../../mockup';
import { FilterGroup } from '../filter-group/filter-group';
import { Sort } from '../sort/sort';
import styles from './product.module.scss';
type ProductProps = {};
const cx = classNames.bind(styles);
export const Product = (props: ProductProps) => {
    return (
        <Container className={cx('container')}>
            <div className={cx('filter')}>
                <h3 className={cx('filter-heading')}>Filter</h3>
                {filters.map((item, index) => {
                    return <FilterGroup key={index} data={item} />;
                })}
            </div>
            <div className={cx('filter-mobile')}>
                <Sort />
                <Button className={cx('filter-btn')} startICon={<FilterIcon />}>
                    Filter
                </Button>
            </div>
            <div className={cx('products')}>
                <div className={cx('products-top')}>
                    <div className={cx('products-box')}>
                        <h3 className={cx('products-heading')}>Small Dog</h3>
                        <p className={cx('products-amount')}>52 puppies</p>
                    </div>
                    <div className={cx('products-sort')}>
                        <Sort />
                    </div>
                </div>
                <div className={cx('products-bottom')}>
                    {products.map((item, index) => {
                        return <Card key={index} className={cx('product')} fullWidth={true} data={item} />;
                    })}
                </div>
            </div>
        </Container>
    );
};
