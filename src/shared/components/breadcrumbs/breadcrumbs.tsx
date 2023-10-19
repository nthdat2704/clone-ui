import React from 'react';
import styles from './breadcrumbs.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
type BreadCrumbsItem = {
    url: string;
    text: string;
};
type BreadCrumbsProps = {
    data: BreadCrumbsItem[];
    className?: any;
};
const cx = classNames.bind(styles);

export const BreadCrumbs = ({ data = [], className }: BreadCrumbsProps) => {
    const classes = cx('breadcrumbs', {
        className: className,
    });
    return (
        <ul className={classes}>
            {data.map((item, index) => {
                return (
                    <li key={index} className={cx('breadcrumbs-item')}>
                        <Link href={item.url}>{item.text}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
