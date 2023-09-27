import React from 'react';
import classNames from 'classnames/bind';
import styles from './pet-knowledge.module.scss';
import { Container } from '@/shared/components/container/container';
import { Button } from '@/shared/components/button/button';
import { ArrowRightIcon } from '@/shared/icons';
import { Card } from './components/card/card';
import { knowlege1, knowlege2, knowlege3 } from '@/shared/assets/images';

type PetKnowledgeProps = {};

const data = [
    {
        id: 1,
        urlImage: knowlege1,
        title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
        desc: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
    },
    {
        id: 2,
        urlImage: knowlege2,
        title: 'Dog Diet You Need To Know',
        desc: 'Dividing a dogs diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.',
    },
    {
        id: 3,
        urlImage: knowlege3,
        title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
        desc: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
    },
    // {
    //     id: 4,
    //     urlImage: knowlege1,
    //     title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
    //     desc: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
    // },
];

const cx = classNames.bind(styles);
export const PetKnowledge = (props: PetKnowledgeProps) => {
    return (
        <div className={cx('container')}>
            <Container>
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
                    {data.map((item) => {
                        return <Card data={item} />;
                    })}
                </div>
            </Container>
        </div>
    );
};
