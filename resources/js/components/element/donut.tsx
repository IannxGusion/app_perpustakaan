import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import React, { useEffect, useState } from "react"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with a legend"

const chartConfig = {
    book: {
        label: "Book",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export function Donut() {

    const [chartData, setChartData] = useState<{ category: string, book: number }[]>([])

    useEffect(() => {
        fetch("main/books-count")
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])

    return (
        <Card className="border-none shadow-none">
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadarChart
                        data={chartData}
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
                            dataKey="book"
                            fill="var(--color-book)"
                            fillOpacity={0.6}
                        />
                        <ChartLegend className="mt-8" content={<ChartLegendContent />} />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
