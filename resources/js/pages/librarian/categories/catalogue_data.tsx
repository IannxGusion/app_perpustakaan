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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { Categories } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const columns: ColumnDef<Categories>[] = [
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
        accessorKey: 'description',
        header: 'Deskripsi',
        cell: ({ row }) => <div className="font-medium">{row.getValue('description')}</div>,
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const category = row.original;

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
                            <ScrollArea className="mt-5 h-[300px] px-5">
                                <DialogHeader className="pt-2">
                                    <DialogTitle>Aksi Kategori</DialogTitle>
                                    <DialogDescription>Pilih aksi untuk kategori ini.</DialogDescription>
                                </DialogHeader>

                                <div className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start underline"
                                        onClick={() => {
                                            navigator.clipboard.writeText(String(category.id));
                                        }}
                                    >
                                        Copy category ID
                                    </Button>

                                    <div className="@container/main flex flex-1 flex-col gap-2">

                                        <Table className="my-3 min-w-full border border-gray-300">
                                            {/* ifo */}
                                            <TableBody>
                                                <TableRow className="border-b border-gray-300">
                                                    <TableCell className="px-4 py-2 font-medium ">Nama</TableCell>
                                                    <TableCell className="px-4 py-2 ">{category.name}</TableCell>
                                                </TableRow>
                                                <TableRow className="border-b border-gray-300">
                                                    <TableCell className="px-4 py-2 font-medium ">Deskripsi</TableCell>
                                                    <TableCell className="px-4 py-2 ">{category.description}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <Tabs defaultValue="hapus" className="w-[400px] mt-10">
                                        <TabsList>
                                            <TabsTrigger value="hapus">
                                                Hapus
                                            </TabsTrigger>
                                            <TabsTrigger value="edit">
                                                Edit
                                            </TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="edit">
                                            <form action={route('categories.update', category.id)} method="POST" encType="multipart/form-data">
                                                <CSRF />
                                                <input type="hidden" name="_method" value="PUT" />

                                                <div className="space-y-4">
                                                    <div>
                                                        <Label htmlFor="name">Nama</Label>
                                                        <Input id="name" name="name" placeholder="Masukkan nama kategori" defaultValue={category.name} />
                                                    </div>

                                                    <div>
                                                        <Label htmlFor="description">Deskripsi</Label>
                                                        <Input id="description" name="description" placeholder="Masukkan deskripsi kategori" defaultValue={category.description} />
                                                    </div>
                                                </div>

                                                <div className="mt-5 flex justify-end">
                                                    <Button type="submit">Simpan</Button>
                                                </div>
                                            </form>
                                        </TabsContent>
                                        <TabsContent value="hapus">
                                            <form className='w-full' action={route('categories.destroy', category.id)} method="DELETE">
                                                <CSRF />
                                                <Button className="w-full" type="submit" variant="destructive">
                                                    Hapus
                                                </Button>
                                            </form>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </div>
            );
        },
    },
];

export function DataTable({ categories }: { categories: Categories[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data: categories,
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
                <Dialog>
                    <DialogTrigger>
                        <Button variant={'outline'}>
                            Tambah
                            <Plus />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <form action={route('categories.store')} method="POST" encType="multipart/form-data">
                            <CSRF />
                            <DialogHeader>
                                <DialogTitle>Tambah kategori</DialogTitle>
                                <DialogDescription>

                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Nama</Label>
                                            <Input id="name" name="name" placeholder="Masukkan nama kategori" />
                                        </div>

                                        <div>
                                            <Label htmlFor="description">Deskripsi</Label>
                                            <Input id="description" name="description" placeholder="Masukkan deskripsi kategori" />
                                        </div>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>

                            <DialogFooter className='mt-5'>
                                <DialogClose>Batal</DialogClose>
                                <Button type='submit'>Tambah</Button>
                            </DialogFooter>
                        </form>

                    </DialogContent>
                </Dialog>

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
