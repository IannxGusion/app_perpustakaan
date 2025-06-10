import { Borrowing, Collection } from '@/types';
import { Link } from '@inertiajs/react';

// ui
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

// elment
import Category from '@/components/element/category';
import Collect from '@/components/element/collect';
import CSRF from '@/components/element/csrf';
import TableInfo from '@/components/element/table-info';
import HeadingSmall from '@/components/heading-small';
import { Check } from 'lucide-react';

export default function ToBorrowings({ borrowing, collections }: { borrowing: Borrowing; collections: Collection[] }) {
    return (
        <Card className="flex flex-col md:flex-row" key={borrowing.book.id}>
            <CardHeader className="w-full md:w-56">
                <img
                    src={`/storage/${borrowing.book.cover}`}
                    alt={borrowing.book.title.length > 50 ? borrowing.book.title.slice(0, 50) + '...' : borrowing.book.title}
                    className="h-64 w-full border border-slate-700 object-cover shadow md:h-full dark:border-slate-300"
                />
            </CardHeader>

            <CardContent className="flex w-full flex-col justify-between p-4">
                <div>
                    <CardTitle className="flex flex-row justify-between space-y-2">
                        <div className="flex items-center space-x-2">
                            <Category
                                categories={Array.isArray(borrowing.book.categories) ? borrowing.book.categories : [borrowing.book.categories]}
                            />
                        </div>

                        {/* KOLEKSI */}
                        <div>
                            {borrowing.book.collected === 'Yes' ? (
                                <Button variant="ghost">
                                    <Check />
                                    Disimpan
                                </Button>
                            ) : (
                                <Collect borrowing={borrowing} collections={collections} />
                            )}
                        </div>
                    </CardTitle>

                    <CardDescription>
                        <Dialog>
                            <DialogTrigger>
                                <Button asChild variant="ghost" className="my-1 rounded-none p-0 hover:cursor-pointer">
                                    <h2 className="text-lg font-bold text-black dark:text-white md:text-xl">
                                        {borrowing.book.title.length > 50 ? borrowing.book.title.slice(0, 50) + '...' : borrowing.book.title}
                                    </h2>
                                </Button>
                            </DialogTrigger>

                            <p className="text-sm">{borrowing.book.author}</p>

                            <DialogContent className="px-5 sm:max-w-[600px]">
                                <ScrollArea className="mt-5 h-[400px] border-r-2 p-5">
                                    <HeadingSmall title={'Info Buku'} />

                                    <TableInfo book={borrowing.book} />

                                    <HeadingSmall title={'Info Peminjaman'} />
                                    <Table className="my-3 min-w-full border border-gray-300">
                                        <TableBody>
                                            <TableRow className="border-b border-gray-300">
                                                <TableCell className="px-4 py-2 font-medium ">Tgl. Meminjam</TableCell>
                                                <TableCell className="px-4 py-2 font-medium ">{borrowing.borrow_date}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="px-4 py-2 font-medium ">Tenggat Pengembalian</TableCell>
                                                <TableCell className="px-4 py-2 font-medium ">{borrowing.return_date}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>

                                    <form action={route('borrowings.return', borrowing['id'])} method="DELETE" className="mt-4 w-full">
                                        <CSRF />
                                        <input type="hidden" name="book_id" value={borrowing.book.id} required />
                                        <input type="hidden" name="borrowing_id" value={borrowing.id} required />
                                        <Button className="w-full" type="submit">
                                            Kembalikan
                                        </Button>
                                    </form>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    </CardDescription>
                </div>

                <CardAction className="mt-4 w-full">
                    <Button asChild className="h-10 w-full">
                        <Link target="_blank" href={`borrowings/download/${borrowing.book.id}`}>
                            Baca
                        </Link>
                    </Button>
                </CardAction>
            </CardContent>
        </Card>
    );
}
