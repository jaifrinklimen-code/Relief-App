import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Heart, HandHeart } from "lucide-react";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Role</h1>
          <p className="text-lg text-muted-foreground">
            Select how you'd like to participate in PulseRelief
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donor Card */}
          <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Heart className="w-10 h-10 text-primary" fill="currentColor" />
              </div>
              <h2 className="text-2xl font-bold">I Want to Donate</h2>
              <p className="text-muted-foreground">Make transparent donations to verified causes</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Browse verified emergencies</p>
                <p>✓ Direct wallet-to-wallet donations</p>
                <p>✓ Track your impact in real-time</p>
                <p>✓ Full blockchain transparency</p>
                <p>✓ Tax deductible receipts</p>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => navigate("/donor/dashboard")}
              >
                Continue as Donor
              </Button>
            </CardContent>
          </Card>

          {/* Beneficiary Card */}
          <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <HandHeart className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold">I Need Aid</h2>
              <p className="text-muted-foreground">Request relief for verified emergencies</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ Submit emergency requests</p>
                <p>✓ Get verified by authorities</p>
                <p>✓ Receive funds directly</p>
                <p>✓ Transparent fund management</p>
                <p>✓ Real-time status updates</p>
              </div>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90"
                onClick={() => navigate("/beneficiary/dashboard")}
              >
                Continue as Beneficiary
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          You can change your role later in your profile settings
        </p>
      </div>
    </div>
  );
}
