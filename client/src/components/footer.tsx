import { Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 islamic-green rounded-lg flex items-center justify-center">
                <Heart className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Gaza Relief</h3>
                <p className="text-xs text-slate-400">Connecting Hearts to Hope</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Facilitating connections between generous donors and verified organizations providing critical aid to Gaza. 
              Allah (SWT) knows best, and we strive to serve with sincerity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('organizations')}
                  className="hover:text-green-400 transition-colors"
                >
                  Organizations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('donations')}
                  className="hover:text-green-400 transition-colors"
                >
                  How to Donate
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-green-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Verification Process</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Gaza Relief. Built with compassion for humanitarian aid.
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            <span className="mr-1">⚡</span>
            Deployed on <a href="https://vercel.com" target="_blank" className="text-green-400 hover:underline">Vercel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
