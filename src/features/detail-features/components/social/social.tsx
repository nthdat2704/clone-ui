import classNames from 'classnames/bind';
import React from 'react';
import styles from './social.module.scss';
import { ShareIcon } from '@/shared/icons';
import Link from 'next/link';
type SocialItem = {
    icon: React.ReactNode;
    url: string;
};
type SocialProps = {
    data: SocialItem[];
};
const cx = classNames.bind(styles);

export const Social = ({ data }: SocialProps) => {
    return (
        <div className={cx('social')}>
            <div className={cx('social-heading')}>
                <div className={cx('social-icon')}>
                    <ShareIcon />
                </div>
                Share:
            </div>
            <ul className={cx('social-list')}>
                {data.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={cx('social-item')} href={item.url}>
                                {item.icon}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
