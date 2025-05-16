"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { useMemo } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Book } from "@/types"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "red",
    },
    mobile: {
        label: "Mobile",
        color: "blue",
    },
} satisfies ChartConfig

export function Donut({ books }: { books: Book[] }) {
    // Aggregate books by category
    const booksPerCategory = useMemo(() => {
        const result: Record<string, number> = {}
        books.forEach(book => {
            const category = book.category.name
            result[category] = (result[category] || 0) + 1
        })
        // Transform to array for chart
        return Object.entries(result).map(([category, count]) => ({
            category,
            count,
        }))
    }, [books])

    // Example chart config for categories
    const categoryChartConfig = {
        count: {
            label: "Books",
            color: "var(--color-desktop)",
        },
    } satisfies ChartConfig

    return (
        <Card>
            <CardHeader className="items-center pb-4">
                <CardTitle>Books per Category</CardTitle>
                <CardDescription>
                    Number of books in each category
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={categoryChartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadarChart
                        data={booksPerCategory}
                        margin={{
                            top: -40,
                            bottom: -10,
                        }}
                    >
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <PolarAngleAxis dataKey="category" />
                        <PolarGrid />
                        <Radar
                            dataKey="count"
                            fill="var(--color-desktop)"
                            fillOpacity={0.6}
                        />
                        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 pt-4 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    January - June 2024
                </div>
            </CardFooter>
        </Card>
    )
}
