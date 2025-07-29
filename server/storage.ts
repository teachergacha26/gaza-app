import { type Organization, type InsertOrganization, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getOrganizations(): Promise<Organization[]>;
  getOrganization(id: string): Promise<Organization | undefined>;
  createOrganization(org: InsertOrganization): Promise<Organization>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private organizations: Map<string, Organization>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.organizations = new Map();
    this.contactMessages = new Map();
    this.seedOrganizations();
  }

  private seedOrganizations() {
    const seedData: Omit<Organization, 'id' | 'createdAt'>[] = [
      {
        name: "Islamic Relief Worldwide",
        description: "International humanitarian organization providing emergency aid, healthcare, education, and long-term development programs across Gaza.",
        website: "https://www.islamic-relief.org",
        donationUrl: "https://www.islamic-relief.org/gaza-emergency-appeal/",
        phone: "+44 121 605 5555",
        email: "info@islamic-relief.org",
        location: "Birmingham, UK | Global Operations",
        category: "International Humanitarian",
        founded: "1984",
        specialization: "Emergency Relief & Development",
        iconColor: "bg-islamic-green-500",
        iconType: "fas fa-crescent-moon",
        verified: true,
      },
      {
        name: "MATW Project",
        description: "Muslim organization focused on providing essential aid, medical supplies, and humanitarian support to Palestinian families in Gaza during crisis situations.",
        website: "https://www.matwproject.org",
        donationUrl: "https://www.matwproject.org/palestine",
        phone: null,
        email: "info@matwproject.org",
        location: "London, UK | Gaza Operations",
        category: "Muslim Charity Organization",
        founded: null,
        specialization: "Essential Aid & Medical Supplies",
        iconColor: "bg-yellow-500",
        iconType: "fas fa-mosque",
        verified: true,
      },
      {
        name: "Penny Appeal",
        description: "UK-based international development charity providing emergency relief, clean water, education, and sustainable development programs in Gaza.",
        website: "https://www.pennyappeal.org",
        donationUrl: "https://www.pennyappeal.org/appeals/palestine-emergency",
        phone: "+44 1924 231 269",
        email: "info@pennyappeal.org",
        location: "Wakefield, UK | Global Relief",
        category: "International Development",
        founded: null,
        specialization: "Emergency Relief & Development",
        iconColor: "bg-orange-500",
        iconType: "fas fa-coins",
        verified: true,
      },
      {
        name: "UNRWA",
        description: "United Nations Relief and Works Agency providing education, healthcare, relief services, and emergency aid to Palestinian refugees in Gaza.",
        website: "https://www.unrwa.org",
        donationUrl: "https://donate.unrwa.org/gaza/",
        phone: null,
        email: null,
        location: "Amman, Jordan | Gaza Field Office",
        category: "United Nations Agency",
        founded: "1949",
        specialization: "Refugee Services & Aid",
        iconColor: "bg-blue-500",
        iconType: "fas fa-flag",
        verified: true,
      },
      {
        name: "Medical Aid for Palestinians",
        description: "UK charity dedicated to providing medical aid, healthcare support, and emergency medical supplies to Palestinians in Gaza and the West Bank.",
        website: "https://www.map.org.uk",
        donationUrl: "https://www.map.org.uk/donate/gaza-emergency",
        phone: "+44 20 7226 4114",
        email: "info@map.org.uk",
        location: "London, UK | Medical Focus",
        category: "Medical Aid",
        founded: null,
        specialization: "Medical Aid & Healthcare",
        iconColor: "bg-red-500",
        iconType: "fas fa-heartbeat",
        verified: true,
      },
      {
        name: "Oxfam",
        description: "International confederation working to end poverty and injustice, providing water, sanitation, food security, and emergency relief in Gaza.",
        website: "https://www.oxfam.org.uk",
        donationUrl: "https://www.oxfam.org.uk/donate/palestine-crisis/",
        phone: "+44 1865 473727",
        email: null,
        location: "Oxford, UK | International Operations",
        category: "International Development",
        founded: null,
        specialization: "Water & Sanitation",
        iconColor: "bg-green-600",
        iconType: "fas fa-hands-helping",
        verified: true,
      },
    ];

    seedData.forEach(org => {
      const id = randomUUID();
      const organization: Organization = {
        ...org,
        id,
        createdAt: new Date(),
      };
      this.organizations.set(id, organization);
    });
  }

  async getOrganizations(): Promise<Organization[]> {
    return Array.from(this.organizations.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  async getOrganization(id: string): Promise<Organization | undefined> {
    return this.organizations.get(id);
  }

  async createOrganization(insertOrg: InsertOrganization): Promise<Organization> {
    const id = randomUUID();
    const organization: Organization = {
      ...insertOrg,
      id,
      createdAt: new Date(),
    };
    this.organizations.set(id, organization);
    return organization;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
