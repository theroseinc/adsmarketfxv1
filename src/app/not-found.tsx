import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-bold text-primary/20 leading-none">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-4 leading-tight">
          Page Not Found
        </h2>
        
        <p className="text-lg sm:text-xl text-secondary-text mb-10 leading-relaxed max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-all hover:bg-primary/90 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-8 py-4 text-lg font-medium text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95"
          >
            <Search className="w-5 h-5" />
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
