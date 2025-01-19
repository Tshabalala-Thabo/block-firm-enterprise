'use client'

import { Bar, BarChart, Line, LineChart } from 'recharts'
import PrimaryButton from '@/components/Button'
import { Area_Chart } from '@/components/charts/AreaChart'
import { Bar_Chart } from '@/components/charts/BarChart'
import { Radial_Chart_Shape } from '@/components/charts/RadialChartShape'
import { Package2, Users, DollarSign, ShoppingCart, TrendingUp, Package, AlertCircle, ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltipContent, ChartTooltip } from '@/components/ui/chart'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// Sample data for charts and statistics
const revenueData = [
  { month: 'Jan', revenue: 125000, orders: 380 },
  { month: 'Feb', revenue: 134000, orders: 420 },
  { month: 'Mar', revenue: 148000, orders: 510 },
  { month: 'Apr', revenue: 159000, orders: 550 },
  { month: 'May', revenue: 149000, orders: 495 },
  { month: 'Jun', revenue: 178000, orders: 600 },
]

const categoryData = [
  { category: 'Living Room', sales: 245000, growth: 12.5 },
  { category: 'Bedroom', sales: 185000, growth: 8.3 },
  { category: 'Dining', sales: 142000, growth: 15.2 },
  { category: 'Office', sales: 98000, growth: 6.8 },
  { category: 'Outdoor', sales: 76000, growth: 9.1 },
]

const topProducts = [
  { name: 'Modern Sectional Sofa', sales: 89, revenue: 156000 },
  { name: 'Queen Platform Bed', sales: 76, revenue: 98000 },
  { name: 'Dining Table Set', sales: 65, revenue: 78000 },
  { name: 'Office Desk Chair', sales: 54, revenue: 43000 },
  { name: 'Storage Cabinet', sales: 48, revenue: 38000 },
]

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <PrimaryButton>Download Report</PrimaryButton>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className='bg-brown-accent'>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Category Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-brown-accent text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R893,000</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                  20.1% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
                <TrendingUp className="text-brown-accent h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R2,450</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                  8.2% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingCart className="text-brown-accent h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,955</div>
                <div className="flex items-center text-xs text-green-500">
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                  12.5% from last month
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Stock Alerts</CardTitle>
                <AlertCircle className="h-4 w-4 text-brown-accent text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center text-xs text-red-500">
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                  4 more than last week
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {/* <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue & Orders Overview</CardTitle>
                <CardDescription>
                  Monthly revenue and order trends for the current year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: 'Revenue',
                      color: 'hsl(var(--chart-1))',
                    },
                    orders: {
                      label: 'Orders',
                      color: 'hsl(var(--chart-2))',
                    },
                  }}
                  className="aspect-[4/3]"
                >
                  <LineChart data={revenueData}>
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="orders" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card> */}
            <div className="col-span-4">
              <Area_Chart />
            </div>
            <div className="col-span-4">
              <Bar_Chart/>
            </div>
            <div className="col-span-4">
              <Radial_Chart_Shape/>
            </div>
            {/* Top Products Table */}

          </div>
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>
                Best selling furniture items by revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead className="text-right">Units Sold</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="text-right">{product.sales}</TableCell>
                      <TableCell className="text-right">R{product.revenue.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          {/* Rest of the components... */}
          {/* Add the remaining table and analytics tab content here */}
        </TabsContent>
      </Tabs>
    </div>
  )
} 