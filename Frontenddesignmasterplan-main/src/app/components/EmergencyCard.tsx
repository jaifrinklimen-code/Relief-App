import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { MapPin, Users, AlertCircle } from "lucide-react";
import { Link } from "react-router";

export interface EmergencyData {
  id: string;
  title: string;
  location: string;
  category: string;
  urgency: "High" | "Medium" | "Low";
  amountNeeded: number;
  amountRaised: number;
  familiesAffected: number;
  verified: boolean;
  beneficiaryWallet: string;
}

interface EmergencyCardProps {
  emergency: EmergencyData;
}

export function EmergencyCard({ emergency }: EmergencyCardProps) {
  const progress = (emergency.amountRaised / emergency.amountNeeded) * 100;
  const urgencyColor = emergency.urgency === "High" ? "destructive" : emergency.urgency === "Medium" ? "secondary" : "outline";

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg">{emergency.title}</h3>
          {emergency.verified && (
            <Badge variant="secondary" className="bg-secondary text-white">
              ✓ Verified
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{emergency.location}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Category</span>
          <Badge variant="outline">{emergency.category}</Badge>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Urgency</span>
          <Badge variant={urgencyColor}>{emergency.urgency}</Badge>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4 text-muted-foreground" />
          <span>{emergency.familiesAffected} families affected</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Raised</span>
            <span className="font-medium">₹{emergency.amountRaised.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{progress.toFixed(0)}% of goal</span>
            <span>₹{emergency.amountNeeded.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/emergency/${emergency.id}`} className="w-full">
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            View Details & Donate
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
