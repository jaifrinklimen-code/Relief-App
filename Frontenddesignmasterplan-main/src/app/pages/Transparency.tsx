import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Shield, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import { mockTransactions } from "../data/mockData";

export default function Transparency() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Blockchain Transparency</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every transaction is recorded on the blockchain. Track the complete flow of funds 
            from donors to beneficiaries with full transparency.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{mockTransactions.length}</p>
              <p className="text-sm text-muted-foreground">Total Transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Verified on Chain</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
              <p className="text-3xl font-bold">0%</p>
              <p className="text-sm text-muted-foreground">Platform Fee</p>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Table */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">Recent Transactions</h2>
            <p className="text-sm text-muted-foreground">
              All donations are publicly verifiable on the blockchain
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction Hash</TableHead>
                    <TableHead>Emergency</TableHead>
                    <TableHead>From (Donor)</TableHead>
                    <TableHead>To (Beneficiary)</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTransactions.map((tx) => (
                    <TableRow key={tx.txHash}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono">{tx.txHash}</code>
                          <ExternalLink className="w-3 h-3 text-muted-foreground" />
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{tx.emergencyTitle}</TableCell>
                      <TableCell>
                        <code className="text-sm font-mono text-muted-foreground">
                          {tx.donorWallet}
                        </code>
                      </TableCell>
                      <TableCell>
                        <code className="text-sm font-mono text-muted-foreground">
                          {tx.beneficiaryWallet}
                        </code>
                      </TableCell>
                      <TableCell className="font-semibold">{tx.amount}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {tx.timestamp}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={tx.status === "Completed" ? "default" : "secondary"}
                          className={tx.status === "Completed" ? "bg-accent" : ""}
                        >
                          {tx.status === "Completed" && <CheckCircle className="w-3 h-3 mr-1" />}
                          {tx.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mt-8">
          <CardHeader>
            <h2 className="text-2xl font-semibold">How Transparency Works</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Direct Wallet-to-Wallet Transfer</h3>
                <p className="text-sm text-muted-foreground">
                  Donations go directly from your wallet to the verified beneficiary's wallet with no intermediaries.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Blockchain Recording</h3>
                <p className="text-sm text-muted-foreground">
                  Every transaction is recorded on the blockchain, creating an immutable record that anyone can verify.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Public Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Anyone can verify the transaction on blockchain explorers using the transaction hash provided.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
