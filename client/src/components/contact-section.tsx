import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, HelpCircle, Plus, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="bg-slate-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact & Support</h2>
        <p className="text-xl text-slate-300 mb-8">
          Have questions about organizations or need assistance? We're here to help.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Support</h3>
            <p className="text-slate-300 text-sm">info@gazarelief.org</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="text-yellow-400 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">FAQ</h3>
            <p className="text-slate-300 text-sm">Common questions answered</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Plus className="text-green-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Add Organization</h3>
            <p className="text-slate-300 text-sm">Suggest verified charities</p>
          </div>
        </div>
        
        <Card className="bg-slate-900 border-slate-700 text-left max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-4 text-center">Quick Contact Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300">Name</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                <Select
                  value={watch("subject")}
                  onValueChange={(value) => setValue("subject", value)}
                >
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-white focus:border-green-500">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Suggest New Organization">Suggest New Organization</SelectItem>
                    <SelectItem value="Report Issue">Report Issue</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="text-slate-300">Message</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full islamic-green hover:bg-green-600 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
