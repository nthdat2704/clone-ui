import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames/bind';

type ButtonProps = {
    children: React.ReactNode;
    color?: 'primary' | 'secondary';
    size?: 'large' | 'medium' | 'small';
    component?: 'a' | 'button';
    href?: 'string' | any;
    startICon?: React.ReactElement;
    endIcon?: React.ReactElement;
    variant?: 'contained' | 'outlined' | 'text';
    disabled?: boolean;
    fullWidth?: boolean;
    className?: any;
    shape?: 'pill' | 'rounded';
    onClick?: () => void;
};

const cx = classNames.bind(styles);

export const Button = ({
    children,
    variant = 'text',
    color = 'primary',
    size = 'medium',
    shape = 'pill',
    component = 'button',
    href,
    startICon,
    endIcon,
    disabled = false,
    fullWidth = false,
    className = null,
    onClick,
    ...passProps
}: ButtonProps) => {
    const Comp = component;

    const classes = cx('container', {
        [size]: size,
        [color]: color,
        [variant]: variant,
        [shape]: shape,
        disabled,
        fullWidth,
        [className]: className,
    });
    const props = {
        href,
        onClick,
        ...passProps,
    };
    return (
        <Comp className={classes} {...props}>
            {startICon && <span className={cx('icon')}>{startICon}</span>}
            {children}
            {endIcon && <span className={cx('icon')}>{endIcon}</span>}
        </Comp>
    );
};
