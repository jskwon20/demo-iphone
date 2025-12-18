'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
    colors: {
        dark: [
            '#C1C2C5',
            '#A6A7AB',
            '#909296',
            '#5c5f66',
            '#373A40',
            '#2C2E33',
            '#25262b',
            '#1A1B1E',
            '#141517',
            '#101113',
        ],
        // Apple Blue approximation
        blue: [
            '#E8F6FF',
            '#D0EBFF',
            '#A6D8FF',
            '#74C0FC',
            '#4DABF7',
            '#339AF0', // Mantine default 5 is usually primary
            '#2997ff', // Apple Blue
            '#1C7ED6',
            '#1971C2',
            '#1864AB',
        ],
    },
    primaryColor: 'blue',
    primaryShade: 6,
    fontFamily: 'var(--font-inter)',
    defaultRadius: 'xl',
    headings: {
        fontFamily: 'var(--font-inter)',
        sizes: {
            h1: { fontSize: rem(56), lineHeight: '1.1' },
            h2: { fontSize: rem(48), lineHeight: '1.1' },
            h3: { fontSize: rem(32), lineHeight: '1.2' },
        },
    },
});
