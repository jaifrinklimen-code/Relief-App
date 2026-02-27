import { StatCard } from "../../components/StatCard";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Shield, AlertCircle, TrendingUp, Flag, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { mockRequests, mockEmergencies } from "../../data/mockData";

export default function AdminDashboard() {
  const pendingVerifications = mockRequests.filter(r => r.status === "Pending").length;
  const activeEmergencies = mockEmergencies.length;
  const totalFunds = mockEmergencies.reduce((sum, e) => sum + e.amountRaised, 0);
  const flaggedRequests = 2;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage verifications and monitor platform activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Pending Verifications"
          value={pendingVerifications}
          icon={Shield}
          description="Require action"
        />
        <StatCard
          title="Active Emergencies"
          value={activeEmergencies}
          icon={AlertCircle}
        />
        <StatCard
          title="Total Funds Flowing"
          value={`₹${totalFunds.toLocaleString()}`}
          icon={TrendingUp}
        />
        <StatCard
          title="Flagged Requests"
          value={flaggedRequests}
          icon={Flag}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Pending Verifications</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockRequests.filter(r => r.status === "Pending").map((request) => (
                <div 
                  key={request.id}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-semibold">{request.title}</p>
                    <Badge variant="secondary">Pending</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1 mb-3">
                    <p>Request ID: {request.id}</p>
                    <p>Submitted: {request.submittedOn}</p>
                    <p>People Affected: {request.peopleAffected}</p>
                    <p>Required: ₹{request.requiredFunds.toLocaleString()}</p>
                  </div>
                  <Link to="/admin/verification">
                    <Button size="sm" className="w-full">
                      Review Request
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
            {pendingVerifications === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>No pending verifications</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Active Emergencies</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockEmergencies.slice(0, 3).map((emergency) => {
                const progress = (emergency.amountRaised / emergency.amountNeeded) * 100;
                return (
                  <div 
                    key={emergency.id}
                    className="p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold">{emergency.title}</p>
                      <Badge variant="outline">{emergency.urgency}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      <p>₹{emergency.amountRaised.toLocaleString()} / ₹{emergency.amountNeeded.toLocaleString()}</p>
                      <p className="text-xs">{progress.toFixed(0)}% funded</p>
                    </div>
                    <Link to={`/emergency/${emergency.id}`}>
                      <Button size="sm" variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Health */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Platform Health</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Verified Emergencies</p>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">3.2 hrs</p>
              <p className="text-sm text-muted-foreground">Avg Verification Time</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-muted-foreground">Security Incidents</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
