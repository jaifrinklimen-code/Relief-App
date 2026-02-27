import { StatCard } from "../../components/StatCard";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import { Heart, TrendingUp, Users, Activity, ExternalLink } from "lucide-react";
import { mockDonationHistory } from "../../data/mockData";
import { Link } from "react-router";

export default function DonorDashboard() {
  const totalDonated = 18000;
  const emergenciesSupported = 3;
  const impactScore = 72;
  const activeDonations = 2;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Donor Dashboard</h1>
        <p className="text-muted-foreground">Track your contributions and impact</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Donated"
          value={`₹${totalDonated.toLocaleString()}`}
          icon={Heart}
          trend={{ value: "+12% this month", isPositive: true }}
        />
        <StatCard
          title="Emergencies Supported"
          value={emergenciesSupported}
          icon={TrendingUp}
        />
        <StatCard
          title="Families Helped"
          value={impactScore}
          icon={Users}
          description="Your direct impact"
        />
        <StatCard
          title="Active Donations"
          value={activeDonations}
          icon={Activity}
        />
      </div>

      {/* Recent Donations */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Donations</h2>
            <Link to="/donor/history">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockDonationHistory.slice(0, 3).map((donation, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold">{donation.emergency}</p>
                  <p className="text-sm text-muted-foreground">{donation.date}</p>
                </div>
                <div className="text-right mr-4">
                  <p className="font-semibold">{donation.amount}</p>
                  <Badge variant={donation.status === "Confirmed" ? "default" : "secondary"}>
                    {donation.status}
                  </Badge>
                </div>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80"
                  title="View on blockchain"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Campaigns */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Your Impact Tracking</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Assam Flood Relief</span>
                <span className="text-sm text-muted-foreground">0.03 ETH donated</span>
              </div>
              <Progress value={43} className="h-2 mb-1" />
              <p className="text-sm text-muted-foreground">
                ✓ Funds received by beneficiary • Aid distribution started • 12 families helped
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Chennai Medical Camp</span>
                <span className="text-sm text-muted-foreground">0.02 ETH donated</span>
              </div>
              <Progress value={31} className="h-2 mb-1" />
              <p className="text-sm text-muted-foreground">
                ✓ Funds received • Medical supplies purchased • 8 patients treated
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
