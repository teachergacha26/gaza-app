import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, XCircle } from "lucide-react";

export default function DonationGuide() {
  return (
    <section id="donations" className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How to Donate Safely</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Follow these guidelines to ensure your donations reach those who need them most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 islamic-green rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Choose a Verified Organization</h3>
                <p className="text-slate-300">Select from our verified list of established charities with proven track records in Palestinian aid.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 islamic-green rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Official Websites</h3>
                <p className="text-slate-300">Always use the direct links to organization websites. Avoid third-party donation platforms.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 islamic-green rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Verify Security</h3>
                <p className="text-slate-300">Ensure the donation page uses HTTPS and displays official charity registration numbers.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 warm-gold rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-slate-900 font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Keep Records</h3>
                <p className="text-slate-300">Save confirmation emails and receipts for your records and potential tax deductions.</p>
              </div>
            </div>
          </div>
          
          <Card className="bg-slate-900 border-slate-700">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 warm-gold rounded-lg flex items-center justify-center mr-4">
                  <Shield className="text-slate-900 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Safety Tips</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Verify charity registration with official regulators (Charity Commission, IRS, etc.)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Look for detailed financial transparency and annual reports</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Avoid organizations with unclear donation purposes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Be cautious of urgent, time-sensitive donation requests</p>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="text-red-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">Never provide personal information beyond what's necessary for donation processing</p>
                </div>
              </div>
              
              <Card className="mt-6 bg-green-500/10 border-green-500/30">
                <CardContent className="p-4">
                  <p className="text-sm text-green-400 italic">
                    "And whoever saves a life, it is as if he has saved all of mankind." - Quran 5:32
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
