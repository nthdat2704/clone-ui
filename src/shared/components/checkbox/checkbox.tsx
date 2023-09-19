import classNames from 'classnames/bind';
import styles from './checkbox.module.scss';

type CheckBoxProps = {
    type?: 'checkbox' | 'radio';
    checked?: boolean;
    value?: any;
    color?: 'secondary' | 'primary';
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: 'medium' | 'small';
    required?: boolean;
    onChange?: () => void;
    className: string;
};
const cx = classNames.bind(styles);
export const CheckBox = ({
    type = 'checkbox',
    checked,
    value,
    color = 'primary',
    defaultChecked = false,
    size = 'medium',
    required = false,
    onChange,
    className,
}: CheckBoxProps) => {
    const classes = cx('container', {});
    const props = {
        type,
    };

    return (
        <label className={cx('form-control')}>
            <input className={cx('container')} type="checkbox" name="checkbox" />
            Checkbox
        </label>
    );
};
