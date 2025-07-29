import { ShieldCheck, Globe, Heart } from "lucide-react";

export default function TrustIndicators() {
  return (
    <section className="bg-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Organizations</h3>
            <p className="text-slate-300">All listed charities are established, registered organizations with proven track records</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
              <Globe className="text-yellow-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Direct Links</h3>
            <p className="text-slate-300">Connect directly with organizations' official donation pages for secure giving</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Impact</h3>
            <p className="text-slate-300">Organizations provide clear information about how donations are utilized</p>
          </div>
        </div>
      </div>
    </section>
  );
}
