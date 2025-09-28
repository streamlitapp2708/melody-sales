import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Mail, 
  Users, 
  TrendingUp, 
  Clock,
  Play,
  Pause,
  Settings
} from "lucide-react";

const sequences = [
  {
    id: 1,
    name: "SaaS Outreach Campaign",
    description: "Multi-touch sequence for SaaS decision makers",
    status: "active",
    leads: 245,
    sent: 1847,
    replies: 89,
    meetings: 23,
    progress: 75,
    steps: 5
  },
  {
    id: 2,
    name: "Enterprise Follow-up",
    description: "Follow-up sequence for large enterprise prospects",
    status: "paused",
    leads: 89,
    sent: 267,
    replies: 34,
    meetings: 12,
    progress: 45,
    steps: 3
  },
  {
    id: 3,
    name: "Product Demo Invitation",
    description: "Sequence to invite prospects for product demos",
    status: "active",
    leads: 156,
    sent: 468,
    replies: 67,
    meetings: 28,
    progress: 60,
    steps: 4
  },
  {
    id: 4,
    name: "Re-engagement Campaign", 
    description: "Win back cold leads with value-driven content",
    status: "draft",
    leads: 0,
    sent: 0,
    replies: 0,
    meetings: 0,
    progress: 0,
    steps: 6
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-success text-success-foreground">Active</Badge>;
    case "paused":
      return <Badge variant="secondary">Paused</Badge>;
    case "draft":
      return <Badge variant="outline">Draft</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

export default function Sequences() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sequences</h1>
          <p className="text-muted-foreground">Create and manage automated email campaigns</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create Sequence</span>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4</div>
                <p className="text-sm text-muted-foreground">Active Sequences</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">490</div>
                <p className="text-sm text-muted-foreground">Total Leads</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24.3%</div>
                <p className="text-sm text-muted-foreground">Reply Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">63</div>
                <p className="text-sm text-muted-foreground">Meetings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sequences Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sequences.map((sequence) => (
          <Card key={sequence.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{sequence.name}</CardTitle>
                  <CardDescription>{sequence.description}</CardDescription>
                </div>
                {getStatusBadge(sequence.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium text-foreground">{sequence.progress}%</span>
                </div>
                <Progress value={sequence.progress} className="h-2" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Leads:</span>
                    <span className="font-medium text-foreground">{sequence.leads}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sent:</span>
                    <span className="font-medium text-foreground">{sequence.sent}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Replies:</span>
                    <span className="font-medium text-foreground">{sequence.replies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Meetings:</span>
                    <span className="font-medium text-foreground">{sequence.meetings}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  {sequence.status === "active" ? (
                    <Button variant="ghost" size="sm">
                      <Pause className="w-4 h-4 mr-2" />
                      Pause
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Start
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>
                <Badge variant="outline">{sequence.steps} steps</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Get started with pre-built sequence templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 justify-start">
              <div className="text-left">
                <div className="font-medium">Cold Outreach</div>
                <div className="text-sm text-muted-foreground">5-step sequence for new prospects</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 justify-start">
              <div className="text-left">
                <div className="font-medium">Product Demo</div>
                <div className="text-sm text-muted-foreground">3-step demo invitation sequence</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 justify-start">
              <div className="text-left">
                <div className="font-medium">Follow-up</div>
                <div className="text-sm text-muted-foreground">4-step follow-up after meeting</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}