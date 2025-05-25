import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Book } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

// element
import ToBooks from '@/pages/book cards/ToBooks';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Daftar Buku',
        href: '/list',
    },
];

export default function List({ ...props }: { books: Book[] }) {
    const { books } = props;

    // Pagination state
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Slice books for current page
    const paginatedBooks = books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Daftar Buku" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Daftar Buku</h1>
            </section>

            <div className="p-4">
                {/*<Booklist />*/}
                <div className="border-b-2 pb-20 grid gap-5 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {paginatedBooks.map((book) => (
                        <ToBooks key={book.id} book={book} />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <TablePagination
                        component="div"
                        count={books.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[4, 8, 16, 32]}
                    />
                </div>
            </div>

        </AppLayout>
    );
}