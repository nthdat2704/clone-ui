import classNames from 'classnames/bind';
import styles from './footer.module.scss';
import { Container } from '../container/container';
import { Input } from '../input/input';
import { Button } from '../button/button';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@/shared/icons';
import Image from 'next/image';
import logo from '@/shared/assets/images/logo.png';
import { socialList } from '@/shared/mockup';
type FooterProps = {};

const cx = classNames.bind(styles);

const contactList = [
    { name: 'Home', url: '/' },
    { name: 'Category', url: '/category' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];

export const Footer = (props: FooterProps) => {
    return (
        <footer>
            <Container className={cx('container')} fluid={true}>
                <div className={cx('container-top')}>
                    <div className={cx('register__container')}>
                        <div className={cx('register__left')}>Register now so you don't miss our programs</div>
                        <div className={cx('register__right')}>
                            <Input className={cx('register-input')} fullWidth={true} placeholder="Enter your Email" />
                            <Button className={cx('register-button')} variant="contained">
                                Subcribe Now
                            </Button>
                        </div>
                    </div>
                    <div className={cx('contact')}>
                        <ul className={cx('contact-left')}>
                            {contactList.map((item) => {
                                return (
                                    <li>
                                        <Link className={cx('contact-item')} href={item.url}>
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className={cx('contact-right')}>
                            {socialList.map((item) => {
                                return (
                                    <li>
                                        <Link className={cx('contact-social')} href={item.url}>
                                            {item.icon}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={cx('container-bottom')}>
                    <div className={cx('copyright')}>© 2022 Monito. All rights reserved.</div>
                    <div className={cx('logo')}>
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className={cx('privacy')}>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
