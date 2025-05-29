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

export function Donut({ books }: { books: Book[] }) {
    // Aggregate books by category
    const booksPerCategory = useMemo(() => {
        const result: Record<string, number> = {}
        books.forEach(book => {
            const category = book.categories.name
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
            color: "red",
        },
    } satisfies ChartConfig

    return (
        <Card>
            <CardHeader className="items-center pb-4">
                <CardTitle>Buku per Kategori</CardTitle>
                <CardDescription>
                    Jumlah books setiap kategori
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={categoryChartConfig}
                    className="mx-auto aspect-square max-h-[250px]">
                    <RadarChart
                        data={booksPerCategory}
                        margin={{
                            top: -40,
                            bottom: -10,
                        }}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <PolarAngleAxis dataKey="category" />
                        <PolarGrid />
                        <Radar
                            dataKey="count"
                            fill="var(--color-count)"
                            fillOpacity={0.6}
                        />
                        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
