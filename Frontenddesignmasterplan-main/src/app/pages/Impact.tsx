import { Card, CardContent, CardHeader } from "../components/ui/card";
import { StatCard } from "../components/StatCard";
import { Heart, Users, TrendingUp, Clock, CheckCircle, Globe } from "lucide-react";
import { platformStats, mockEmergencies } from "../data/mockData";
import { Progress } from "../components/ui/progress";

export default function Impact() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
            <TrendingUp className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the real difference PulseRelief is making in communities across India
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard
            title="Total Donations"
            value={`₹${platformStats.totalDonations.toLocaleString()}`}
            icon={Heart}
            description="Delivered to communities"
          />
          <StatCard
            title="Families Helped"
            value={platformStats.familiesHelped.toLocaleString()}
            icon={Users}
            description="Across India"
          />
          <StatCard
            title="Emergencies Resolved"
            value={platformStats.emergenciesResolved}
            icon={CheckCircle}
            description="Successfully completed"
          />
        </div>

        {/* Performance Metrics */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Platform Performance</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-bold mb-1">{platformStats.avgFundDeliveryTime}</p>
                <p className="text-sm text-muted-foreground">Average Fund Delivery Time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Transparency Rate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <p className="text-3xl font-bold mb-1">15+</p>
                <p className="text-sm text-muted-foreground">States Covered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Recent Success Stories</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-semibold mb-2">Delhi Fire Relief - Completed ✓</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  45 families received immediate shelter and essential supplies within 24 hours of the incident.
                  100% of requested funds were raised and distributed.
                </p>
                <Progress value={100} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  ₹2,00,000 raised • 45 families helped • Completed in 5 days
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold mb-2">Kerala Landslide Aid - In Progress</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  780 families currently receiving food, medical aid, and temporary shelter. 
                  Medical camps treating over 1,200 affected individuals.
                </p>
                <Progress value={63} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  ₹3,80,000 of ₹6,00,000 raised • 780 families being helped
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Assam Flood Relief - Active</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Emergency relief supplies delivered to 500 displaced families. Clean water distribution ongoing.
                </p>
                <Progress value={43} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  ₹2,15,000 of ₹5,00,000 raised • 500 families receiving aid
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact by Category */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Impact by Category</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Natural Disasters", families: 3450, percentage: 42 },
                { category: "Healthcare", families: 2800, percentage: 34 },
                { category: "Education", families: 1200, percentage: 15 },
                { category: "Emergency Relief", families: 750, percentage: 9 },
              ].map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-sm text-muted-foreground">
                      {item.families} families • {item.percentage}%
                    </span>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
