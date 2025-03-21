"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "Wardrobes", desktop: 186 },
    { month: "Kitchen units", desktop: 305 },
    { month: "Chest of drawers", desktop: 237 },
    { month: "Chairs", desktop: 73 },
    { month: "Pedestals", desktop: 209 },
    { month: "Headboards", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Units",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function Bar_Chart() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>
                    Distribution of sales across furniture categories
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[calc(100%-110px)]">
                <ChartContainer
                    config={chartConfig}
                    className="h-full w-full"
                >
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 15)}
                            fillOpacity={0.8}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    )
}
