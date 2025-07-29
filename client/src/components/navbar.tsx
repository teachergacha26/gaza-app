import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 islamic-green rounded-lg flex items-center justify-center">
              <Heart className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Gaza Relief</h1>
              <p className="text-xs text-slate-300">Verified Organizations</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('organizations')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Organizations
            </button>
            <button 
              onClick={() => scrollToSection('donations')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              How to Donate
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden text-slate-300 hover:text-white">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-800 border-slate-700">
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('organizations')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Organizations
                </button>
                <button 
                  onClick={() => scrollToSection('donations')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                >
                  How to Donate
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-left"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
