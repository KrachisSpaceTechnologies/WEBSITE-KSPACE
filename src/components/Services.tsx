import { Rocket, Satellite, Globe, Cpu, Database, Shield } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: "Research & Development",
    description: "Our Research and Development team is dedicated to turning ideas into reality. We focus on creating innovative solutions, designing prototypes, and delivering advanced products. From hardware innovation to AI applications, we drive progress to meet the needs of businesses and industries"
  },
  {
    icon: Satellite,
    title: "Automation & Optimization",
    description: "Simplifying processes and boosting efficiency through smart automation and optimization. We design solutions that streamline operations, reduce costs, and enhance productivity for businesses and industries."
  },
  {
    icon: Globe,
    title: "AI Agents",
    description: "Creating intelligent AI agents to automate tasks, enhance decision-making, and deliver smarter solutions for businesses and everyday use."
  },
  {
    icon: Cpu,
    title: "Custom Software & Hardware Development",
    description: "Building tailored software and hardware solutions to meet unique business needs, combining innovation with functionality for seamless performance."
  },
  {
    icon: Database,
    title: "Industrial& Commercial Technology Solutions",
    description: "Delivering advanced technology solutions tailored for industrial and commercial needs, optimizing operations and driving innovation across sectors."
  },
  {
    icon: Shield,
    title: "CloudBased & Lab Solution",
    description: "Providing secure cloud-based solutions and cutting-edge lab technologies to streamline operations, enhance collaboration, and drive innovation."
    
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to meet the evolving needs of the industry Empowering your vision with Tailored Tech Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900 hover:to-blue-800 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}