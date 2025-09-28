import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Target, 
  Plus, 
  Edit, 
  Trash2,
  Users,
  Building2,
  MapPin,
  Code
} from "lucide-react";

const savedICPs = [
  {
    id: 1,
    name: "Enterprise SaaS Companies",
    description: "Large SaaS companies looking for sales automation",
    criteria: {
      industry: "Software/SaaS",
      companySize: "1000-5000 employees",
      geography: "North America",
      techStack: "Salesforce, HubSpot",
      keywords: "sales automation, CRM, lead generation"
    },
    leads: 847,
    lastUpdated: "2 days ago"
  },
  {
    id: 2,
    name: "Mid-Market Fintech",
    description: "Growing fintech startups with Series B+ funding",
    criteria: {
      industry: "Financial Services",
      companySize: "100-500 employees", 
      geography: "US, UK, Canada",
      techStack: "Stripe, Plaid, AWS",
      keywords: "fintech, payments, financial software"
    },
    leads: 234,
    lastUpdated: "1 week ago"
  },
  {
    id: 3,
    name: "Healthcare Technology",
    description: "Healthcare companies adopting digital solutions",
    criteria: {
      industry: "Healthcare/Life Sciences",
      companySize: "500+ employees",
      geography: "United States",
      techStack: "Epic, Cerner, FHIR",
      keywords: "digital health, EHR, telemedicine"
    },
    leads: 156,
    lastUpdated: "3 days ago"
  }
];

export default function ICPBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    industry: "",
    companySize: "",
    geography: "",
    techStack: "",
    keywords: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">ICP Builder</h1>
          <p className="text-muted-foreground">Define your Ideal Customer Profile to target the right prospects</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create New ICP</span>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <p className="text-sm text-muted-foreground">Active ICPs</p>
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
                <div className="text-2xl font-bold text-foreground">1,237</div>
                <p className="text-sm text-muted-foreground">Matched Leads</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">456</div>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">15</div>
                <p className="text-sm text-muted-foreground">Markets</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ICP Form */}
        <Card>
          <CardHeader>
            <CardTitle>Create New ICP</CardTitle>
            <CardDescription>
              Define the characteristics of your ideal customers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">ICP Name</Label>
              <Input
                id="name"
                placeholder="e.g., Enterprise SaaS Companies"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of this customer profile..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="software">Software/SaaS</SelectItem>
                  <SelectItem value="fintech">Financial Services</SelectItem>
                  <SelectItem value="healthcare">Healthcare/Life Sciences</SelectItem>
                  <SelectItem value="ecommerce">E-commerce/Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">1-50 employees</SelectItem>
                  <SelectItem value="small">51-200 employees</SelectItem>
                  <SelectItem value="medium">201-1000 employees</SelectItem>
                  <SelectItem value="large">1000-5000 employees</SelectItem>
                  <SelectItem value="enterprise">5000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="geography">Geography</Label>
              <Input
                id="geography"
                placeholder="e.g., North America, US, UK, Global"
                value={formData.geography}
                onChange={(e) => handleInputChange("geography", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="techStack">Tech Stack</Label>
              <Input
                id="techStack"
                placeholder="e.g., Salesforce, HubSpot, AWS, Stripe"
                value={formData.techStack}
                onChange={(e) => handleInputChange("techStack", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                placeholder="e.g., sales automation, CRM, lead generation"
                value={formData.keywords}
                onChange={(e) => handleInputChange("keywords", e.target.value)}
              />
            </div>

            <Button className="w-full">
              Save ICP Profile
            </Button>
          </CardContent>
        </Card>

        {/* Saved ICPs */}
        <Card>
          <CardHeader>
            <CardTitle>Saved ICP Profiles</CardTitle>
            <CardDescription>
              Manage your existing customer profiles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {savedICPs.map((icp) => (
                <div key={icp.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{icp.name}</h3>
                      <p className="text-sm text-muted-foreground">{icp.description}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{icp.criteria.industry}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{icp.criteria.companySize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{icp.criteria.geography}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{icp.criteria.techStack}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-success text-success-foreground">
                        {icp.leads} leads
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Updated {icp.lastUpdated}
                      </span>
                    </div>
                    <Button variant="outline" size="sm">
                      Find Leads
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}