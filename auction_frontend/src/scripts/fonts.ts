import { Lemon, Lobster, Timmana } from 'next/font/google';
import { Trade_Winds } from 'next/font/google';

export const tradeWindsFont = Trade_Winds({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap'
});

export const lemonFont = Lemon({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});

export const lobsterFont = Lobster({
    subsets: ['latin'],
    weight: '400',
    display: 'swap'
});

export const timmanaFont = Timmana({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap'
});
