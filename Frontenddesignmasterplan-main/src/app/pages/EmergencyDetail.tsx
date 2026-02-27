import { useParams, Link } from "react-router";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { 
  MapPin, 
  Users, 
  Calendar, 
  Shield, 
  Wallet, 
  Heart,
  CheckCircle,
  Droplets,
  Package,
  Activity
} from "lucide-react";
import { mockEmergencies } from "../data/mockData";
import { useState } from "react";

export default function EmergencyDetail() {
  const { id } = useParams();
  const emergency = mockEmergencies.find(e => e.id === id);
  const [donationAmount, setDonationAmount] = useState("");

  if (!emergency) {
    return (
      <div className="min-h-screen bg-background py-20 text-center">
        <h1 className="text-2xl">Emergency not found</h1>
        <Link to="/emergencies">
          <Button className="mt-4">Back to Emergencies</Button>
        </Link>
      </div>
    );
  }

  const progress = (emergency.amountRaised / emergency.amountNeeded) * 100;
  const donors = 148; // Mock data

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Link to="/emergencies" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Emergencies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{emergency.title}</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{emergency.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>21 Feb 2026</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-white">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between">
                    <div>
                      <p className="text-2xl font-bold">₹{emergency.amountRaised.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">raised of ₹{emergency.amountNeeded.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{donors}</p>
                      <p className="text-sm text-muted-foreground">donors</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Emergency Details</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {emergency.familiesAffected} families have been severely affected and displaced due to extreme flooding 
                  in the region. Urgent support is needed for immediate relief and rehabilitation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Activity className="w-8 h-8 text-destructive" />
                    <div>
                      <p className="font-semibold">Medical Aid</p>
                      <p className="text-sm text-muted-foreground">Required</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Package className="w-8 h-8 text-secondary" />
                    <div>
                      <p className="font-semibold">Food Supply</p>
                      <p className="text-sm text-muted-foreground">Needed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Droplets className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-semibold">Clean Water</p>
                      <p className="text-sm text-muted-foreground">Needed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Verification */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Admin Verification</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1" />
                  <div>
                    <p className="font-semibold">Verified by: ReliefGovOrg</p>
                    <p className="text-sm text-muted-foreground">Verified on 21 Feb 2026</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This emergency has been verified by authorized government relief organizations 
                      and all documentation has been reviewed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wallet Info */}
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Beneficiary Wallet</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                  <Wallet className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Receiving Wallet Address</p>
                    <p className="font-mono font-semibold">{emergency.beneficiaryWallet}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <h2 className="text-xl font-semibold">Make a Donation</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Donation Amount (₹)</Label>
                  <Input 
                    type="number" 
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setDonationAmount("1000")}
                  >
                    ₹1,000
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setDonationAmount("5000")}
                  >
                    ₹5,000
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setDonationAmount("10000")}
                  >
                    ₹10,000
                  </Button>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>

                <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    100% goes to beneficiaries
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Blockchain verified
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Tax deductible receipt
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
