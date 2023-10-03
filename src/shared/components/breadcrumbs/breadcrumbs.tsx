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
};
const cx = classNames.bind(styles);

export const BreadCrumbs = ({ data = [] }: BreadCrumbsProps) => {
    return (
        <ul className={cx('breadcrumbs')}>
            {data.map((item) => {
                return (
                    <li className={cx('breadcrumbs-item')}>
                        <Link href={item.url}>{item.text}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
