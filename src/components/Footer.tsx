import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">BH</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Bintul-Huda</h3>
                <p className="text-xs opacity-80">Memorial English School</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering minds since 1985. A beacon of hope delivering quality English-medium 
              education to the community of Alipur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#programs" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Programs</a></li>
              <li><a href="#chairman" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Chairman's Message</a></li>
              <li><a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">Early Years (3-5 Years)</li>
              <li className="text-sm opacity-80">Primary School (6-10 Years)</li>
              <li className="text-sm opacity-80">Middle School (11-14 Years)</li>
              <li className="text-sm opacity-80">Extra-curricular Activities</li>
              <li className="text-sm opacity-80">Computer Education</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-80">
                  Alipur, Chikkaballapur District<br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm opacity-80">+91 XXXX XXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm opacity-80">info@bintulhuda.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © 2025 Bintul-Huda Memorial English School. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
