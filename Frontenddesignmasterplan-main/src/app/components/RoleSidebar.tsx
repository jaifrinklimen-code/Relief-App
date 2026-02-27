import { Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Heart, 
  Activity, 
  FileText, 
  CheckCircle,
  Shield,
  AlertCircle,
  TrendingUp,
  User
} from "lucide-react";

interface SidebarLink {
  to: string;
  icon: React.ElementType;
  label: string;
}

interface RoleSidebarProps {
  role: "donor" | "beneficiary" | "admin";
}

const sidebarConfig: Record<string, SidebarLink[]> = {
  donor: [
    { to: "/donor/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/donor/history", icon: Heart, label: "My Donations" },
    { to: "/donor/tracking", icon: Activity, label: "Tracking" },
    { to: "/profile", icon: User, label: "Profile" },
  ],
  beneficiary: [
    { to: "/beneficiary/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/beneficiary/request", icon: FileText, label: "Raise Request" },
    { to: "/beneficiary/status", icon: CheckCircle, label: "Status" },
    { to: "/profile", icon: User, label: "Profile" },
  ],
  admin: [
    { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/verification", icon: Shield, label: "Verification" },
    { to: "/admin/monitor", icon: AlertCircle, label: "Fund Monitor" },
    { to: "/impact", icon: TrendingUp, label: "Impact Stats" },
    { to: "/profile", icon: User, label: "Profile" },
  ],
};

export function RoleSidebar({ role }: RoleSidebarProps) {
  const location = useLocation();
  const links = sidebarConfig[role] || [];

  return (
    <aside className="w-64 bg-card border-r border-border min-h-screen p-4">
      <div className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
