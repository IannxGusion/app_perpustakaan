'use client';

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { ChevronDown, MoreHorizontal, Plus } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import CSRF from '@/components/element/csrf';
import TableInfo from '@/components/element/table-info';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Book } from '@/types';
import { Link } from '@inertiajs/react';

import Category from '@/components/element/category';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export const columns: ColumnDef<Book>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: 'ID',
        cell: ({ row }) => <div className="font-medium">{row.getValue('id')}</div>,
    },
    {
        accessorKey: 'title',
        header: 'Judul',
        cell: ({ row }) => <div className="text-lg font-extrabold">{row.getValue('title')}</div>,
    },
    {
        accessorKey: 'category',
        header: 'Kategori',
        cell: ({ row }) => {
            let categories = row.original.categories;
            if (!categories || (Array.isArray(categories) && categories.length === 0)) {
                categories = {
                    id: 0,
                    name: 'Anonymous',
                    description: '',
                    colour: 'gray',
                    icon: '',
                };
            }
            return <Category categories={Array.isArray(categories) ? categories : [categories]} />;
        },
    },
    {
        accessorKey: 'cover',
        header: 'Sampul',
        cell: ({ row }) => {
            const book = row.original;
            return (
                <img
                    src={`/storage/${book.cover}`}
                    alt={book.title.length > 10 ? book.title.slice(0, 10) + '...' : book.title}
                    className="h-full w-full border border-slate-700 dark:border-slate-300"
                />
            );
        },
    },
    {
        accessorKey: 'author',
        header: 'Penulis',
        cell: ({ row }) => <div>{row.getValue('author')}</div>,
    },
    {
        accessorKey: 'publisher',
        header: 'Penerbit',
        cell: ({ row }) => <div>{row.getValue('publisher')}</div>,
    },
    {
        accessorKey: 'publication_date',
        header: 'Tanggal Terbit',
        cell: ({ row }) => <div>{row.getValue('publication_date')}</div>,
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <div className="font-bold underline">{row.getValue('status')}</div>,
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const book = row.original;

            return (
                <div className="flex">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal />
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="p-5">
                            <ScrollArea className="mt-5 h-[500px] border-t-2 border-b-2 p-5">
                                <DialogHeader className="pt-2">
                                    <DialogTitle>Aksi Buku</DialogTitle>
                                    <DialogDescription>Pilih aksi untuk buku ini.</DialogDescription>
                                </DialogHeader>

                                <div className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start underline"
                                        onClick={() => {
                                            navigator.clipboard.writeText(String(book.id));
                                        }}
                                    >
                                        Copy book ID
                                    </Button>

                                    <div className="@container/main flex flex-1 flex-col gap-2">
                                        <TableInfo book={book} />
                                    </div>

                                    <Button asChild className="w-full" variant="outline">
                                        <Link href={route('admin.books.edit', [book.id])}>Edit</Link>
                                    </Button>
                                    <form action={route('admin.books.delete', book['id'])} method="DELETE" className="w-full">
                                        <CSRF />
                                        <Button className="w-full" type="submit" variant="destructive">
                                            Hapus
                                        </Button>
                                    </form>
                                </div>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </div>
            );
        },
    },
];

export function DataTable({ books }: { books: Book[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data: books,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            <div className="flex justify-end space-x-2 py-4">
                <Button variant={'outline'}>
                    <Link target="_blank" href={route('admin.books.import')}>
                        Tambah
                    </Link>
                    <Plus />
                </Button>

                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto">
                                Kolom <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    );
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Baris per halaman</p>
                    <Select
                        value={`${table.getState().pagination.pageSize}`}
                        onValueChange={(value: string) => {
                            table.setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={`${table.getState().pagination.pageSize}`} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-muted-foreground flex-1 text-sm">
                        Memilih {table.getFilteredSelectedRowModel().rows.length} dari {table.getFilteredRowModel().rows.length} baris.
                    </div>
                    <div className="space-x-2">
                        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                            Mundur
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                            Maju
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
