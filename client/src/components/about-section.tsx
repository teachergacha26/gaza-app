import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Gaza Relief</h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Gaza Relief serves as a trusted directory connecting generous donors with verified, established organizations 
              providing critical humanitarian aid to the people of Gaza.
            </p>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              We carefully vet each organization to ensure they are legitimate, registered charities with proven track records 
              in Palestinian aid and transparent financial practices.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              <em className="text-yellow-400">Allah (SWT) knows best, and we can only do our part</em> to facilitate 
              connections between those who wish to give and those who desperately need support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('organizations')}
                className="islamic-green hover:bg-green-600 text-white px-6 py-3"
              >
                View Organizations
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-slate-600 hover:border-green-500 text-slate-300 hover:text-green-400 px-6 py-3"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-green-900/50 to-slate-800/50 rounded-xl border border-slate-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 islamic-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg text-slate-300 italic">
                  "Connecting Hearts to Hope"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
