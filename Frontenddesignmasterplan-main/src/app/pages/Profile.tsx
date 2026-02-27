import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { User, Wallet, Mail, Shield } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and information</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Rahul Sharma</h2>
              <Badge>Donor</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue="Rahul Sharma" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 text-muted-foreground mt-2" />
                <Input id="email" type="email" defaultValue="rahul@example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="wallet">Wallet Address</Label>
              <div className="flex gap-2">
                <Wallet className="w-5 h-5 text-muted-foreground mt-2" />
                <Input 
                  id="wallet" 
                  defaultValue="0xAb3...91D" 
                  disabled
                  className="font-mono"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Your wallet address cannot be changed
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <Button className="bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Account Stats</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-primary">₹18,000</p>
              <p className="text-sm text-muted-foreground">Total Donated</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-secondary">3</p>
              <p className="text-sm text-muted-foreground">Emergencies Supported</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-accent">72</p>
              <p className="text-sm text-muted-foreground">Families Helped</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Change Password
          </Button>
          <Button variant="outline" className="w-full justify-start">
            Two-Factor Authentication
          </Button>
          <Button variant="outline" className="w-full justify-start text-destructive">
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
