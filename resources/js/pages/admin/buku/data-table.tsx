"use client"

import * as React from "react"
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
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal, SquareTerminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import type { Book } from '@/types';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import CSRF from "@/components/element/csrf"

export const columns: ColumnDef<Book>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "title",
    header: "Judul",
    cell: ({ row }) => <div className="text-lg font-extrabold">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "category",
    header: "Kategori",
    cell: ({ row }) => <Badge className="text-lg font-extrabold flex items-center px-2 py-1 text-white bg-black rounded"><SquareTerminal className="mr-1" size={16} />{row.original.category?.name}</Badge>
    ,
  },
  {
    accessorKey: "author",
    header: "Penulis",
    cell: ({ row }) => <div>{row.getValue("author")}</div>,
  },
  {
    accessorKey: "publisher",
    header: "Penerbit",
    cell: ({ row }) => <div>{row.getValue("publisher")}</div>,
  },
  {
    accessorKey: "publication_date",
    header: "Tanggal Terbit",
    cell: ({ row }) => <div>{row.getValue("publication_date")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const book = row.original

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

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(String(book.id))}
              className="underline">
              Copy book ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Table className="min-w-full border border-gray-300">
                <TableBody>
                  <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Judul</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.title}</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Genre</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.category.name}</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Penulis</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.author}</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-gray-300">
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Penerbit</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.publisher}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="px-4 py-2 font-medium text-gray-700">Tgl. Terbit</TableCell>
                    <TableCell className="px-4 py-2 text-gray-900">{book.publication_date}</TableCell>
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
              <form action={ route('book.remove', book['id']) } method="DELETE" className="w-full">
                <CSRF />

                <Button className="w-full" type="submit" variant={'destructive'}>
                  Delete
                </Button>
              </form>

            </DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTable({ books }: { books: Book[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
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
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
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
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value: string) => {
              table.setPageSize(Number(value))
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
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
