import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center py-32 text-center">
      <p className="font-mono text-sm text-secondary">404</p>
      <h1 className="mt-2 text-4xl font-semibold">This page doesn't exist</h1>
      <p className="mt-3 text-muted-foreground">The link may be old, or mistyped.</p>
      <Button asChild className="mt-8">
        <Link to="/">
          <ArrowLeft /> Back to home
        </Link>
      </Button>
    </section>
  );
}
