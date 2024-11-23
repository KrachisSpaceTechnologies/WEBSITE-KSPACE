import { Globe, Database, Cpu, ShieldCheck, Satellite, Cloud, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Solutions() {
  const solutions = [
    {
      icon: Globe,
      title: "End-to-End Product Development ",
      description: "From ideation to final delivery, we design, prototype, and build innovative software and hardware solutions.",
      features: ["Low latency", "Global coverage", "High bandwidth"]
    },
    {
      icon: Database,
      title: "AI and Machine Learning Integration",
      description: "Developing intelligent systems for automation, optimization, and enhanced decision-making.",
      features: ["Real-time processing", "AI-powered insights", "Secure storage"]
    },
    {
      icon: Cpu,
      title: "Custom Software Solutions & Hardware Innovation",
      description: "Tailored applications to meet unique business needs across industries, Designing and engineering cutting-edge devices and physical products.",
      features: ["24/7 monitoring", "Automated operations", "Redundant systems"]
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Solutions",
      description: "State-of-the-art cybersecurity systems to protect your critical infrastructure.",
      features: ["End-to-end encryption", "Threat detection AI", "Secure communications"]
    },
    {
      icon: Satellite,
      title: "Collaborative Innovation",
      description: "Partnering with businesses of all sizes to transform ideas into impactful technologies.",
      features: ["Predictive maintenance", "Orbital tracking", "Fuel optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud-Integrated Systems",
      description: "Leverage cloud-based systems for scalability and reliability.",
      features: ["High availability", "Seamless integration", "Cost efficiency"]
    }
  ];

  const news = [
    {
      title: "Successful Launch of Orbital Fleet Management Software",
      date: "November 20, 2024",
      description: "Our latest fleet management software was successfully implemented on over 50 satellites globally, marking a new milestone in satellite operations.",
      link: "/news/successful-launch"
    },
    {
      title: "Krachi's Space Technologies Partners with Necessity Investment Group.",
      date: "November 15, 2024",
      description: "We are thrilled to announce a partnership with Necessity Investment Group to expand our global R&D to capture the African Continent.",
      link: "/news/global-sat-partnership"
    },
    {
      title: "Breakthrough in AI-Powered Space Analytics",
      date: "November 10, 2024",
      description: "Our AI-powered analytics platform now processes real-time data 30% faster, empowering space missions with actionable insights.",
      link: "/news/ai-space-analytics"
    }
  ];

  const faqs = [
    {
      question: "What industries do your solutions cater to?",
      answer: "Our solutions are designed to cater to various industries including telecommunications, defense, logistics, and space exploration."
    },
    {
      question: "How can I get a demo of your solutions?",
      answer: "You can book a demo directly through our products page, navigate to the read more section where our team will guide you through our offerings tailored to your needs."
    },
    {
      question: "Are your solutions customizable?",
      answer: "Yes, all of our solutions are highly customizable to meet the specific requirements of your business."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support and dedicated account managers to ensure smooth operations and quick resolutions."
    },
    {
      question: "How secure are your systems?",
      answer: "We employ state-of-the-art encryption, AI-driven threat detection, and other cybersecurity measures to ensure the highest level of security."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Solutions Section */}
        <h1 className="text-5xl font-bold text-white mb-12 text-center">Our Innovative Solutions</h1>
        <p className="text-lg text-gray-300 text-center mb-16">
          Transforming industries with cutting-edge technology, seamless integration, and unparalleled reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <solution.icon className="w-14 h-14 text-blue-400 mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">{solution.title}</h2>
              <p className="text-gray-400 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

{/* Recent News Section */}
<div className="mt-20">
  <h2 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide">
    Recent News
  </h2>
  <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
    Explore our latest milestones, innovations, and global partnerships driving the future of space technology.
  </p>
  <div className="space-y-12">
    {news.map((item, index) => (
      <div
        key={index}
        className={`flex flex-col lg:flex-row items-center ${
          index % 2 === 0 ? "" : "lg:flex-row-reverse"
        } gap-8`}
      >
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={`src/n1.jpg`}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform transform hover:scale-110 duration-300"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
          <p className="text-gray-400 text-sm mb-4">{item.date}</p>
          <p className="text-gray-300 mb-6">{item.description}</p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/krachispace.technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold text-lg hover:text-blue-500 transition-colors"
            >
              Instagram →
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/company/krachi%E2%80%99s-space-technologies/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold text-lg hover:text-blue-500 transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="https://x.com/Kspacetech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold text-lg hover:text-blue-500 transition-colors"
            >
              Twitter →
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <p className="text-gray-400 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
