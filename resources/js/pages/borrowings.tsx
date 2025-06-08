import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Borrowing, Collection } from '@/types';
import { Head } from '@inertiajs/react';

import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';

import ToBorrowings from '@/pages/book cards/ToBorrowings';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Riwayat Pinjaman',
        href: '/borrowings',
    },
];

export default function Borrowings({ ...props }: { borrowings: Borrowing[]; collections: Collection[] }) {
    const { borrowings = [], collections = [] } = props;

    // Pagination state
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Slice borrowings for current page
    const paginatedborrowings = borrowings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Riwayat Pinjaman" />

            {/* Hero Section */}
            <section
                className="mt-4 bg-gray-200 px-4 py-12 text-center"
                style={{
                    backgroundColor: '#cecece',
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23004380' fill-opacity='0.51'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")",
                }}
            >
                <h1 className="text-4xl font-bold">Pinjaman</h1>
            </section>

            {/* borrowings List */}
            {borrowings.length >= 5 ? (
                <>
                    <div className="mx-5 space-y-7 pb-20">
                        {paginatedborrowings.map((borrowing) => (
                            <ToBorrowings key={borrowing.id} borrowing={borrowing} collections={collections} />
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center border-t-2">
                        <TablePagination
                            component="div"
                            count={borrowings.length}
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
                </>
            ) : borrowings.length >= 1 ? (
                <div className="mx-5 space-y-7">
                    {paginatedborrowings.map((borrowing) => (
                        <ToBorrowings key={borrowing.id} borrowing={borrowing} collections={collections} />
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground col-span-full text-center">Riwayat kosong.</p>
            )}
        </AppLayout>
    );
}
