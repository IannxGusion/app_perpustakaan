import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Borrowing } from '@/types';
// import DateRangePicker from './datepick';
import { Button } from '../ui/button';
import { Link } from '@inertiajs/react';
import { Input } from '../ui/input';

export const description = 'An interactive area chart';

interface LogProps {
    borrowings: Borrowing[];
}

export function Log({ borrowings }: LogProps) {
    const [timeRange, setTimeRange] = React.useState('90d');
    const [customFromDate, setCustomFromDate] = React.useState<string>('');
    const [customToDate, setCustomToDate] = React.useState<string>('');
    const [openDialog, setOpenDialog] = React.useState(false);

    // Transform data: count Borrows and Returned per date
    const chartData = React.useMemo(() => {
        const map = new Map<string, { date: string; Borrows: number; Returned: number }>();
        (borrowings || []).forEach((b) => {
            const date = b.created_at.slice(0, 10); // "YYYY-MM-DD"
            if (!map.has(date)) map.set(date, { date, Borrows: 0, Returned: 0 });
            if (b.status === 'Borrows' || b.status === 'Returned') {
                map.get(date)![b.status]++;
            }
        });
        return Array.from(map.values()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }, [borrowings]);

    const filteredData = React.useMemo(() => {
        if (timeRange === 'custom' && customFromDate && customToDate) {
            const from = new Date(customFromDate);
            const to = new Date(customToDate);
            to.setHours(23, 59, 59, 999); // include the whole day
            return chartData.filter((item) => {
                const date = new Date(item.date);
                return date >= from && date <= to;
            });
        } else {
            const date = new Date();
            let daysToSubtract = 90;
            if (timeRange === '30d') {
                daysToSubtract = 30;
            } else if (timeRange === '7d') {
                daysToSubtract = 7;
            }
            const startDate = new Date(date);
            startDate.setDate(startDate.getDate() - daysToSubtract);
            return chartData.filter((item) => {
                const d = new Date(item.date);
                return d >= startDate;
            });
        }
    }, [chartData, timeRange, customFromDate, customToDate]);

    const chartConfig = {
        Borrows: {
            label: 'Borrows',
            color: 'var(--chart-1)',
        },
        Returned: {
            label: 'Returned',
            color: 'var(--chart-2)',
        },
    } satisfies ChartConfig;

    // Handle custom date submit
    const handleCustomDateSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (customFromDate && customToDate) {
            setTimeRange('custom');
            setOpenDialog(false);
        }
    };

    return (
        <Card className="pt-0">
            <CardHeader className="flex flex-col gap-2 space-y-3 border-b border-primary-50 py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Area Chart - Interactive</CardTitle>
                    <CardDescription>Menampilkan total peminjaman berdasarkan status</CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className=" w-[160px] rounded-lg sm:ml-auto sm:flex" aria-label="Select a value">
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="90d" className="rounded-lg">
                            3 bulan terakhir
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            30 hari terakhir
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            7 hari terakhir
                        </SelectItem>
                        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    type="button"
                                    onClick={() => setOpenDialog(true)}
                                >
                                    Pilih rentang tanggal
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <form onSubmit={handleCustomDateSubmit}>
                                    <DialogHeader>
                                        <DialogTitle>Pilih rentang waktu</DialogTitle>
                                        <DialogDescription>
                                            Pilih tanggal mulai dan akhir untuk filter data.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 mt-5">
                                        <div className="grid gap-3">
                                            <Label htmlFor="from_date">Dari</Label>
                                            <Input
                                                id="from_date"
                                                type="date"
                                                value={customFromDate}
                                                onChange={e => setCustomFromDate(e.target.value)}
                                                max={customToDate || undefined}
                                                required
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="to_date">Hingga</Label>
                                            <Input
                                                id="to_date"
                                                type="date"
                                                value={customToDate}
                                                onChange={e => setCustomToDate(e.target.value)}
                                                min={customFromDate || undefined}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter className='mt-4'>
                                        <DialogClose asChild>
                                            <Button variant="outline" type="button">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" disabled={!customFromDate || !customToDate}>
                                            Pilih
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillBorrows" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fillReturned" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                });
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(value).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                        });
                                    }}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area dataKey="Borrows" type="natural" fill="url(#fillBorrows)" stroke="var(--chart-1)" stackId="a" />
                        <Area dataKey="Returned" type="natural" fill="url(#fillReturned)" stroke="var(--chart-2)" stackId="a" />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>

            <CardFooter className="flex justify-end mt-4 border-t border-primary-50">
                <Button asChild className="bg-primary text h-full rounded text-white">
                    <Link
                        target="_blank"
                        href={route('librarian.report.download', {
                            from: timeRange === 'custom' ? customFromDate : filteredData[0]?.date,
                            to: timeRange === 'custom' ? customToDate : filteredData[filteredData.length - 1]?.date,
                        })}
                    >
                        Buat Laporan
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
