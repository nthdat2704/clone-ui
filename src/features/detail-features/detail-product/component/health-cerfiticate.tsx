import classNames from 'classnames/bind';
import React from 'react';
import styles from './health-cerfiticate.module.scss';
import { AnimalCerfiticateIcon, HeartCerfiticateIcon } from '@/shared/icons';

type HealthCerfiticateProps = {
    className?: any;
};

const cx = classNames.bind(styles);

export const HealthCerfiticate = ({ className }: HealthCerfiticateProps) => {
    const classes = cx('health', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('health-left')}>
                <div className={cx('health-icon')}>
                    <HeartCerfiticateIcon />
                </div>
                <div className={cx('health-text')}>100% health guarantee for pets</div>
            </div>
            <div className={cx('health-right')}>
                <div className={cx('health-icon')}>
                    <AnimalCerfiticateIcon />
                </div>
                <div className={cx('health-text')}>100% guarantee of pet identification</div>
            </div>
        </div>
    );
};
