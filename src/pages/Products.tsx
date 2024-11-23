import { Rocket, Satellite, Shield } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

export default function Products() {
  const navigate = useNavigate(); // Initialize navigation

  const products = [
    // Software Applications
    {
      icon: Rocket,
      name: "APP 1",
      description: "Next-generation rocket technology for reliable satellite",
      image: "src/passwords.jpg",
      category: "software",
    },
    {
      icon: Satellite,
      name: "APP 2",
      description: "Customizable satellite platform for diverse space applications.",
      image: "src/two-factor-authentication-app-2048px-8037.webp",
      category: "software",
    },
    {
      icon: Shield,
      name: "APP 3",
      description: "Robust cybersecurity solutions for satellite communications.",
      image: "src/Good-passwords-to-use.webp",
      category: "software",
    },
    {
      icon: Rocket,
      name: "APP 4",
      description: "Artificial intelligence tools for space data analysis.",
      image: "src/hero-image.webp",
      category: "software",
    },
    {
      icon: Satellite,
      name: "APP 5",
      description: "Software for monitoring satellite health and performance.",
      image: "src/unnamed.png",
      category: "software",
    },
    // General Products
    {
      icon: Rocket,
      name: "PRD 1",
      description: "Efficient and reusable rocket engine for cost-effective launches.",
      image: "src/pd1.jpeg",
      category: "products",
    },
    {
      icon: Shield,
      name: "PRD 2",
      description: "Advanced protection systems for space assets.",
      image: "src/pd2.jpeg",
      category: "products",
    },
    {
      icon: Satellite,
      name: "PRD 3",
      description: "High-performance communication arrays for satellites.",
      image: "src/pd3.jpeg",
      category: "products",
    },
    {
      icon: Rocket,
      name: "PRD 4",
      description: "Powerful launch vehicle for large payloads.",
      image: "src/pd4.jpeg",
      category: "products",
    },
    {
      icon: Shield,
      name: "PRD 5",
      description: "Stations designed for satellite refueling in orbit.",
      image: "src/pd5.jpeg",
      category: "products",
    },
  ];

  const softwareProducts = products.filter((product) => product.category === "software");
  const generalProducts = products.filter((product) => product.category === "products");

  const softwareRef = useRef<HTMLDivElement>(null);
  const generalRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1: Software Applications */}
        <h2 className="text-4xl font-bold text-white mb-8">
          Explore Our Software Applications
        </h2>
        <div className="relative mb-16">
          {/* Scroll Buttons */}
          <button
            onClick={() => scrollLeft(softwareRef)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={() => scrollRight(softwareRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
          >
            ❯
          </button>
          {/* Scrollable Container */}
          <div
            ref={softwareRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {softwareProducts.map((product, index) => (
              <div
                key={index}
                className="snap-start bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 w-80"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <product.icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  </div>
                  <p className="text-gray-400">{product.description}</p>
                  {/* Learn More Button */}
                  <button
  type="button"
  onClick={() => navigate("/BookDemo")}
  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>
  Learn More
</button>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: General Products */}
        <h2 className="text-4xl font-bold text-white mb-8">Explore Our Products</h2>
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scrollLeft(generalRef)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={() => scrollRight(generalRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full"
          >
            ❯
          </button>
          {/* Scrollable Container */}
          <div
            ref={generalRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {generalProducts.map((product, index) => (
              <div
                key={index}
                className="snap-start bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 w-80"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <product.icon className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  </div>
                  <p className="text-gray-400">{product.description}</p>
                  {/* Learn More Button */}
                  <button
                    onClick={() => navigate("/BookDemo")}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
