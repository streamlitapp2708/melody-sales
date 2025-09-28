import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, 
  Filter, 
  MessageSquare, 
  Reply, 
  Archive,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: 1,
    contact: "Sarah Johnson",
    company: "TechCorp Inc",
    email: "sarah.johnson@techcorp.com",
    subject: "Re: Demo Request - TechCorp Integration",
    lastMessage: "Thanks for the demo! This looks exactly like what we need. Can we schedule a follow-up call to discuss pricing and implementation timeline?",
    timestamp: "2 hours ago",
    intent: "interested",
    unread: true,
    messages: [
      {
        id: 1,
        sender: "me",
        content: "Hi Sarah, I'd love to show you how IntelliSales can help TechCorp streamline your sales process. Would you be available for a 20-minute demo this week?",
        timestamp: "3 days ago"
      },
      {
        id: 2,
        sender: "contact",
        content: "Hi! Yes, I'd be very interested in a demo. How about Thursday at 2 PM EST?",
        timestamp: "2 days ago"
      },
      {
        id: 3,
        sender: "me", 
        content: "Perfect! I've sent you a calendar invite for Thursday at 2 PM. I'll show you how our AI can help automate your lead scoring and email sequences.",
        timestamp: "2 days ago"
      },
      {
        id: 4,
        sender: "contact",
        content: "Thanks for the demo! This looks exactly like what we need. Can we schedule a follow-up call to discuss pricing and implementation timeline?",
        timestamp: "2 hours ago"
      }
    ]
  },
  {
    id: 2,
    contact: "Michael Chen",
    company: "Innovate Solutions",
    email: "m.chen@innovate.io",
    subject: "Re: Scaling Your Sales Team with AI",
    lastMessage: "Not interested at this time, but please keep us posted on new features.",
    timestamp: "1 day ago",
    intent: "not-interested",
    unread: false,
    messages: []
  },
  {
    id: 3,
    contact: "Emily Rodriguez",
    company: "FastGrow Marketing",
    email: "emily@fastgrow.com", 
    subject: "Re: Partnership Opportunity",
    lastMessage: "This sounds interesting. Can you send me more details about the integration capabilities?",
    timestamp: "3 hours ago",
    intent: "neutral",
    unread: true,
    messages: []
  },
  {
    id: 4,
    contact: "David Kim",
    company: "ScaleVP",
    email: "david.kim@scalevp.com",
    subject: "Re: Investment Opportunity Discussion", 
    lastMessage: "I'd like to schedule a call to discuss this further. What's your availability next week?",
    timestamp: "5 hours ago",
    intent: "interested",
    unread: true,
    messages: []
  }
];

const getIntentBadge = (intent: string) => {
  switch (intent) {
    case "interested":
      return <Badge className="bg-success text-success-foreground">Interested</Badge>;
    case "neutral":
      return <Badge variant="secondary">Neutral</Badge>;
    case "not-interested":
      return <Badge variant="outline">Not Interested</Badge>;
    default:
      return <Badge variant="outline">Unknown</Badge>;
  }
};

export default function Inbox() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inbox</h1>
          <p className="text-muted-foreground">Manage conversations and track engagement</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-success text-success-foreground">
            3 new replies
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">47</div>
                <p className="text-sm text-muted-foreground">Active Conversations</p>
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
                <div className="text-2xl font-bold text-foreground">18</div>
                <p className="text-sm text-muted-foreground">Interested</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">23</div>
                <p className="text-sm text-muted-foreground">Neutral</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">6</div>
                <p className="text-sm text-muted-foreground">Not Interested</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inbox Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversation List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Conversations
              <Button variant="ghost" size="sm">
                <Filter className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              <div className="space-y-2 p-4">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={cn(
                      "p-4 rounded-lg cursor-pointer transition-colors border",
                      selectedConversation.id === conversation.id
                        ? "bg-primary/5 border-primary"
                        : "bg-card hover:bg-muted/50 border-border"
                    )}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-foreground text-sm">
                        {conversation.contact}
                      </div>
                      {conversation.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">
                      {conversation.company}
                    </div>
                    <div className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {conversation.lastMessage}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {conversation.timestamp}
                      </span>
                      {getIntentBadge(conversation.intent)}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Conversation Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{selectedConversation.subject}</CardTitle>
                <CardDescription>
                  {selectedConversation.contact} • {selectedConversation.company}
                </CardDescription>
              </div>
              {getIntentBadge(selectedConversation.intent)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Messages */}
            <ScrollArea className="h-80">
              <div className="space-y-4 pr-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex",
                      message.sender === "me" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
                        message.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      )}
                    >
                      <div>{message.content}</div>
                      <div
                        className={cn(
                          "text-xs mt-1",
                          message.sender === "me"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        )}
                      >
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* AI Summary */}
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground text-sm mb-1">AI Summary</div>
                    <div className="text-sm text-muted-foreground">
                      Sarah is highly interested in the product after the demo. She's ready to move forward and wants to discuss pricing and implementation. This is a hot lead with high conversion potential.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reply Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-foreground">Reply</h4>
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Draft</span>
                </Button>
              </div>
              
              <Textarea
                placeholder="Type your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={4}
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Archive className="w-4 h-4 mr-2" />
                    Archive
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button className="flex items-center space-x-2">
                    <Reply className="w-4 h-4" />
                    <span>Send Reply</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}