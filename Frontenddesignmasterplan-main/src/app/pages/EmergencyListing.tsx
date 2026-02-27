import { EmergencyCard } from "../components/EmergencyCard";
import { mockEmergencies } from "../data/mockData";
import { Badge } from "../components/ui/badge";
import { Filter } from "lucide-react";

export default function EmergencyListing() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Active Emergencies</h1>
          <p className="text-lg text-muted-foreground">
            Browse all verified emergencies needing support
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by:</span>
          </div>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">All</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Natural Disaster</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Healthcare</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Education</Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">Emergency</Badge>
        </div>

        {/* Emergency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEmergencies.map((emergency) => (
            <EmergencyCard key={emergency.id} emergency={emergency} />
          ))}
        </div>

        {/* Stats Footer */}
        <div className="mt-12 p-6 bg-card rounded-lg border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{mockEmergencies.length}</p>
              <p className="text-sm text-muted-foreground">Active Emergencies</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">
                {mockEmergencies.filter(e => e.verified).length}
              </p>
              <p className="text-sm text-muted-foreground">Verified by Admins</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">
                {mockEmergencies.reduce((sum, e) => sum + e.familiesAffected, 0).toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">People Need Help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
