import React from 'react';
import classNames from 'classnames/bind';
import styles from './sort.module.scss';
import { ArrowDownFilterIcon } from '@/shared/icons';
import { Button } from '@/shared/components/button/button';
type SortProps = {};
const cx = classNames.bind(styles);
export const Sort = (props: SortProps) => {
    return (
        <Button variant="outlined" className={cx('products-sort-btn')} size="small" endIcon={<ArrowDownFilterIcon />}>
            Sort by: Popular
        </Button>
    );
};
