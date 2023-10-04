import { commonImage } from '@/shared/assets/images';
import { routes } from '@/shared/constants';
import { ArrowDownIcon, CartICon, FlagIcon, HeartIcon, MenuIcon, SearchIcon, SearchIconHeader } from '@/shared/icons';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { Button } from '../button/button';
import { Container } from '../container/container';
import { Input } from '../input/input';
import styles from './header.module.scss';
type HeaderProps = {};

const cx = classNames.bind(styles);

export const Header = (props: HeaderProps) => {
    return (
        <header className={cx('header__container')}>
            <Container>
                <div className={cx('header__content')}>
                    <div className={cx('header__left')}>
                        <div className={cx('logo')}>
                            <Image src={commonImage.logo} alt="logo" />
                        </div>
                        <ul className={cx('menu__list')}>
                            {routes.map((item) => {
                                return (
                                    <li className={cx('menu__item')} key={item.title}>
                                        {item.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('search')}>
                            <Input
                                className={cx('search-input')}
                                placeholder="Search something here!"
                                startIcon={<SearchIcon />}
                            />
                        </div>
                        <div className={cx('join')}>
                            <Button className={cx('join-button')} variant="contained" fullWidth={true}>
                                Join the community
                            </Button>
                        </div>
                        <div className={cx('action')}>
                            <span className={cx('icon')}>
                                <FlagIcon />
                            </span>
                            <span>VND</span>
                            <span className={cx('icon')}>
                                <ArrowDownIcon />
                            </span>
                        </div>
                    </div>
                    <div className={cx('header__right-collapse')}>
                        <div className={cx('search')}>
                            <span className={cx('icon')}>
                                <SearchIconHeader />
                            </span>
                        </div>
                        <div className={cx('join')}>
                            <span className={cx('icon')}>
                                <HeartIcon />
                            </span>
                        </div>
                        <div className={cx('action')}>
                            <span className={cx('icon')}>
                                <CartICon />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('header__mobile')}>
                    <span className="icon">
                        <MenuIcon />
                    </span>
                    <div className={cx('logo')}>
                        <Image src={commonImage.logo} alt="logo" />
                    </div>
                    <span className="icon">
                        <SearchIconHeader />
                    </span>
                </div>
            </Container>
        </header>
    );
};
