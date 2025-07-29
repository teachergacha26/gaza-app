import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import OrganizationCard from "@/components/organization-card";
import type { Organization } from "@shared/schema";

export default function OrganizationsList() {
  const { data: organizations, isLoading } = useQuery<Organization[]>({
    queryKey: ['/api/organizations'],
  });

  if (isLoading) {
    return (
      <section id="organizations" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Verified Organizations</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Loading organizations...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="animate-pulse">
                    <div className="w-12 h-12 bg-slate-600 rounded-lg mb-4"></div>
                    <div className="h-6 bg-slate-600 rounded mb-2"></div>
                    <div className="h-20 bg-slate-600 rounded mb-4"></div>
                    <div className="h-10 bg-slate-600 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!organizations || organizations.length === 0) {
    return (
      <section id="organizations" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Verified Organizations</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              No organizations found. Please check back later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="organizations" className="bg-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Verified Organizations</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            These established organizations are actively providing aid to Gaza. Click to visit their official donation pages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((organization) => (
            <OrganizationCard key={organization.id} organization={organization} />
          ))}
        </div>
      </div>
    </section>
  );
}