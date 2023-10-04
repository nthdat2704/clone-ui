import { Button } from '@/shared/components/button/button';
import { Container } from '@/shared/components/container/container';
import { ArrowRightIcon } from '@/shared/icons';
import classNames from 'classnames/bind';
import { Card } from '../card/card';
import styles from './pet-knowledge.module.scss';
import { news } from '../../mockup';
type PetKnowledgeProps = {};

const cx = classNames.bind(styles);
export const PetKnowledge = (props: PetKnowledgeProps) => {
    return (
        <Container>
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    <div className={cx('heading-title')}>
                        <span className={cx('title')}>You already know ?</span>
                        <h3 className={cx('sub-title')}>Useful pet knowledge</h3>
                    </div>
                    <div className={cx('heading-action')}>
                        <Button variant="outlined" endIcon={<ArrowRightIcon />}>
                            View more
                        </Button>
                    </div>
                </div>
                <div className={cx('content')}>
                    {news.map((item) => {
                        return <Card data={item} fullWidth={true} className={cx('product')} />;
                    })}
                </div>
                <Button
                    className={cx('heading-action-mobile')}
                    variant="outlined"
                    fullWidth={true}
                    endIcon={<ArrowRightIcon />}
                >
                    View more
                </Button>
            </div>
        </Container>
    );
};
