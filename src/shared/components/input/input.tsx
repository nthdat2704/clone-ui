import React from 'react';
import styles from './input.module.scss';
import classNames from 'classnames/bind';
import { ErrorIcon } from '@/shared/icons';

type InputProps = {
    placeholder?: string;
    type?: string;
    label?: string;
    helperText?: string;
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    error?: boolean;
    endIcon?: React.ReactNode;
    className?: any;
};
const cx = classNames.bind(styles);

export const Input = ({
    placeholder = '',
    type = 'text',
    label,
    endIcon,
    startIcon,
    fullWidth = false,
    helperText,
    error = false,
    className,
}: InputProps) => {
    const classes = cx('container-input', {
        [className]: className,
        fullWidth,
    });
    const props = {
        placeholder,
        type,
    };
    return (
        <span className={cx('container')}>
            {label && <span>{label}</span>}
            <span className={cx('input-group')}>
                {startIcon && <span className={cx('icon', { ['start-icon']: startIcon })}>{startIcon}</span>}
                <input className={classes} {...props} />
                {endIcon && <span className={cx('icon', 'end-icon')}>{endIcon}</span>}
            </span>
            {helperText && (
                <div className={cx('helper-text', { ['error']: error })}>
                    {error && <span className={cx('error-icon')}> {<ErrorIcon />}</span>}
                    <span>{helperText}</span>
                </div>
            )}
        </span>
    );
};
