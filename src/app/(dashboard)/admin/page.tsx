"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { PieChart, Pie, Cell, ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Line, LineChart, Tooltip, CartesianGrid } from "recharts"
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
import { world_map } from './../../../lib/world_map';

const dataLine = [
  { month: "Jan", revenue: 700, sales: 600 },
  { month: "Feb", revenue: 600, sales: 550 },
  { month: "Mar", revenue: 800, sales: 750 },
  { month: "Apr", revenue: 700, sales: 800 },
  { month: "May", revenue: 600, sales: 650 },
  { month: "Jun", revenue: 1240, sales: 700 },
  { month: "Jul", revenue: 800, sales: 600 },
  { month: "Aug", revenue: 900, sales: 700 },
  { month: "Sep", revenue: 1100, sales: 650 },
  { month: "Oct", revenue: 800, sales: 800 },
  { month: "Nov", revenue: 700, sales: 700 },
  { month: "Dec", revenue: 800, sales: 800 },
]


const attendanceData = [
  { month: "Jan 31", present: 35, absent: 25 },
  { month: "Feb 28", present: 68, absent: 58 },
  { month: "Mar 31", present: 45, absent: 35 },
  { month: "Apr 30", present: 58, absent: 48 },
  { month: "May 31", present: 48, absent: 45 },
  { month: "June 30", present: 75, absent: 48 }
];

const data = [
  { name: "Overdue", value: 10 },
  { name: "Not Deposited", value: 15 },
  { name: "Deposited", value: 75 },
]

const data2 = [
  { name: "Total Stock", value: 15, color: "#6366F1" },
  { name: "Low Stock", value: 35, color: "#1E40AF" },
  { name: "Out of Stock", value: 20, color: "#94A3B8" },
  { name: "Expired Stock", value: 30, color: "#E2E8F0" },
]

const COLORS = ["#1E40AF", "#6366F1", "#E2E8F0"]
const COLORS2 = ["#1E40AF", "#6366F1", "#E2E8F0", "#EF4444"]


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="mt-10">
            <div className="dashboard_grid">
              <div className="dashboard_grid_col_8 card">
                <div className="flex gap-4 items-start justify-between">
                  <div className="">
                    <h1 className="text-2xl font-semibold text-gray-900">
                      Good Day, Mr. Theresa Webb
                    </h1>
                    <p className="text-gray-500">
                      Here&apos;s what&apos;s happening with your store today.
                    </p>
                  </div>
                  <div className="h-24 w-24 bg-slate-200">
                  </div>
                </div>
              </div>
              <div className="dashboard_grid_col_4 card">
                <div className="xl:flex items-start gap-5 justify-between">
                  <div className="space-y-1">
                    <div className="text-sm text-gray-500">Invoice</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-gray-500">USD</span>
                      <span className="text-xl font-semibold">$141.57</span>
                    </div>
                    <div className="text-xs text-gray-500">NET INCOME for LAST 30 DAYS</div>
                  </div>
                  <div className="">
                    <div className="h-[200px] w-full">
                      <CircleChart data={data} colors={COLORS} config={{ innerRadius: "55%", outerRadius: "70%" }} />
                    </div>
                    <div className="text-sm gap-x-6 gap-y-3 flex items-center flex-wrap justify-center">
                      {
                        data.map((item: any, index: number) => (
                          <div key={index} className="flex items-center gap-2">
                            <div style={{ backgroundColor: COLORS[index] }} className={`w-2 h-2 rounded-full bg-${COLORS[index]}`}></div>
                            <span className="text-gray-600">{item.name}</span>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 my-5">
              {
                [1, 2, 3, 4, 5, 6].map((item: number) => <div key={item} className='bg-slate-200 p-6 rounded-lg space-y-2'>
                  <div className="h-12 w-12 bg-slate-600"></div>
                  <p>Lorem ipsum dolor</p>
                  <h1 className='text-3xl font-semibold'>$23543</h1>
                </div>)
              }
            </div>
            <div className="dashboard_grid gap-4">
              <div className="dashboard_grid_col_4 card">
                <h1 className='title'>Product Overview</h1>
                <div className="h-[300px]">
                  <CircleChart data={data2} colors={COLORS2} config={{ innerRadius: "45%", outerRadius: "60%" }} />
                </div>
                <div className="space-y-3 mt-4">
                  {data2.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-base font-medium text-gray-600">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dashboard_grid_col_8 card">
                <div className="flex items-center justify-between mb-6">
                  <div className="">
                    <h1 className="title">Statistics</h1>
                    <p className="sub_title">Revenue and Sales</p>
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500" />
                      <span className="text-sm text-muted-foreground">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-sm text-muted-foreground">Sales</span>
                    </div>
                  </div>
                </div>
                <div className="h-[400px]">
                  <BoxChart data={dataLine} />
                </div>
              </div>
              <div className="dashboard_grid_col_4 card">
                <h1 className='title'>Warehouse</h1>
                <p className='sub_title'>Lorem ipsum dolor</p>
                <div className="h-[300px] rounded-2xl relative">
                  <div className="absolute top-0 left-0 w-full h-full bottom-0 bg-slate-100"></div>
                  <div className="h-[300px] rounded-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-full bottom-0 bg-slate-100"></div>
                    <MapsComponent id="maps" width="100%" height="100%" className='bg-slate-100'>
                      <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        </LayerDirective>
                      </LayersDirective>
                    </MapsComponent>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                    <div className="">
                      <h1 className='text-lg font-semibold'>NYC</h1>
                      <p className='text-sm text-muted-foreground'>NYC 3456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <progress className="progress progress-primary w-16" value={'50'} max="100"></progress>
                    <p>50%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                    <div className="">
                      <h1 className='text-lg font-semibold'>NYC</h1>
                      <p className='text-sm text-muted-foreground'>NYC 3456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <progress className="progress progress-primary w-16" value={'50'} max="100"></progress>
                    <p>50%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-200"></div>
                    <div className="">
                      <h1 className='text-lg font-semibold'>NYC</h1>
                      <p className='text-sm text-muted-foreground'>NYC 3456</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <progress className="progress progress-primary w-16" value={'50'} max="100"></progress>
                    <p>50%</p>
                  </div>
                </div>
              </div>
              <div className="dashboard_grid_col_8 card">
                <div className="flex items-center justify-between mb-6">
                  <div className="">
                    <h1 className="title">Statistics</h1>
                    <p className="sub_title">Revenue and Sales</p>
                  </div>
                  <select className="p-3 border outline-none rounded-full flex items-center justify-end gap-4">
                    <option value="all">All</option>
                    <option value="this-month">This Month</option>
                    <option value="this-year">This Year</option>
                  </select>
                </div>
                <div className='xl:w-[80%] mx-auto'>
                  <div className="md:flex items-center justify-between">
                    <div className="h-[400px] flex items-center justify-center sm:w-[400px] relative">
                      <CircleChart data={data2} colors={COLORS2} config={{ innerRadius: "40%", outerRadius: "60%" }} cx="35%">
                        <Pie dataKey="value" cx="35%" data={[{ value: 1 }]} startAngle={90} endAngle={-270} innerRadius={"60%"} outerRadius={"70%"} fill='#EEE8F0'></Pie>
                      </CircleChart>
                      <h1 className="absolute top-24 md:top-20 right-[28%] md:right-32 shadow-md text-2xl font-semibold w-[64px] h-[64px] flex items-center justify-center bg-white rounded-full p-2">
                        54%
                      </h1>
                    </div>
                    <div className="md:gap-x-16 gap-y-6 grid grid-cols-2">
                      {
                        data2.map((item: { name: string; value: number }, index: number) => <div key={index} className="flex items-start gap-3">
                          <div
                            className="w-2 h-20 rounded-full"
                            style={{ backgroundColor: COLORS2[index] }}
                          />
                          <div className="space-y-2">
                            <p className="text-base font-normal text-gray-400">{item.name}</p>
                            <p className="text-xl font-semibold text-black">$456754745</p>
                          </div>
                        </div>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard_grid_col_4 card">
                <div className="flex items-center justify-between pb-2">
                  <div className="">
                    <h1 className="title">Attendance List</h1>
                    <p className='sub_title'>Lorem ipsum dolor</p>
                  </div>
                  <div className='sub_title text-right'>
                    <h1 className="">11 Days</h1>
                    <p>Status</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-x-4 pb-6">
                  <span>Present • 104</span>
                  <span>Absent • 0.20%</span>
                  <span>Leave • 0.15%</span>
                </div>

                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={attendanceData}

                      margin={{
                        top: 6,
                        // right: 30,
                        left: -36,
                        bottom: -10,
                        // bottom: 5,
                      }}
                    >
                      <CartesianGrid
                        strokeDasharray="5 5"
                        horizontal={true}
                        vertical={false}
                        stroke="#E2E8F0"
                      />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                      // fontSize={12}
                      // tickMargin={8}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        fontSize={12}
                      // tickMargin={8}
                      // domain={[0, 80]}
                      // ticks={[0, 20, 40, 60, 80]}
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg bg-zinc-900 p-3 shadow-sm">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                                    <span className="text-sm text-zinc-200">Revenue</span>
                                    <span className="text-sm font-bold text-white">: {payload[0].value}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span className="text-sm text-zinc-200">Sales</span>
                                    <span className="text-sm font-bold text-white">: {payload[1].value}%</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span className="text-sm text-zinc-200">Sales</span>
                                    <span className="text-sm font-bold text-white">: {payload[2].value}%</span>
                                  </div>

                                </div>
                              </div>
                            );
                          }
                        }}
                        cursor={{ stroke: '#6366F1', strokeDasharray: '5 5' }}
                      />
                      <Bar
                        dataKey="present"
                        fill="#3B82F6"
                        radius={8}
                        maxBarSize={12}
                      />
                      <Bar
                        dataKey="absent"
                        fill="#EEE8F0"
                        radius={8}
                        maxBarSize={12}
                      />
                      <Bar
                        dataKey="absent"
                        fill="#EEE8F0"
                        radius={8}
                        maxBarSize={12}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

              </div>
              <div className="dashboard_grid_col_8 card">
                <div className="flex items-center justify-between mb-6">
                  <div className="">
                    <h1 className="title">Statistics</h1>
                    <p className="sub_title">Revenue and Sales</p>
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500" />
                      <span className="text-sm text-muted-foreground">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                      <span className="text-sm text-muted-foreground">Sales</span>
                    </div>
                  </div>
                </div>
                <div className="h-[340px]">
                  <BoxChart data={dataLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}


const CircleChart = ({ children, data, config, colors, cx, cy, props }: { children?: React.ReactNode, data: any, config: any, colors: string[], props?: any, cx?: any, cy?: any }) => {
  return <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        {...props}
        cx={cx}
        cy={cy}
        data={data}
        innerRadius={config?.innerRadius || 0}
        outerRadius={config?.outerRadius || 60}
        paddingAngle={0}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
      >
        {data.map((entry: { name: string, value: number }, index: number) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index]}
            strokeWidth={0}
          />
        ))}
      </Pie>
      {children}
    </PieChart>
  </ResponsiveContainer>
}

const BoxChart = (({ data }: { data: { month: string; revenue: number; sales: number; }[] }) => {
  return <ResponsiveContainer width="100%" height="100%">
    <LineChart
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#A855F7" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid
        strokeDasharray="5 5"
        horizontal={true}
        vertical={false}
        stroke="#E2E8F0"
      />
      <XAxis
        dataKey="month"
        stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false}
      />
      <YAxis
        stroke="#888888"
        fontSize={12}
        tickLine={false}
        axisLine={false}
      />
      <Tooltip
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            return <div className="rounded-lg bg-zinc-900 p-3 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span className="text-sm text-zinc-200">Revenue</span>
                  <span className="text-sm font-bold text-white">: {payload[0].value}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-zinc-200">Sales</span>
                  <span className="text-sm font-bold text-white">: {payload[1].value}%</span>
                </div>
              </div>
            </div>
          }
        }}
        cursor={{ stroke: '#6366F1', strokeDasharray: '5 5' }}
      />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#A855F7"
        strokeWidth={3}
        dot={false}
        activeDot={{ r: 4, fill: "#A855F7" }}
      />
      <Line
        type="monotone"
        dataKey="sales"
        stroke="#F97316"
        strokeWidth={3}
        dot={false}
        activeDot={{ r: 4, fill: "#F97316" }}
      />
    </LineChart>
  </ResponsiveContainer>
})