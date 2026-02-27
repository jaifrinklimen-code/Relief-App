import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Public Pages
import Landing from "./pages/Landing";
import EmergencyListing from "./pages/EmergencyListing";
import EmergencyDetail from "./pages/EmergencyDetail";
import Transparency from "./pages/Transparency";
import Impact from "./pages/Impact";

// Auth Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RoleSelect from "./pages/RoleSelect";

// Donor Pages
import DonorDashboard from "./pages/donor/DonorDashboard";
import DonationHistory from "./pages/donor/DonationHistory";
import DonationTracking from "./pages/donor/DonationTracking";

// Beneficiary Pages
import BeneficiaryDashboard from "./pages/beneficiary/BeneficiaryDashboard";
import RaiseRequest from "./pages/beneficiary/RaiseRequest";
import RequestStatus from "./pages/beneficiary/RequestStatus";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import Verification from "./pages/admin/Verification";
import FundMonitor from "./pages/admin/FundMonitor";

// Shared Pages
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // Public Routes
      { index: true, Component: Landing },
      { path: "emergencies", Component: EmergencyListing },
      { path: "emergency/:id", Component: EmergencyDetail },
      { path: "transparency", Component: Transparency },
      { path: "impact", Component: Impact },
      
      // Auth Routes
      { path: "signup", Component: Signup },
      { path: "login", Component: Login },
      { path: "role-select", Component: RoleSelect },
      
      // Shared Routes
      { path: "profile", Component: Profile },
      { path: "wallet", Component: Wallet },
      
      // Donor Routes
      {
        path: "donor",
        Component: DashboardLayout,
        children: [
          { path: "dashboard", Component: DonorDashboard },
          { path: "history", Component: DonationHistory },
          { path: "tracking", Component: DonationTracking },
        ],
      },
      
      // Beneficiary Routes
      {
        path: "beneficiary",
        Component: DashboardLayout,
        children: [
          { path: "dashboard", Component: BeneficiaryDashboard },
          { path: "request", Component: RaiseRequest },
          { path: "status", Component: RequestStatus },
        ],
      },
      
      // Admin Routes
      {
        path: "admin",
        Component: DashboardLayout,
        children: [
          { path: "dashboard", Component: AdminDashboard },
          { path: "verification", Component: Verification },
          { path: "monitor", Component: FundMonitor },
        ],
      },
    ],
  },
]);
