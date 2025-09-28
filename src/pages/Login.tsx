import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simulate Microsoft Entra ID login
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <Card className="w-full max-w-md relative z-10 shadow-elegant border-0 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <Activity className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">Welcome to IntelliSales</CardTitle>
          <CardDescription className="text-base">
            AI-powered sales assistant for modern sales teams
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleLogin}
            className="w-full h-12 text-base font-medium shadow-sm hover:shadow-md transition-all"
            size="lg"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 21 21" fill="currentColor">
              <path d="M10.5 0h10v10h-10z" />
              <path d="M0 0h10v10H0z" />
              <path d="M0 11h10v10H0z" />
              <path d="M10.5 11h10v10h-10z" />
            </svg>
            Sign in with Microsoft Entra ID
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Secure authentication powered by Microsoft
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}