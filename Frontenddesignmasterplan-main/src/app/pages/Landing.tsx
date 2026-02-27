import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { EmergencyCard } from "../components/EmergencyCard";
import { StatCard } from "../components/StatCard";
import { Heart, Shield, TrendingUp, Users, CheckCircle, Eye } from "lucide-react";
import { mockEmergencies, platformStats } from "../data/mockData";

export default function Landing() {
  const activeEmergencies = mockEmergencies.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">100% Transparent Relief</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Direct, verified humanitarian aid powered by blockchain transparency. 
            Every donation tracked, every rupee accounted for.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/emergencies">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </Link>
            <Link to="/transparency">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                <Eye className="w-5 h-5 mr-2" />
                View Transparency
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="container mx-auto px-4 -mt-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Funds Raised"
            value={`₹${platformStats.totalFundsRaised.toLocaleString()}`}
            icon={Heart}
            description="Delivered to those in need"
          />
          <StatCard
            title="Lives Impacted"
            value={platformStats.livesImpacted.toLocaleString()}
            icon={Users}
            description="Across India"
          />
          <StatCard
            title="Active Emergencies"
            value={platformStats.activeEmergencies}
            icon={TrendingUp}
            description="Need your support now"
          />
        </div>
      </section>

      {/* Live Emergencies */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Active Emergencies</h2>
          <p className="text-lg text-muted-foreground">
            Help those in urgent need. Every contribution makes a difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activeEmergencies.map((emergency) => (
            <EmergencyCard key={emergency.id} emergency={emergency} />
          ))}
        </div>
        <div className="text-center">
          <Link to="/emergencies">
            <Button size="lg" variant="outline">
              View All Emergencies →
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How PulseRelief Works</h2>
            <p className="text-lg text-muted-foreground">
              Transparent, verified, and direct humanitarian aid
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Verification</h3>
                <p className="text-muted-foreground">
                  Every emergency request is verified by trusted authorities before going live
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Direct Donation</h3>
                <p className="text-muted-foreground">
                  Funds go directly to verified beneficiary wallets with zero intermediaries
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Impact</h3>
                <p className="text-muted-foreground">
                  See exactly how your donation is used with full blockchain transparency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of donors who trust PulseRelief for transparent humanitarian aid
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Create Account
            </Button>
          </Link>
          <Link to="/impact">
            <Button size="lg" variant="outline">
              View Our Impact
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
