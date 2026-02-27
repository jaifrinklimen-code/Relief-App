import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { CheckCircle, Package, Truck, Users, Activity } from "lucide-react";

export default function DonationTracking() {
  const donations = [
    {
      emergency: "Assam Floods",
      amount: "0.03 ETH",
      date: "24 Feb 2026",
      stages: [
        { label: "Donation Received", completed: true, icon: CheckCircle },
        { label: "Funds Transferred", completed: true, icon: Activity },
        { label: "Supplies Purchased", completed: true, icon: Package },
        { label: "Distribution Started", completed: true, icon: Truck },
        { label: "Impact Recorded", completed: false, icon: Users },
      ],
      impact: "12 families received food supplies and clean water",
      progress: 80,
    },
    {
      emergency: "Chennai Medical Camp",
      amount: "0.02 ETH",
      date: "22 Feb 2026",
      stages: [
        { label: "Donation Received", completed: true, icon: CheckCircle },
        { label: "Funds Transferred", completed: true, icon: Activity },
        { label: "Medical Supplies Bought", completed: true, icon: Package },
        { label: "Camp Running", completed: false, icon: Truck },
        { label: "Patients Treated", completed: false, icon: Users },
      ],
      impact: "8 patients treated in medical camp",
      progress: 60,
    },
    {
      emergency: "Kerala Landslide Aid",
      amount: "0.05 ETH",
      date: "20 Feb 2026",
      stages: [
        { label: "Donation Received", completed: true, icon: CheckCircle },
        { label: "Funds Transferred", completed: true, icon: Activity },
        { label: "Relief Materials Bought", completed: true, icon: Package },
        { label: "Distribution Completed", completed: true, icon: Truck },
        { label: "Impact Verified", completed: true, icon: Users },
      ],
      impact: "25 families received temporary shelter and supplies",
      progress: 100,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Donation Tracking</h1>
        <p className="text-muted-foreground">See exactly how your donations are making a difference</p>
      </div>

      {donations.map((donation, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{donation.emergency}</h2>
                <p className="text-sm text-muted-foreground">
                  Donated {donation.amount} on {donation.date}
                </p>
              </div>
              <Badge 
                variant={donation.progress === 100 ? "default" : "secondary"}
                className={donation.progress === 100 ? "bg-accent" : ""}
              >
                {donation.progress === 100 ? "Completed" : "In Progress"}
              </Badge>
            </div>
            <Progress value={donation.progress} className="h-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Timeline */}
            <div className="space-y-4">
              {donation.stages.map((stage, stageIndex) => {
                const Icon = stage.icon;
                return (
                  <div key={stageIndex} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      stage.completed 
                        ? "bg-accent text-white" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className={`font-semibold ${
                        stage.completed ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {stage.label}
                      </p>
                      {stage.completed && (
                        <p className="text-sm text-muted-foreground">✓ Completed</p>
                      )}
                    </div>
                    {stageIndex < donation.stages.length - 1 && (
                      <div className={`absolute left-5 w-0.5 h-12 mt-10 ${
                        donation.stages[stageIndex + 1].completed 
                          ? "bg-accent" 
                          : "bg-muted"
                      }`} style={{ marginLeft: '-20px' }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Impact Summary */}
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-semibold text-accent mb-1">Your Impact</p>
                  <p className="text-sm">{donation.impact}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Summary Stats */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{donations.length}</p>
              <p className="text-sm text-muted-foreground">Active Donations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">72</p>
              <p className="text-sm text-muted-foreground">Total Families Helped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">
                {donations.filter(d => d.progress === 100).length}
              </p>
              <p className="text-sm text-muted-foreground">Fully Completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
