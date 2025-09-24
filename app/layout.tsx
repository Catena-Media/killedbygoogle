// Global Stylesheet
import './globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';

declare global {
    interface Window {
        umami?: any;
    }
}

export const metadata: Metadata = {
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <script
                    async
                    defer
                    data-website-id={process.env.UMAMI_ID}
                    data-host-url={process.env.NEXT_PUBLIC_SITE_URL || 'https://killedbycatena.na.catenacloud.io'}
                    src="/_next/static/umami.js"
                />
                {children}
            </body>
        </html>
    );
} 