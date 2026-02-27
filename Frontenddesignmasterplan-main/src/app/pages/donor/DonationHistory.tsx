import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { ExternalLink } from "lucide-react";
import { mockDonationHistory } from "../../data/mockData";

export default function DonationHistory() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Donation History</h1>
        <p className="text-muted-foreground">Complete record of all your contributions</p>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">All Donations</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Emergency</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Transaction Hash</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDonationHistory.map((donation, index) => (
                <TableRow key={index}>
                  <TableCell>{donation.date}</TableCell>
                  <TableCell className="font-medium">{donation.emergency}</TableCell>
                  <TableCell className="font-semibold">{donation.amount}</TableCell>
                  <TableCell>
                    <code className="text-sm font-mono text-muted-foreground">
                      {donation.txHash}
                    </code>
                  </TableCell>
                  <TableCell>
                    <Badge variant={donation.status === "Confirmed" ? "default" : "secondary"}>
                      {donation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <a href="#" className="text-primary hover:text-primary/80">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">₹18,000</p>
              <p className="text-sm text-muted-foreground">Total Donated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">3</p>
              <p className="text-sm text-muted-foreground">Emergencies Supported</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">Successfully Delivered</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
