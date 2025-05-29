import AppLayout from '@/layouts/user-layout';
import { type BreadcrumbItem, Borrowing, Collection } from '@/types';
import { Head } from '@inertiajs/react';

import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

import ToBorrowings from '@/pages/book cards/ToBorrowings';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Riwayat Pinjaman',
        href: '/borrowings',
    },
];

export default function Borrowings({ ...props }: { borrowings: Borrowing[], collections: Collection[] }) {
    const { borrowings = [], collections = [] } = props;

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

    // Slice borrowings for current page
    const paginatedborrowings = borrowings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Riwayat Pinjaman" />

            {/* Hero Section */}
            <section className="bg-gray-200 text-center py-12 px-4 mt-4">
                <h1 className="text-4xl font-bold">Pinjaman</h1>
            </section>

            {/* borrowings List */}
            <div className="border-b-2 pb-20 space-y-7 mx-5">
                {paginatedborrowings.map((borrowing) => (
                    <ToBorrowings key={borrowing.id} borrowing={borrowing} collections={collections}/>
                ))}
            </div>
            <div className="flex justify-center mt-4">
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

        </AppLayout>
    );
}