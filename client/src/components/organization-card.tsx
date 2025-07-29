import { ExternalLink, Globe, Phone, Mail, MapPin, Calendar, Users, Tag, Building, Stethoscope, Coins, Flag, Heart, CloudMoon, Church, HandHelping, Banknote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Organization } from "@shared/schema";

interface OrganizationCardProps {
  organization: Organization;
}

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "fas fa-crescent-moon":
      return CloudMoon;
    case "fas fa-mosque":
      return Church;
    case "fas fa-coins":
      return Coins;
    case "fas fa-flag":
      return Flag;
    case "fas fa-heartbeat":
      return Stethoscope;
    case "fas fa-hands-helping":
      return HandHelping;
    default:
      return Heart;
  }
};

const getColorClasses = (iconColor: string) => {
  switch (iconColor) {
    case "bg-islamic-green-500":
      return "bg-green-500";
    case "bg-yellow-500":
      return "bg-yellow-500";
    case "bg-orange-500":
      return "bg-orange-500";
    case "bg-blue-500":
      return "bg-blue-500";
    case "bg-red-500":
      return "bg-red-500";
    case "bg-green-600":
      return "bg-green-600";
    default:
      return "bg-green-500";
  }
};

const getButtonColorClasses = (iconColor: string) => {
  switch (iconColor) {
    case "bg-islamic-green-500":
      return "bg-green-500 hover:bg-green-600";
    case "bg-yellow-500":
      return "bg-yellow-500 hover:bg-yellow-600 text-slate-900";
    case "bg-orange-500":
      return "bg-orange-500 hover:bg-orange-600";
    case "bg-blue-500":
      return "bg-blue-500 hover:bg-blue-600";
    case "bg-red-500":
      return "bg-red-500 hover:bg-red-600";
    case "bg-green-600":
      return "bg-green-600 hover:bg-green-700";
    default:
      return "bg-green-500 hover:bg-green-600";
  }
};

const getBorderColorClasses = (iconColor: string) => {
  switch (iconColor) {
    case "bg-islamic-green-500":
      return "border-green-500 text-green-400 hover:text-green-400";
    case "bg-yellow-500":
      return "border-yellow-400 text-yellow-400 hover:text-yellow-400";
    case "bg-orange-500":
      return "border-orange-500 text-orange-400 hover:text-orange-400";
    case "bg-blue-500":
      return "border-blue-500 text-blue-400 hover:text-blue-400";
    case "bg-red-500":
      return "border-red-500 text-red-400 hover:text-red-400";
    case "bg-green-600":
      return "border-green-600 text-green-400 hover:text-green-400";
    default:
      return "border-green-500 text-green-400 hover:text-green-400";
  }
};

export default function OrganizationCard({ organization }: OrganizationCardProps) {
  const IconComponent = getIconComponent(organization.iconType);
  const iconColorClass = getColorClasses(organization.iconColor);
  const buttonColorClass = getButtonColorClasses(organization.iconColor);
  const borderColorClass = getBorderColorClasses(organization.iconColor);

  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-green-500 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 ${iconColorClass} rounded-lg flex items-center justify-center`}>
            <IconComponent className="text-white w-6 h-6" />
          </div>
          <Badge variant="outline" className="border-green-500 text-green-500">
            VERIFIED
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
          {organization.name}
        </h3>
        <p className="text-slate-300 mb-4 text-sm leading-relaxed">
          {organization.description}
        </p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-slate-400">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{organization.location}</span>
          </div>
          {organization.phone && (
            <div className="flex items-center text-sm text-slate-400">
              <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{organization.phone}</span>
            </div>
          )}
          {organization.email && (
            <div className="flex items-center text-sm text-slate-400">
              <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{organization.email}</span>
            </div>
          )}
          {organization.founded && (
            <div className="flex items-center text-sm text-slate-400">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Founded {organization.founded}</span>
            </div>
          )}
          {organization.specialization && (
            <div className="flex items-center text-sm text-slate-400">
              <Tag className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{organization.specialization}</span>
            </div>
          )}
        </div>
        
        <div className="flex space-x-3">
          <Button 
            asChild
            className={`flex-1 ${buttonColorClass} text-white`}
          >
            <a 
              href={organization.donationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Donate Now
            </a>
          </Button>
          <Button 
            variant="outline"
            asChild
            className={`border-slate-600 hover:${borderColorClass.split(' ')[0]} text-slate-300 ${borderColorClass}`}
          >
            <a 
              href={organization.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Globe className="w-4 h-4 mr-2" />
              Website
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}


