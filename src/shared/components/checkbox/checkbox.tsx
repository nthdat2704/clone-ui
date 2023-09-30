import classNames from 'classnames/bind';
import styles from './checkbox.module.scss';

type CheckBoxProps = {
    type?: 'checkbox' | 'radio';
    label?: string;
    checked?: boolean;
    value?: any;
    slot?: React.ReactNode;
    color?: 'secondary' | 'primary';
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: 'medium' | 'small';
    required?: boolean;
    onChange?: () => void;
    className?: any;
};
const cx = classNames.bind(styles);
export const CheckBox = ({
    type = 'checkbox', //
    label = '', //
    checked = false,
    slot,
    value,
    color = 'primary',
    defaultChecked = false,
    size = 'medium',
    required = false,
    onChange,
    className,
}: CheckBoxProps) => {
    const classes = cx('checkbox', {
        [className]: className,
    });
    const props = {
        type,
    };

    return (
        <label className={cx('form-control')}>
            <input
                className={classes}
                onChange={onChange}
                type={type}
                value={value}
                checked={checked}
                name="checkbox"
            />
            {slot}
            <label className={cx('label')} htmlFor="checkbox">
                {label}
            </label>
        </label>
    );
};
