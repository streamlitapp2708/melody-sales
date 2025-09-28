import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  MapPin,
  Plus,
  Users,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const meetings = [
  {
    id: 1,
    title: "TechCorp Demo & Discussion",
    contact: "Sarah Johnson",
    company: "TechCorp Inc",
    date: "Today",
    time: "2:00 PM - 2:30 PM",
    type: "video",
    status: "confirmed",
    description: "Product demo and pricing discussion"
  },
  {
    id: 2,
    title: "ScaleVP Investment Call",
    contact: "David Kim", 
    company: "ScaleVP",
    date: "Tomorrow",
    time: "10:00 AM - 11:00 AM",
    type: "video",
    status: "confirmed",
    description: "Investment opportunity discussion"
  },
  {
    id: 3,
    title: "FastGrow Partnership Meeting",
    contact: "Emily Rodriguez",
    company: "FastGrow Marketing",
    date: "Friday",
    time: "3:00 PM - 3:30 PM",
    type: "in-person",
    status: "pending",
    description: "Explore partnership opportunities"
  },
  {
    id: 4,
    title: "Follow-up with CloudNine",
    contact: "Lisa Thompson",
    company: "CloudNine Technologies", 
    date: "Next Monday",
    time: "11:00 AM - 11:30 AM",
    type: "video",
    status: "confirmed",
    description: "Implementation planning session"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "confirmed":
      return <Badge className="bg-success text-success-foreground">Confirmed</Badge>;
    case "pending":
      return <Badge variant="secondary">Pending</Badge>;
    case "cancelled":
      return <Badge variant="outline">Cancelled</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return <Video className="w-4 h-4" />;
    case "in-person":
      return <MapPin className="w-4 h-4" />;
    default:
      return <CalendarIcon className="w-4 h-4" />;
  }
};

export default function Meetings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Meetings</h1>
          <p className="text-muted-foreground">Schedule and manage your sales meetings</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4" />
            <span>Calendar View</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Schedule Meeting</span>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">12</div>
                <p className="text-sm text-muted-foreground">This Week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">156</div>
                <p className="text-sm text-muted-foreground">Total Booked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">8.7%</div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">$2.4M</div>
                <p className="text-sm text-muted-foreground">Pipeline Value</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Meetings */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Meetings</CardTitle>
          <CardDescription>
            Your scheduled meetings and calls
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mt-1">
                  {getTypeIcon(meeting.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{meeting.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {meeting.contact} • {meeting.company}
                      </p>
                    </div>
                    {getStatusBadge(meeting.status)}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{meeting.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{meeting.description}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Meeting Scheduler</CardTitle>
            <CardDescription>
              Let AI suggest optimal meeting times based on your calendar and prospect preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              Propose AI-Suggested Times
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meeting Analytics</CardTitle>
            <CardDescription>
              Track your meeting performance and conversion rates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Show Rate:</span>
                <span className="font-medium text-foreground">87%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Duration:</span>
                <span className="font-medium text-foreground">28 min</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Next Step Rate:</span>
                <span className="font-medium text-foreground">64%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}