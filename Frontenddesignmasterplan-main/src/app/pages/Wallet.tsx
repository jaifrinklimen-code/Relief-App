import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Wallet as WalletIcon, CheckCircle, Copy, ExternalLink } from "lucide-react";

export default function Wallet() {
  const walletAddress = "0xAb3f8e91D72cB45a...91D";
  const network = "Sepolia";
  const balance = "1.21 ETH";

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold mb-2">Wallet</h1>
          <p className="text-muted-foreground">Manage your connected wallet</p>
        </div>

        <div className="mt-8 space-y-6">
          {/* Connection Status */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Wallet Connection</h2>
                <Badge variant="default" className="bg-accent">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Connected
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <WalletIcon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Wallet Address</p>
                  <div className="flex items-center gap-2">
                    <code className="font-mono font-semibold">{walletAddress}</code>
                    <button className="text-primary hover:text-primary/80">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="text-primary hover:text-primary/80">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Network</p>
                  <p className="font-semibold">{network}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Balance</p>
                  <p className="font-semibold">{balance}</p>
                </div>
              </div>

              <Button variant="destructive" className="w-full">
                Disconnect Wallet
              </Button>
            </CardContent>
          </Card>

          {/* Wallet Features */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Features</h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">Direct Donations</p>
                  <p className="text-sm text-muted-foreground">
                    Send funds directly to verified beneficiaries
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">Blockchain Verified</p>
                  <p className="text-sm text-muted-foreground">
                    All transactions recorded on-chain
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-semibold">Full Transparency</p>
                  <p className="text-sm text-muted-foreground">
                    Track every rupee from donation to distribution
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Connect */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">How to Connect a Wallet</h2>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside text-sm text-muted-foreground">
                <li>Install MetaMask or another Web3 wallet extension</li>
                <li>Create or import a wallet</li>
                <li>Click "Connect Wallet" button</li>
                <li>Approve the connection in your wallet</li>
                <li>Start making transparent donations</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
