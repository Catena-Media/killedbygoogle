import { Metadata } from 'next';
import slugify from 'slugify';

// Data
import graveyard from '../graveyard-catena.json';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import { ProductWithSlug, ProductType } from '../types/Product';

export const metadata: Metadata = {
    title: 'Catena Media Graveyard - Killed by Catena Media',
    description: 'Killed by Catena Media is the Catena Media Graveyard. A full list of deprecated projects and products discontinued by Catena Media.',
    keywords: ['Catena Media', 'graveyard', 'killed', 'deprecated', 'projects', 'products', 'services'],
    authors: [{ name: 'Catena Media' }],
    creator: 'Catena Media',
    publisher: 'Catena Media',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://killedbycatena.na.catenacloud.io'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Killed by Catena Media',
        description: 'Killed by Catena Media is the internal list of deprecated Catena Media projects, services, and products. It serves as a tribute and memorial of beloved projects discontinued by Catena Media.',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://killedbycatena.na.catenacloud.io',
        siteName: 'Killed by Catena Media',
        images: [
            {
                url: '/social/card.png',
                width: 1200,
                height: 630,
                alt: 'Killed by Catena Media',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Killed by Catena Media',
        description: 'Killed by Catena Media is the Catena Media Graveyard. A full list of deprecated projects discontinued by Catena Media.',
        site: '@catenamedia',
        creator: '@catenamedia',
        images: ['/social/card-twitter.png'],
    },
    other: {
        'theme-color': '#FAFAFA',
    },
};

async function getProcessedItems(): Promise<ProductWithSlug[]> {
    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        type: item.type as ProductType,
        slug: slugify(item.name, {
            lower: true,
        })
    })).sort((a, b) => (new Date(b.dateClose)).getTime() - (new Date(a.dateClose)).getTime());

    return processed;
}

export default async function HomePage() {
    const items = await getProcessedItems();

    return (
        <>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
} 