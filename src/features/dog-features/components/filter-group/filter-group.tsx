import { CheckBox } from '@/shared/components/checkbox/checkbox';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './filter-group.module.scss';
type FilterItem = {
    text: string;
    checked: boolean;
    icon: React.ReactNode;
};
type FilterData = {
    heading: string;
    children: FilterItem[];
};
type FilterGroupProps = {
    data: FilterData;
};
const cx = classNames.bind(styles);
export const FilterGroup = ({ data }: FilterGroupProps) => {
    return (
        <div className={cx('filter-group')}>
            <div className={cx('filter-sub-heading')}>{data?.heading}</div>
            <div className={cx('filter-select')}>
                {data?.children.map((item) => {
                    return <CheckBox label={item.text} slot={item.icon} checked={item.checked} />;
                })}
            </div>
        </div>
    );
};
