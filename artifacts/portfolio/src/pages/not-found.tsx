import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground">Page not found.</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline text-sm">
          Return home
        </a>
      </div>
    </div>
  );
}
