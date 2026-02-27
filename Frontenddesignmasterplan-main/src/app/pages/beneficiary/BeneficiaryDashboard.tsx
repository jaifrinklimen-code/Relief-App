import { StatCard } from "../../components/StatCard";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { FileText, DollarSign, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router";
import { mockRequests } from "../../data/mockData";

export default function BeneficiaryDashboard() {
  const approvedRequests = mockRequests.filter(r => r.status === "Approved" || r.status === "Funded").length;
  const totalReceived = mockRequests
    .filter(r => r.fundsReceived)
    .reduce((sum, r) => sum + (r.fundsReceived || 0), 0);
  const utilized = 45000;
  const remaining = totalReceived - utilized;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Beneficiary Dashboard</h1>
        <p className="text-muted-foreground">Manage your aid requests and track funds</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Approved Requests"
          value={approvedRequests}
          icon={CheckCircle}
        />
        <StatCard
          title="Funds Received"
          value={`₹${totalReceived.toLocaleString()}`}
          icon={DollarSign}
        />
        <StatCard
          title="Utilized"
          value={`₹${utilized.toLocaleString()}`}
          icon={FileText}
        />
        <StatCard
          title="Remaining"
          value={`₹${remaining.toLocaleString()}`}
          icon={Clock}
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Quick Actions</h2>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Link to="/beneficiary/request">
              <Button className="bg-primary hover:bg-primary/90">
                <FileText className="w-4 h-4 mr-2" />
                Raise New Request
              </Button>
            </Link>
            <Link to="/beneficiary/status">
              <Button variant="outline">
                View All Requests
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Active Requests */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Your Requests</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRequests.map((request) => (
              <div 
                key={request.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-semibold">{request.title}</p>
                    <Badge 
                      variant={
                        request.status === "Approved" ? "default" : 
                        request.status === "Funded" ? "default" :
                        request.status === "Pending" ? "secondary" : "destructive"
                      }
                    >
                      {request.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Request ID: {request.id}</p>
                    <p>Submitted: {request.submittedOn}</p>
                    <p>People Affected: {request.peopleAffected}</p>
                    {request.fundsReceived && (
                      <p className="text-accent font-medium">
                        Funds Received: ₹{request.fundsReceived.toLocaleString()} 
                        / ₹{request.requiredFunds.toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
