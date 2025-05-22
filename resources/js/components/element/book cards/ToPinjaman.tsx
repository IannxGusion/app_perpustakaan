import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { DialogHeader } from "@/components/ui/dialog";
import { Borrowing } from "@/types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SquareTerminal } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area"

import { Badge } from "@/components/ui/badge";
import { Link } from "@inertiajs/react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ToPinjaman({ borrowing }: { borrowing: Borrowing }) {
    const [value, setValue] = React.useState<number | null>(2);

    return (
        <Card className='flex flex-row drop-shadow-lg hover:drop-shadow-none hover:border-2 hover:border-black' key={borrowing.book.id}>
            <CardHeader className='w-56'>
                <img
                    src={borrowing.book.cover}
                    alt={borrowing.book.title}
                    className="w-full h-full object-cover shadow border border-slate-700 dark:border-slate-300" />
            </CardHeader>

            <CardContent className="w-full h-full my-8">

                <CardTitle className="flex flex-row justify-between">
                    <div className="flex items-center space-x-2">
                        {borrowing.book.category ? (
                            <Badge className="flex items-center px-2 py-1 text-sm font-medium text-white bg-black rounded">
                                <SquareTerminal className="mr-1" size={16} />
                                {borrowing.book.category.name}
                            </Badge>
                        ) : (
                            <Badge className="px-2 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded">
                                Anonymous
                            </Badge>
                        )}
                    </div>

                    {/* KOLEKSI */}
                    <div>
                        COLLECT
                    </div>
                </CardTitle>

                <CardDescription>

                    <Dialog>
                        <DialogTrigger>
                            <Button asChild variant={'ghost'} className='my-1 p-0 hover:cursor-pointer'>
                                <h2 className="text-xl font-bold text-black">
                                    {borrowing.book.title}
                                </h2>
                            </Button>
                        </DialogTrigger>

                        <p>{borrowing.book.author}</p>

                        <DialogContent className="sm:max-w-[600px]">
                            <ScrollArea className="h-[500px] px-10 border-r-2 mt-5">

                                <DialogHeader>
                                    <DialogTitle>Info Buku</DialogTitle>
                                </DialogHeader>

                                <table className="min-w-full border border-gray-300 mt-2">
                                    <tbody>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Judul</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.title}</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Genre</td>
                                            <td className="px-4 py-2 text-gray-900">
                                                {borrowing.book.category ? borrowing.book.category.name : "Anonymous"}
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Penulis</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.author}</td>
                                        </tr>
                                        <tr className="border-b border-gray-300">
                                            <td className="px-4 py-2 font-medium text-gray-700">Penerbit</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.publisher}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium text-gray-700">Tgl. Terbit</td>
                                            <td className="px-4 py-2 text-gray-900">{borrowing.book.publication_date}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <form className="mt-10" action="#">
                                    <div className="mb-5">
                                        <Label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"><DialogTitle>Ulas Buku</DialogTitle></Label>

                                        <input type="number" name="star" id="star">
                                            {/* 
                                                                                        <Box sx={{ '& > legend': { mt: 2 } }}>
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(_, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                />
                                            </Box>
                                             */}

                                        </input>

                                        <Textarea name="comment" id="comment" placeholder="Tulis ulasan..." />
                                    </div>
                                    <button type="submit" className="min-w-full text-white bg-primary hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </ScrollArea>

                        </DialogContent>
                    </Dialog>

                </CardDescription>

                <CardAction className="w-full h-full">
                    <Button asChild className="w-full h-7 bg-primary rounded mt-3 text text-white" >
                        <Link target="_blank" href={`borrowings/${borrowing.book.id}`}>Baca</Link>
                    </Button>
                </CardAction>
            </CardContent>
        </Card>
    )
}