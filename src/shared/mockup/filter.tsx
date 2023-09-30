import { RedIcon, ApricotIcon, BlackIcon, BlackAndWhiteIcon, SilverIcon, TanIcon } from '../icons';
export const filters = [
    {
        heading: 'Gender',
        children: [
            {
                text: 'Male',
                checked: false,
                icon: null,
            },
            {
                text: 'Female',
                checked: false,
                icon: null,
            },
        ],
    },
    {
        heading: 'Colors',
        children: [
            {
                text: 'Red',
                checked: false,
                icon: <RedIcon />,
            },
            {
                text: 'Apricot',
                checked: false,
                icon: <ApricotIcon />,
            },
            {
                text: 'Black',
                checked: false,
                icon: <BlackIcon />,
            },
            {
                text: 'Black & White',
                checked: false,
                icon: <BlackAndWhiteIcon />,
            },
            {
                text: 'Silver',
                checked: false,
                icon: <SilverIcon />,
            },
            {
                text: 'Tan',
                checked: false,
                icon: <TanIcon />,
            },
        ],
    },
    {
        heading: 'Breeds',
        children: [
            {
                text: 'Small',
                checked: false,
                icon: null,
            },

            {
                text: 'Medium',
                checked: false,
                icon: null,
            },

            {
                text: 'Large',
                checked: false,
                icon: null,
            },
        ],
    },
];
