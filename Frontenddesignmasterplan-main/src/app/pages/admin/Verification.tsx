import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { mockRequests } from "../../data/mockData";
import { Shield, FileText, Users, DollarSign, MapPin, CheckCircle, XCircle } from "lucide-react";

export default function Verification() {
  const pendingRequests = mockRequests.filter(r => r.status === "Pending");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Verification Panel</h1>
        <p className="text-muted-foreground">Review and verify emergency relief requests</p>
      </div>

      {pendingRequests.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <p className="text-lg text-muted-foreground">No pending verifications</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {pendingRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{request.title}</h2>
                    <Badge variant="secondary">Pending Review</Badge>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Request ID</p>
                    <p className="font-mono font-semibold">{request.id}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Request Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <MapPin className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">Bihar, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Users className="w-8 h-8 text-secondary" />
                    <div>
                      <p className="text-sm text-muted-foreground">People Affected</p>
                      <p className="font-semibold">{request.peopleAffected}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Required Funds</p>
                      <p className="font-semibold">₹{request.requiredFunds.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Documents</p>
                      <p className="font-semibold">{request.documents || "Uploaded"}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground">
                    Severe flooding has affected {request.peopleAffected} families in the region. 
                    Immediate relief is required including food supplies, clean water, medical aid, 
                    and temporary shelter arrangements. The situation is urgent and requires immediate action.
                  </p>
                </div>

                {/* Beneficiary Info */}
                <div>
                  <h3 className="font-semibold mb-2">Beneficiary Information</h3>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Submitted By:</span>
                        <span className="font-medium">NGO-Trust India</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Wallet Address:</span>
                        <code className="font-mono text-sm">{request.wallet}</code>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Submitted On:</span>
                        <span>{request.submittedOn}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Review */}
                <div>
                  <h3 className="font-semibold mb-2">Documents Review</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 border border-border rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Government Authorization.pdf</span>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                    <div className="p-3 border border-border rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Situation Assessment.pdf</span>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                    <div className="p-3 border border-border rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Photos - Evidence.zip</span>
                      </div>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </div>
                </div>

                {/* Admin Notes */}
                <div>
                  <h3 className="font-semibold mb-2">Admin Notes</h3>
                  <Textarea 
                    placeholder="Add verification notes or comments..."
                    rows={3}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button className="flex-1 bg-accent hover:bg-accent/90">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve Request
                  </Button>
                  <Button variant="destructive" className="flex-1">
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
