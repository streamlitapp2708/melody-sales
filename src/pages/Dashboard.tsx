import { KpiCard } from "@/components/ui/kpi-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Mail, 
  MessageSquare, 
  Calendar, 
  DollarSign,
  Upload,
  Plus,
  Inbox,
  TrendingUp,
  Target
} from "lucide-react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const kpiData = [
  {
    title: "Total Leads",
    value: "2,847",
    change: { value: "+12% from last month", trend: "up" as const },
    icon: <Users className="w-4 h-4" />
  },
  {
    title: "Emails Sent",
    value: "18,492",
    change: { value: "+8% from last month", trend: "up" as const },
    icon: <Mail className="w-4 h-4" />
  },
  {
    title: "Reply Rate",
    value: "24.3%",
    change: { value: "+2.1% from last month", trend: "up" as const },
    icon: <MessageSquare className="w-4 h-4" />
  },
  {
    title: "Meetings Booked",
    value: "156",
    change: { value: "+18% from last month", trend: "up" as const },
    icon: <Calendar className="w-4 h-4" />
  },
  {
    title: "Pipeline Value",
    value: "$847K",
    change: { value: "+23% from last month", trend: "up" as const },
    icon: <DollarSign className="w-4 h-4" />
  }
];

const performanceData = [
  { month: "Jan", emails: 1200, replies: 288, meetings: 45 },
  { month: "Feb", emails: 1450, replies: 362, meetings: 58 },
  { month: "Mar", emails: 1680, replies: 420, meetings: 72 },
  { month: "Apr", emails: 1820, replies: 456, meetings: 89 },
  { month: "May", emails: 1950, replies: 507, meetings: 98 },
  { month: "Jun", emails: 2100, replies: 546, meetings: 124 }
];

const funnelData = [
  { name: "Leads", value: 2847, color: "#3b82f6" },
  { name: "Contacted", value: 1892, color: "#06b6d4" },
  { name: "Replied", value: 456, color: "#10b981" },
  { name: "Meetings", value: 156, color: "#f59e0b" }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your sales performance overview.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Import Leads</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create Sequence</span>
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpiData.map((kpi, index) => (
          <KpiCard
            key={index}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            icon={kpi.icon}
            className="animate-fade-in"
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Trends */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Performance Trends</span>
            </CardTitle>
            <CardDescription>
              Monthly overview of emails sent, replies received, and meetings booked
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="emails" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="Emails Sent"
                />
                <Line 
                  type="monotone" 
                  dataKey="replies" 
                  stroke="hsl(var(--success))" 
                  strokeWidth={2}
                  name="Replies"
                />
                <Line 
                  type="monotone" 
                  dataKey="meetings" 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={2}
                  name="Meetings"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Funnel Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Sales Funnel</span>
            </CardTitle>
            <CardDescription>
              Conversion rates through your sales process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={funnelData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Import Leads</h3>
                <p className="text-sm text-muted-foreground">Upload CSV or connect to your CRM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Plus className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Create Sequence</h3>
                <p className="text-sm text-muted-foreground">Build automated email campaigns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Inbox className="w-6 h-6 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">View Inbox</h3>
                <p className="text-sm text-muted-foreground">Manage replies and conversations</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}