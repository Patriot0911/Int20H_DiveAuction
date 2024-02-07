import type { Metadata } from 'next';
import { TRooutLayoutProps } from '@/types';
import Layouts from '@/components/Layouts/Layouts';
import './globals.css';


export const metadata: Metadata = {
    title: 'Auction Dive',
    description: 'Dive yourself in the world of charity events with us'
};

const RootLayout = ({ children }: TRooutLayoutProps) => {
    return (
        <html
            lang={"en"}
        >
            <Layouts>
                {children}
            </Layouts>
        </html>
    );
};

export default RootLayout;
