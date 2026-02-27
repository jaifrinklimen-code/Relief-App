import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { FileText, Upload } from "lucide-react";

export default function RaiseRequest() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    peopleAffected: "",
    requiredFunds: "",
    wallet: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    navigate("/beneficiary/status");
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Raise Aid Request</h1>
        <p className="text-muted-foreground">Submit a new emergency relief request for verification</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Request Details</h2>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Request Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Bihar Flood Support"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural-disaster">Natural Disaster</SelectItem>
                  <SelectItem value="healthcare">Healthcare Emergency</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="fire">Fire Relief</SelectItem>
                  <SelectItem value="other">Other Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                placeholder="e.g., Bihar, India"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe the emergency situation and why aid is needed..."
                rows={6}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="peopleAffected">People Affected *</Label>
                <Input
                  id="peopleAffected"
                  type="number"
                  placeholder="320"
                  value={formData.peopleAffected}
                  onChange={(e) => setFormData({ ...formData, peopleAffected: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requiredFunds">Required Funds (₹) *</Label>
                <Input
                  id="requiredFunds"
                  type="number"
                  placeholder="450000"
                  value={formData.requiredFunds}
                  onChange={(e) => setFormData({ ...formData, requiredFunds: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wallet">Wallet Address *</Label>
              <Input
                id="wallet"
                placeholder="0x..."
                value={formData.wallet}
                onChange={(e) => setFormData({ ...formData, wallet: e.target.value })}
                required
              />
              <p className="text-xs text-muted-foreground">
                Funds will be transferred directly to this wallet address
              </p>
            </div>

            <div className="space-y-2">
              <Label>Supporting Documents *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PDF, Images (max 10MB)
                </p>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All requests are verified by admin authorities before being published. 
                Please ensure all information is accurate and supporting documents are valid.
              </p>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Submit Request
              </Button>
              <Button type="button" variant="outline" onClick={() => navigate("/beneficiary/dashboard")}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
