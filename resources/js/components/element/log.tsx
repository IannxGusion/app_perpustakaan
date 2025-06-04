import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';
import { Borrowing } from '@/types';

export const description = 'An interactive area chart';

export default function Log( {borrowings} : { borrowings: Borrowing[] }) {

    const chartData = [
        { date: '2024-04-01', borrows: 222, returned: 150 },
        { date: '2024-04-02', borrows: 97, returned: 180 },
        { date: '2024-04-03', borrows: 167, returned: 120 },
        { date: '2024-04-04', borrows: 242, returned: 260 },
        { date: '2024-04-05', borrows: 373, returned: 290 },
        { date: '2024-04-06', borrows: 301, returned: 340 },
        { date: '2024-04-07', borrows: 245, returned: 180 },
        { date: '2024-04-08', borrows: 409, returned: 320 },
        { date: '2024-04-09', borrows: 59, returned: 110 },
        { date: '2024-04-10', borrows: 261, returned: 190 },
        { date: '2024-04-11', borrows: 327, returned: 350 },
        { date: '2024-04-12', borrows: 292, returned: 210 },
        { date: '2024-04-13', borrows: 342, returned: 380 },
        { date: '2024-04-14', borrows: 137, returned: 220 },
        { date: '2024-04-15', borrows: 120, returned: 170 },
        { date: '2024-04-16', borrows: 138, returned: 190 },
        { date: '2024-04-17', borrows: 446, returned: 360 },
        { date: '2024-04-18', borrows: 364, returned: 410 },
        { date: '2024-04-19', borrows: 243, returned: 180 },
        { date: '2024-04-20', borrows: 89, returned: 150 },
        { date: '2024-04-21', borrows: 137, returned: 200 },
        { date: '2024-04-22', borrows: 224, returned: 170 },
        { date: '2024-04-23', borrows: 138, returned: 230 },
        { date: '2024-04-24', borrows: 387, returned: 290 },
        { date: '2024-04-25', borrows: 215, returned: 250 },
        { date: '2024-04-26', borrows: 75, returned: 130 },
        { date: '2024-04-27', borrows: 383, returned: 420 },
        { date: '2024-04-28', borrows: 122, returned: 180 },
        { date: '2024-04-29', borrows: 315, returned: 240 },
        { date: '2024-04-30', borrows: 454, returned: 380 },
        { date: '2024-05-01', borrows: 165, returned: 220 },
        { date: '2024-05-02', borrows: 293, returned: 310 },
        { date: '2024-05-03', borrows: 247, returned: 190 },
        { date: '2024-05-04', borrows: 385, returned: 420 },
        { date: '2024-05-05', borrows: 481, returned: 390 },
        { date: '2024-05-06', borrows: 498, returned: 520 },
        { date: '2024-05-07', borrows: 388, returned: 300 },
        { date: '2024-05-08', borrows: 149, returned: 210 },
        { date: '2024-05-09', borrows: 227, returned: 180 },
        { date: '2024-05-10', borrows: 293, returned: 330 },
        { date: '2024-05-11', borrows: 335, returned: 270 },
        { date: '2024-05-12', borrows: 197, returned: 240 },
        { date: '2024-05-13', borrows: 197, returned: 160 },
        { date: '2024-05-14', borrows: 448, returned: 490 },
        { date: '2024-05-15', borrows: 473, returned: 380 },
        { date: '2024-05-16', borrows: 338, returned: 400 },
        { date: '2024-05-17', borrows: 499, returned: 420 },
        { date: '2024-05-18', borrows: 315, returned: 350 },
        { date: '2024-05-19', borrows: 235, returned: 180 },
        { date: '2024-05-20', borrows: 177, returned: 230 },
        { date: '2024-05-21', borrows: 82, returned: 140 },
        { date: '2024-05-22', borrows: 81, returned: 120 },
        { date: '2024-05-23', borrows: 252, returned: 290 },
        { date: '2024-05-24', borrows: 294, returned: 220 },
        { date: '2024-05-25', borrows: 201, returned: 250 },
        { date: '2024-05-26', borrows: 213, returned: 170 },
        { date: '2024-05-27', borrows: 420, returned: 460 },
        { date: '2024-05-28', borrows: 233, returned: 190 },
        { date: '2024-05-29', borrows: 78, returned: 130 },
        { date: '2024-05-30', borrows: 340, returned: 280 },
        { date: '2024-05-31', borrows: 178, returned: 230 },
        { date: '2024-06-01', borrows: 178, returned: 200 },
        { date: '2024-06-02', borrows: 470, returned: 410 },
        { date: '2024-06-03', borrows: 103, returned: 160 },
        { date: '2024-06-04', borrows: 439, returned: 380 },
        { date: '2024-06-05', borrows: 88, returned: 140 },
        { date: '2024-06-06', borrows: 294, returned: 250 },
        { date: '2024-06-07', borrows: 323, returned: 370 },
        { date: '2024-06-08', borrows: 385, returned: 320 },
        { date: '2024-06-09', borrows: 438, returned: 480 },
        { date: '2024-06-10', borrows: 155, returned: 200 },
        { date: '2024-06-11', borrows: 92, returned: 150 },
        { date: '2024-06-12', borrows: 492, returned: 420 },
        { date: '2024-06-13', borrows: 81, returned: 130 },
        { date: '2024-06-14', borrows: 426, returned: 380 },
        { date: '2024-06-15', borrows: 307, returned: 350 },
        { date: '2024-06-16', borrows: 371, returned: 310 },
        { date: '2024-06-17', borrows: 475, returned: 520 },
        { date: '2024-06-18', borrows: 107, returned: 170 },
        { date: '2024-06-19', borrows: 341, returned: 290 },
        { date: '2024-06-20', borrows: 408, returned: 450 },
        { date: '2024-06-21', borrows: 169, returned: 210 },
        { date: '2024-06-22', borrows: 317, returned: 270 },
        { date: '2024-06-23', borrows: 480, returned: 530 },
        { date: '2024-06-24', borrows: 132, returned: 180 },
        { date: '2024-06-25', borrows: 141, returned: 190 },
        { date: '2024-06-26', borrows: 434, returned: 380 },
        { date: '2024-06-27', borrows: 448, returned: 490 },
        { date: '2024-06-28', borrows: 149, returned: 200 },
        { date: '2024-06-29', borrows: 103, returned: 160 },
        { date: '2024-06-30', borrows: 446, returned: 400 },
    ];

    const chartConfig = {
        visitors: {
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
        const referenceDate = new Date('2024-06-30');
        let daysToSubtract = 90;
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
                        <SelectItem value="90d" className="rounded-lg">
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
            <CardFooter className="border-primary-50 mt-4 flex justify-end border-t">
                <Button asChild className="bg-primary text h-full rounded text-white">
                    <Link target="_blank" href={route('librarian.report.download')}>
                        Buat Laporan
                    </Link>
                </Button>
            </CardFooter>

            <label htmlFor="SSD" className='hidden'>{borrowings.map((borrowing) => (
                <p>{borrowing.status}</p>
            ))}</label>
        </Card>
    );
}
