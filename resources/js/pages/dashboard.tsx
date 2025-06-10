import AppLayout from '@/layouts/user-layout';
import { Book, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// element
import Highlight from '@/components/element/highlight';
import SearchBlock from '@/components/element/search';
import Heading from '@/components/heading';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ books }: { books: Book[] }) {
    //    const { books } = props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <section
                className="mt-4 bg-cover bg-center px-4 py-12 text-center"
                style={{
                    backgroundColor: '#cecece',
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23004380' fill-opacity='0.51'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
            >
                <h1 className="mb-2 text-4xl font-bold">Halaman Utama</h1>
                <SearchBlock />
            </section>

            <main className="px-4">
                <Heading title="Top readings" description="Buku-buku yang paling sering dibaca saat ini." />
                <Highlight books={books} />
            </main>
        </AppLayout>
    );
}
