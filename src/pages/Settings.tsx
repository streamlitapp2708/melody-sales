import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Database, 
  Shield, 
  Mail,
  Zap,
  User,
  Bell
} from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and integrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Navigation */}
        <div className="space-y-2">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Database className="w-4 h-4 mr-2" />
                  Integrations
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Compliance
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Smith" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="IntelliSales Inc" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Email Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Email Configuration</CardTitle>
              <CardDescription>
                Configure your email sending preferences and limits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dailyLimit">Daily Sending Limit</Label>
                <Input id="dailyLimit" type="number" defaultValue="200" />
                <p className="text-xs text-muted-foreground">
                  Maximum number of emails to send per day
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signature">Email Signature</Label>
                <Textarea 
                  id="signature" 
                  placeholder="Your email signature..."
                  defaultValue="Best regards,&#10;John Smith&#10;IntelliSales Inc"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Track Email Opens</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable tracking for email open rates
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Track Link Clicks</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable tracking for link clicks in emails
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card>
            <CardHeader>
              <CardTitle>CRM Integrations</CardTitle>
              <CardDescription>
                Connect with your existing CRM and tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">HubSpot</h3>
                    <p className="text-sm text-muted-foreground">Sync leads and contacts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-success text-success-foreground">Connected</Badge>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Salesforce</h3>
                    <p className="text-sm text-muted-foreground">Enterprise CRM integration</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Not Connected</Badge>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Zapier</h3>
                    <p className="text-sm text-muted-foreground">Automate workflows</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">Not Connected</Badge>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance */}
          <Card>
            <CardHeader>
              <CardTitle>Compliance & Privacy</CardTitle>
              <CardDescription>
                Manage compliance settings and suppression lists
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>GDPR Compliance</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically handle GDPR requests
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>CAN-SPAM Compliance</Label>
                  <p className="text-sm text-muted-foreground">
                    Ensure all emails comply with CAN-SPAM act
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Suppression List</Label>
                <p className="text-sm text-muted-foreground">
                  Upload a list of email addresses to exclude from campaigns
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">Upload CSV</Button>
                  <Badge>2,847 suppressed emails</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Brand Voice */}
          <Card>
            <CardHeader>
              <CardTitle>AI Brand Voice</CardTitle>
              <CardDescription>
                Configure how AI generates content for your brand
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Brand Tone</Label>
                <Input id="tone" defaultValue="Professional, friendly, and solution-focused" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="voice">Writing Style</Label>
                <Textarea 
                  id="voice"
                  placeholder="Describe your preferred writing style..."
                  defaultValue="Use clear, concise language. Focus on business value. Avoid jargon. Keep emails under 150 words."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avoid">Words/Phrases to Avoid</Label>
                <Input id="avoid" placeholder="e.g., synergy, disruptive, ninja" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}