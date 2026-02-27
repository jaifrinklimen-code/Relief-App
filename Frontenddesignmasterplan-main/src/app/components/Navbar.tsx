import { Link } from "react-router";
import { Button } from "./ui/button";
import { Heart, AlertCircle, Shield, TrendingUp, Wallet, User } from "lucide-react";

interface NavbarProps {
  isLoggedIn?: boolean;
  userRole?: "donor" | "beneficiary" | "admin" | null;
}

export function Navbar({ isLoggedIn = false, userRole = null }: NavbarProps) {
  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span>PulseRelief</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/emergencies" className="hover:text-accent transition-colors flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              <span>Emergencies</span>
            </Link>
            <Link to="/transparency" className="hover:text-accent transition-colors flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Transparency</span>
            </Link>
            <Link to="/impact" className="hover:text-accent transition-colors flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>Impact</span>
            </Link>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/wallet">
                  <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                    <Wallet className="w-4 h-4 mr-2" />
                    Wallet
                  </Button>
                </Link>
                <Link to={`/${userRole}/dashboard`}>
                  <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
