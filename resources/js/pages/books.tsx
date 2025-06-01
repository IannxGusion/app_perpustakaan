import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Book } from '@/types';
import { Head } from '@inertiajs/react';

// ui
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';

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

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Slice books for current page
    const paginatedBooks = books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Daftar Buku" />

            {/* Hero Section */}
            <section
                className="mt-4 bg-gray-200 px-4 py-12 text-center"
                style={{
                    backgroundColor: '#ffffff',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23004380\' fill-opacity=\'0.51\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }}
            >
                <h1 className="text-4xl font-bold">Daftar Buku</h1>
            </section>

            <div className="p-4">
                {/*<Booklist />*/}
                <div className="grid w-full gap-5 border-b-2 pb-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {paginatedBooks.map((book) => (
                        <ToBooks key={book.id} book={book} />
                    ))}
                </div>
                <div className="mt-4 flex justify-center">
                    <TablePagination
                        component="div"
                        count={books.length}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[4, 8, 16, 32]}
                        sx={{
                            color: 'inherit',
                            '.MuiTablePagination-toolbar': {
                                backgroundColor: 'transparent',
                                color: 'inherit',
                            },
                            '.MuiTablePagination-selectLabel, .MuiTablePagination-input, .MuiTablePagination-displayedRows': {
                                color: 'inherit',
                            },
                            '.MuiTablePagination-actions button': {
                                color: 'inherit',
                            },
                        }}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
