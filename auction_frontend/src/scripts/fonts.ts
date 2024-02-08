import { Lemon, Lobster } from 'next/font/google';
import { Trade_Winds } from 'next/font/google';

export const tradeWindsFont = Trade_Winds({
    subsets: ['latin'],
    weight: ['400']
});

export const lemonFont = Lemon({
    weight: '400',
    subsets: ['latin']
});

export const lobsterFont = Lobster({
    subsets: ['latin'],
    weight: '400'
});
