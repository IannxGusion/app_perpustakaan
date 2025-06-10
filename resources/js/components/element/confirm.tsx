'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import type { Book } from '@/types';
import { toast } from 'sonner';
import CSRF from './csrf';

import { parseDate } from 'chrono-node';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

function formatDate(date: Date | undefined) {
    if (!date) {
        return '';
    }

    return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

function formatDateForInput(date: Date | undefined) {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export default function Confirm({ book }: { book: Book }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('In 2 days');
    const [date, setDate] = React.useState<Date | undefined>(parseDate(value) || undefined);
    const [month, setMonth] = React.useState<Date | undefined>(date);

    return (
        <>
            <div className="flex flex-col gap-3">
                <Label htmlFor="date" className="px-1">
                    Jadwalkan Pengembalian
                </Label>
                <div className="relative flex gap-2">
                    <Input
                        id="date"
                        value={value}
                        placeholder="Tomorrow or next week"
                        className="bg-background pr-10"
                        onChange={(e) => {
                            setValue(e.target.value);
                            const date = parseDate(e.target.value);
                            if (date) {
                                setDate(date);
                                setMonth(date);
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowDown') {
                                e.preventDefault();
                                setOpen(true);
                            }
                        }}
                    />
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button id="date-picker" variant="ghost" className="absolute top-1/2 right-2 size-6 -translate-y-1/2">
                                <CalendarIcon className="size-3.5" />
                                <span className="sr-only">Select date</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto overflow-hidden p-0" align="end">
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                month={month}
                                onMonthChange={setMonth}
                                onSelect={(date) => {
                                    setDate(date);
                                    setValue(formatDate(date));
                                    setOpen(false);
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className="text-muted-foreground px-1 text-sm">
                    Tanggal pengembalian: <span className="font-medium">{formatDate(date)}</span>.
                </div>
            </div>

            <AlertDialog>
                <AlertDialogTrigger asChild className="mt-4 w-full hover:cursor-pointer">
                    <Button variant="outline" className="bg-primary text-white">
                        Pinjam Buku
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Konfirmasi</AlertDialogTitle>
                        <AlertDialogDescription>Apakah Anda yakin ingin meminjam buku ini?</AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel type="button">Batal</AlertDialogCancel>

                        <form action={route('borrowings.store', book.id)} method="POST" encType="multipart/form-data">
                            {/* CSRF */}
                            <CSRF />

                            <input type="date" id="return_date" name="return_date" value={formatDateForInput(date)} required hidden />
                            <input type="hidden" name="book_id" id="book_id" value={book.id} required />
                            <AlertDialogAction
                                type="submit"
                                onClick={() => toast.success('Anda telah berhasil meminjam buku di perpustakaan kami!!')}
                            >
                                Pinjam
                            </AlertDialogAction>
                        </form>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
