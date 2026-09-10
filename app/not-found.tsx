import React from "react";
import { Container } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Home, BookOpen, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#F8FAF8] py-24 md:py-32 flex items-center justify-center min-h-[70vh]">
      <Container size="sm" className="text-center space-y-8">
        <Badge variant="crimson" size="sm">
          Error 404
        </Badge>

        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[#0A1914] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base text-[#3D4F47] max-w-md mx-auto leading-relaxed">
            The safety training resource or page you requested could not be located. It may have been moved, updated, or does not exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Back to Home
          </Button>
          <Button
            href="/training"
            variant="outline"
            size="md"
            leftIcon={<BookOpen className="w-4 h-4" />}
          >
            Explore Training Modules
          </Button>
        </div>

        <div className="pt-6 border-t border-[#E1E7E3] text-xs text-[#64766E] flex items-center justify-center gap-2">
          <Mail className="w-3.5 h-3.5" />
          <span>Need assistance? Contact our team at info@laliguras.com</span>
        </div>
      </Container>
    </div>
  );
}
