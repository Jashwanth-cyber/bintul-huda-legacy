import { useState } from "react";
import { Send, User, Mail, Phone, Calendar, ArrowLeft, Users, MapPin, Building, File, Check, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "next-themes";
import Footer from "@/components/Footer";
import schoolLogo from "@/assets/school-logo.png"; // Replace with your actual logo image path

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    currentSchool: "",
    currentGrade: "",
    desiredGrade: "",
    studentPhoto: null,
    aadharCard: null,
    parentName: "",
    parentEmail: "",
    phone: "",
    address: "",
    howHeard: "",
    message: "",
    termsAgreed: false,
  });
  const { theme, setTheme } = useTheme();

  const handleInputChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSelectChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
    // Reset form or show success message
    setFormData({
      studentName: "",
      dateOfBirth: "",
      gender: "",
      currentSchool: "",
      currentGrade: "",
      desiredGrade: "",
      studentPhoto: null,
      aadharCard: null,
      parentName: "",
      parentEmail: "",
      phone: "",
      address: "",
      howHeard: "",
      message: "",
      termsAgreed: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified Navigation for Admission Page */}
      <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-md shadow-lg py-4 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = "/"}>
             <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={schoolLogo}
                alt="Bintul-Huda Logo"
                className="w-full h-full object-contain"
              />
            </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-foreground">Bintul-Huda</span>
                <span className="text-xs text-muted-foreground">Memorial English School</span>
              </div>
             
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:hidden" />
              <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Admission Content */}
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 py-10 md:px-6">
          {/* Hero-like Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Admission Inquiry
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of excellence. Complete the form below to begin your child's journey with us. 
              Our admissions team will contact you within 24 hours.
            </p>
          </div>

          {/* Required Documents Note */}
          <div className="mb-8 p-4 bg-primary/5 border border-primary/10 rounded-lg">
            <div className="flex items-start space-x-3">
              <File className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-1">Required Documents</p>
                <p className="text-sm text-muted-foreground">
                  Please prepare: Birth Certificate, Previous School Records, Immunization Records, and 2 Passport Photos. 
                  You'll be prompted to upload them after submission.
                </p>
              </div>
            </div>
          </div>

          {/* Admission Form */}
          <Card className="max-w-4xl mx-auto shadow-xl border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center">
                <Calendar className="mr-2 h-6 w-6" />
                Application Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Information Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Student Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="studentName" className="text-foreground font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="studentName"
                          type="text"
                          placeholder="Enter full name"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-foreground font-medium">
                        Date of Birth <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-foreground font-medium">
                        Gender <span className="text-destructive">*</span>
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("gender", value)} value={formData.gender}>
                        <SelectTrigger className="bg-background border-border focus:border-primary focus:ring-primary/20">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentGrade" className="text-foreground font-medium">
                        Current Grade <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="currentGrade"
                          type="text"
                          placeholder="e.g., Grade 4"
                          value={formData.currentGrade}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currentSchool" className="text-foreground font-medium">
                        Current School
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="currentSchool"
                          type="text"
                          placeholder="Name of current school"
                          value={formData.currentSchool}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <Label htmlFor="desiredGrade" className="text-foreground font-medium">
                      Desired Grade Level <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="desiredGrade"
                        type="text"
                        placeholder="e.g., Grade 5"
                        value={formData.desiredGrade}
                        onChange={handleInputChange}
                        className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentPhoto" className="text-foreground font-medium">
                        Passport Size Photo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="studentPhoto"
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aadharCard" className="text-foreground font-medium">
                        Aadhar Card Photo <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="aadharCard"
                        type="file"
                        accept="image/*"
                        onChange={handleInputChange}
                        className="bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Parent/Guardian Information Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Parent/Guardian Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-foreground font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="parentName"
                          type="text"
                          placeholder="Enter full name"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentEmail" className="text-foreground font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="parentEmail"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.parentEmail}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-foreground font-medium">
                        Residential Address <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="address"
                          type="text"
                          placeholder="Street, City, State, ZIP"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="pl-10 bg-background border-border focus:border-primary focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    Additional Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="howHeard" className="text-foreground font-medium">
                        How did you hear about us?
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("howHeard", value)} value={formData.howHeard}>
                        <SelectTrigger className="bg-background border-border focus:border-primary focus:ring-primary/20">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="advertisement">Advertisement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Additional Message or Notes
                      </Label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          placeholder="Any questions, special needs, or additional notes?"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="bg-background border-border focus:border-primary focus:ring-primary/20 pr-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-center space-x-2 pt-4">
                  <Checkbox
                    id="termsAgreed"
                    checked={formData.termsAgreed}
                    onCheckedChange={(checked) => setFormData({ ...formData, termsAgreed: true === checked })}
                    className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="termsAgreed" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a> and <a href="#" className="text-primary hover:underline">privacy policy</a> <span className="text-destructive">*</span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  disabled={!formData.termsAgreed}
                >
                  Submit Application
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer Note */}
          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">
              Need help? Contact our admissions office at <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-8900</a> or <a href="mailto:admissions@bintulhuda.edu" className="text-primary hover:underline">admissions@bintulhuda.edu</a>.
            </p>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Admission;