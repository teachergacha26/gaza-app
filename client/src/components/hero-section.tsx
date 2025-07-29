import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, List, HandHeart } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-400 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-green-500 rotate-45"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="outline" className="bg-green-600/20 border-green-500/30 text-green-400 mb-8">
          <Shield className="w-4 h-4 mr-2" />
          Verified & Trusted Organizations
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Support Gaza Relief
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500">
            Through Verified Organizations
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Connect with established, trusted charitable organizations providing critical aid to Gaza. 
          Every donation makes a difference. <em className="text-yellow-400">Allah (SWT) knows best, and we can only do our part.</em>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('organizations')}
            className="islamic-green hover:bg-green-600 text-white px-8 py-4 text-lg"
          >
            <List className="w-5 h-5 mr-2" />
            View Organizations
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('donations')}
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-900 px-8 py-4 text-lg"
          >
            <HandHeart className="w-5 h-5 mr-2" />
            How to Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
