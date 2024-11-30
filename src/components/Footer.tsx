import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
            <img src="/src/background logo.png" alt="Your Logo" className="h-24 w-24" />
              <span className="text-xl font-bold">Krachi's Space Technologies</span>
            </div>
            <p className="text-gray-400">
              
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="About.tsx" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="Services.tsx" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="contact.tsx" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Research & Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Software & Hardware Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Automation & Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Industrial & Commercial Technology Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/krachi%E2%80%99s-space-technologies/about/?viewAsMember=true" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://x.com/Kspacetech" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com/krachispace.technologies/" className="text-gray-400 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Krachi's Space Technologies.Inc All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}