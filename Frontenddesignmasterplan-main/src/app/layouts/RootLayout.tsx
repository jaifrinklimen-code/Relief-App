import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/Navbar";

export default function RootLayout() {
  const location = useLocation();
  
  // Determine if user is logged in and their role based on route
  const isLoggedIn = location.pathname.startsWith("/donor") || 
                     location.pathname.startsWith("/beneficiary") || 
                     location.pathname.startsWith("/admin") ||
                     location.pathname === "/profile" ||
                     location.pathname === "/wallet";
  
  let userRole: "donor" | "beneficiary" | "admin" | null = null;
  if (location.pathname.startsWith("/donor")) userRole = "donor";
  if (location.pathname.startsWith("/beneficiary")) userRole = "beneficiary";
  if (location.pathname.startsWith("/admin")) userRole = "admin";

  return (
    <div className="min-h-screen">
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} />
      <Outlet />
    </div>
  );
}
