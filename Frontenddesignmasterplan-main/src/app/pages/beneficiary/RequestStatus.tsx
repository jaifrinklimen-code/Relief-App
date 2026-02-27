import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { mockRequests } from "../../data/mockData";
import { Clock, CheckCircle, XCircle, TrendingUp } from "lucide-react";

export default function RequestStatus() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Request Status</h1>
        <p className="text-muted-foreground">Track the status of all your aid requests</p>
      </div>

      {mockRequests.map((request) => {
        const getStatusIcon = () => {
          switch (request.status) {
            case "Approved":
            case "Funded":
              return CheckCircle;
            case "Pending":
              return Clock;
            case "Rejected":
              return XCircle;
            default:
              return Clock;
          }
        };

        const getStatusColor = () => {
          switch (request.status) {
            case "Approved":
            case "Funded":
              return "bg-accent";
            case "Pending":
              return "bg-secondary";
            case "Rejected":
              return "bg-destructive";
            default:
              return "bg-muted";
          }
        };

        const StatusIcon = getStatusIcon();
        const progress = request.fundsReceived 
          ? (request.fundsReceived / request.requiredFunds) * 100 
          : 0;

        return (
          <Card key={request.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{request.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Request ID: {request.id}</span>
                    <span>•</span>
                    <span>Submitted: {request.submittedOn}</span>
                  </div>
                </div>
                <Badge variant="outline" className={getStatusColor() + " text-white"}>
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {request.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">People Affected</p>
                  <p className="text-2xl font-bold">{request.peopleAffected}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Required Funds</p>
                  <p className="text-2xl font-bold">₹{request.requiredFunds.toLocaleString()}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Funds Received</p>
                  <p className="text-2xl font-bold">
                    ₹{(request.fundsReceived || 0).toLocaleString()}
                  </p>
                </div>
              </div>

              {request.fundsReceived && request.fundsReceived > 0 && (
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-muted-foreground">Funding Progress</span>
                    <span className="font-medium">{progress.toFixed(0)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              {request.status === "Pending" && (
                <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">Under Review</p>
                      <p className="text-sm text-muted-foreground">
                        Your request is being verified by admin authorities. 
                        This typically takes 24-48 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {request.status === "Approved" && (
                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-semibold text-accent mb-1">Approved & Live</p>
                      <p className="text-sm text-muted-foreground">
                        Your request has been verified and is now visible to donors. 
                        Funds will be transferred directly to your wallet.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {request.status === "Funded" && (
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary mb-1">Funding Complete</p>
                      <p className="text-sm text-muted-foreground">
                        All requested funds have been raised and transferred. 
                        Please update donors on fund utilization.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Wallet:</strong> <code className="font-mono">{request.wallet}</code>
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
