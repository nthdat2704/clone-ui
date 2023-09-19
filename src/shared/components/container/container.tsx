import React from 'react';
import styles from './container.module.scss';
import classNames from 'classnames/bind';

type ContainerProps = {
    children: React.ReactNode;
    fluid?: boolean;
    className?: any;
};
const cx = classNames.bind(styles);

export const Container = ({ children, fluid = false, className = null }: ContainerProps) => {
    const classes = cx('container', { container__fluid: fluid, [className]: className });

    return <div className={classes}>{children}</div>;
};
