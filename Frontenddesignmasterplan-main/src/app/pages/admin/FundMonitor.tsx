import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { mockEmergencies } from "../../data/mockData";
import { TrendingUp, AlertCircle, CheckCircle, DollarSign } from "lucide-react";

export default function FundMonitor() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Fund Monitor</h1>
        <p className="text-muted-foreground">Monitor fund flow across all active emergencies</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">₹10.6L</p>
                <p className="text-xs text-muted-foreground">Total Raised</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">₹4.2L</p>
                <p className="text-xs text-muted-foreground">Distributed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-xs text-muted-foreground">Active Campaigns</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-xs text-muted-foreground">Flagged</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fund Flow Details */}
      {mockEmergencies.map((emergency) => {
        const progress = (emergency.amountRaised / emergency.amountNeeded) * 100;
        const distributed = Math.floor(emergency.amountRaised * 0.4); // Mock 40% distributed
        const distributionRate = (distributed / emergency.amountRaised) * 100;

        return (
          <Card key={emergency.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{emergency.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    Emergency ID: {emergency.id}
                  </p>
                </div>
                <Badge variant="outline" className={
                  emergency.urgency === "High" ? "border-destructive text-destructive" :
                  emergency.urgency === "Medium" ? "border-secondary text-secondary" :
                  "border-muted-foreground text-muted-foreground"
                }>
                  {emergency.urgency} Priority
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Fund Raising Progress */}
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Funds Raised</span>
                  <span className="font-medium">
                    ₹{emergency.amountRaised.toLocaleString()} / ₹{emergency.amountNeeded.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-2 mb-1" />
                <p className="text-xs text-muted-foreground">{progress.toFixed(0)}% of goal</p>
              </div>

              {/* Fund Distribution */}
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Funds Distributed</span>
                  <span className="font-medium">
                    ₹{distributed.toLocaleString()} / ₹{emergency.amountRaised.toLocaleString()}
                  </span>
                </div>
                <Progress value={distributionRate} className="h-2 mb-1" />
                <p className="text-xs text-muted-foreground">{distributionRate.toFixed(0)}% distributed</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Beneficiary Wallet</p>
                  <code className="text-xs font-mono">{emergency.beneficiaryWallet}</code>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Families Affected</p>
                  <p className="font-semibold">{emergency.familiesAffected}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-sm">{emergency.location}</p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  {emergency.verified ? (
                    <Badge variant="default" className="bg-accent">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Unverified</Badge>
                  )}
                </div>
              </div>

              {/* Activity Status */}
              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-semibold text-accent mb-1">Fund Flow Normal</p>
                    <p className="text-sm text-muted-foreground">
                      All transactions verified. Distribution progressing as planned.
                      Last update: 26 Feb 2026, 3:45 PM
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
