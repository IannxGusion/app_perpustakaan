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
import { ChevronDown, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import CSRF from '@/components/element/csrf';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { User } from '@/types';

export const columns: ColumnDef<User>[] = [
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
        accessorKey: 'name',
        header: 'Nama',
        cell: ({ row }) => <div className="text-lg font-extrabold">{row.getValue('name')}</div>,
    },
    {
        accessorKey: 'avatar',
        header: 'Avatar',
        cell: ({ row }) => <div>{row.getValue('avatar')}</div>,
    },
    {
        accessorKey: 'email',
        header: 'E-mail',
        cell: ({ row }) => <div>{row.getValue('email')}</div>,
    },
    {
        accessorKey: 'created_at',
        header: 'Dibuat',
        cell: ({ row }) => {
            const created_at = row.original.created_at;

            return (
                <div>
                    {created_at
                        ? new Date(created_at).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })
                        : 'Unknown date'}
                </div>
            );
        }
    },
    {
        accessorKey: 'updated_at',
        header: 'Diperbarui',
        cell: ({ row }) => {
            const updated_at = row.original.updated_at;

            return (
                <div>
                    {updated_at
                        ? new Date(updated_at).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })
                        : 'Unknown date'}
                </div>
            );
        }
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const user = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>

                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(String(user.id))} className="underline">
                            Copy User ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <Table className="min-w-full border border-gray-300">
                                <TableBody>
                                    <TableRow className="border-b border-gray-300">
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">Nama</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.name}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-b border-gray-300">
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">E-mail</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.email}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-b border-gray-300">
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">Avatar</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.avatar}</TableCell>
                                    </TableRow>
                                    <TableRow className="border-b border-gray-300">
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">E-mail</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">Dibuat</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.created_at}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">Diperbarui</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.updated_at}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="px-4 py-2 font-medium text-gray-700">Terverivikasi pada</TableCell>
                                        <TableCell className="px-4 py-2 text-gray-900">{user.email_verified_at}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <Button className="w-full" variant={'outline'}>
                                Edit
                            </Button>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <form action={route('admin.borrowers.delete', user['id'])} method="DELETE" className="w-full">
                                <CSRF />

                                <Button className="w-full" type="submit" variant={'destructive'}>
                                    Hapus
                                </Button>
                            </form>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export function DataTable({ users }: { users: User[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data: users,
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
            <div className="flex items-center py-4">
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
