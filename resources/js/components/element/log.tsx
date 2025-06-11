import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';

interface Borrowing {
    date: string;      // e.g., "2024-06-26"
    borrows: number;   // number of borrows on that day
    returned: number;  // number of returns on that day
}

const cellStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
};

export const description = 'An interactive area chart';

export default function Log({ borrowings }: { borrowings: Borrowing[] }) {
    const chartData = borrowings;

    const chartConfig = {
        buku: {
            label: 'Buku',
        },
        borrows: {
            label: 'Meminjam',
            color: 'var(--chart-1)',
        },
        returned: {
            label: 'Dikembalikan',
            color: 'var(--chart-2)',
        },
    } satisfies ChartConfig;

    const [timeRange, setTimeRange] = React.useState('90d');

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date);
        const referenceDate = new Date();
        let daysToSubtract = 11961;
        if (timeRange === '30d') {
            daysToSubtract = 30;
        } else if (timeRange === '7d') {
            daysToSubtract = 7;
        }
        const startDate = new Date(referenceDate);
        startDate.setDate(startDate.getDate() - daysToSubtract);
        return date >= startDate;
    });

    return (
        <Card className="pt-0">
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={cellStyle}>Date</th>
                        <th style={cellStyle}>Borrows</th>
                        <th style={cellStyle}>Returned</th>
                    </tr>
                </thead>
                <tbody>
                    {chartData.map(({ date, borrows, returned }) => (
                        <tr key={date}>
                            <td style={cellStyle}>{date}</td>
                            <td style={cellStyle}>{borrows}</td>
                            <td style={cellStyle}>{returned}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                <div className="grid flex-1 gap-1">
                    <CardTitle>Area Chart - Interactive</CardTitle>
                    <CardDescription>Menampilkan total peminjaman</CardDescription>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex" aria-label="Select a value">
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="11961d" className="rounded-lg">
                            3 Bulan Terakhir
                        </SelectItem>
                        <SelectItem value="30d" className="rounded-lg">
                            30 Hari Terakhir
                        </SelectItem>
                        <SelectItem value="7d" className="rounded-lg">
                            7 Hari Terakhir
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
                    <AreaChart data={filteredData}>
                        <defs>
                            <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-borrows)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-borrows)" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-returned)" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="var(--color-returned)" stopOpacity={0.1} />
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
                                    year: 'numeric',
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
                        <Area dataKey="returned" type="natural" fill="url(#fillMobile)" stroke="var(--color-returned)" stackId="a" />
                        <Area dataKey="borrows" type="natural" fill="url(#fillDesktop)" stroke="var(--color-borrows)" stackId="a" />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>

            {/* unused (not the part of the chart) */}
            <CardFooter className="border-primary-50 mt-4 flex justify-end border-t">
                <Button asChild className="bg-primary text h-full rounded text-white">
                    <Link target="_blank" href={route('librarian.report.download')}>
                        Buat Laporan
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
