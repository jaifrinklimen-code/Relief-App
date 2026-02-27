import { Outlet, useLocation } from "react-router";
import { RoleSidebar } from "../components/RoleSidebar";

export default function DashboardLayout() {
  const location = useLocation();
  
  // Determine role from path
  let role: "donor" | "beneficiary" | "admin" = "donor";
  if (location.pathname.startsWith("/beneficiary")) role = "beneficiary";
  if (location.pathname.startsWith("/admin")) role = "admin";

  return (
    <div className="flex min-h-screen bg-background">
      <RoleSidebar role={role} />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
