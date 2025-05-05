
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  marketName: z.string().min(2, { message: "Market name is required." }),
  city: z.string().min(2, { message: "City is required." }),
  role: z.string().min(1, { message: "Please select your role." }),
  wasteAmount: z.string().min(1, { message: "Please select waste amount." }),
  wasteTypes: z.array(z.string()).min(1, { message: "Please select at least one waste type." }),
  currentDisposal: z.string().min(1, { message: "Please select current disposal method." }),
  challenges: z.string().min(10, { message: "Please describe challenges in more detail." }),
  potentialSolutions: z.string(),
  willingToParticipate: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

const Survey = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      marketName: "",
      city: "",
      role: "",
      wasteAmount: "",
      wasteTypes: [],
      currentDisposal: "",
      challenges: "",
      potentialSolutions: "",
      willingToParticipate: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Survey submitted:", data);
      
      toast({
        title: "Survey Submitted!",
        description: "Thank you for your valuable input. We'll be in touch soon.",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const wasteTypeOptions = [
    { id: "fruit-peels", label: "Fruit Peels" },
    { id: "vegetable-scraps", label: "Vegetable Scraps" },
    { id: "spoiled-produce", label: "Spoiled Produce" },
    { id: "packaging", label: "Packaging Materials" },
    { id: "food-containers", label: "Food Containers" },
    { id: "other", label: "Other Organic Waste" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900">Market Waste Survey</h1>
            <p className="mt-4 text-lg text-gray-500">
              Help us understand the waste challenges and opportunities in your local fruit and vegetable markets.
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Market Waste Assessment</CardTitle>
              <CardDescription>
                Your input will help us develop effective solutions for waste management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {/* Market Information */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Market Information</h3>
                    
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="marketName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Market Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Central Fruit Market" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City/Town</FormLabel>
                            <FormControl>
                              <Input placeholder="Your City" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Role</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="vendor">Vendor/Shop Owner</SelectItem>
                              <SelectItem value="manager">Market Manager</SelectItem>
                              <SelectItem value="worker">Market Worker</SelectItem>
                              <SelectItem value="customer">Regular Customer</SelectItem>
                              <SelectItem value="municipality">Municipality Staff</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Waste Assessment */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Waste Assessment</h3>
                    
                    <FormField
                      control={form.control}
                      name="wasteAmount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Daily Market Waste</FormLabel>
                          <FormControl>
                            <RadioGroup 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="less-50kg" />
                                </FormControl>
                                <FormLabel className="font-normal">Less than 50kg</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="50-200kg" />
                                </FormControl>
                                <FormLabel className="font-normal">50kg - 200kg</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="200-500kg" />
                                </FormControl>
                                <FormLabel className="font-normal">200kg - 500kg</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="500kg-1ton" />
                                </FormControl>
                                <FormLabel className="font-normal">500kg - 1 ton</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="more-1ton" />
                                </FormControl>
                                <FormLabel className="font-normal">More than 1 ton</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="wasteTypes"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Types of Waste Generated (Select all that apply)</FormLabel>
                            <FormDescription>
                              Choose all the types of waste commonly found in your market.
                            </FormDescription>
                          </div>
                          {wasteTypeOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="wasteTypes"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={option.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, option.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== option.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {option.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="currentDisposal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Waste Disposal Method</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select disposal method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="municipal">Municipal Waste Collection</SelectItem>
                              <SelectItem value="landfill">Direct to Landfill</SelectItem>
                              <SelectItem value="composting">Composting</SelectItem>
                              <SelectItem value="animal-feed">Used as Animal Feed</SelectItem>
                              <SelectItem value="incineration">Incineration</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="challenges"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Waste Management Challenges</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe the challenges you face with market waste management..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Explain any issues like collection difficulties, costs, or environmental concerns.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="potentialSolutions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Potential Solutions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Share any ideas you have for better waste management..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Your suggestions for how market waste could be better managed or reused.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Participation */}
                  <div className="pt-4 border-t border-gray-200">
                    <FormField
                      control={form.control}
                      name="willingToParticipate"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I'm interested in participating in waste-to-wealth initiatives
                            </FormLabel>
                            <FormDescription>
                              We may contact you about pilot programs or further research.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Survey"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Survey;
