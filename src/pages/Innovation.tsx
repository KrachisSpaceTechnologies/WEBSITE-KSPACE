import { motion } from "framer-motion";

export default function Innovation() {
  const projects = [
    {
      title: "Quantum Communication Satellites",
      description: "Developing secure, quantum-encrypted satellite communications.",
      icon: "Q",
      color: "bg-blue-500",
    },
    {
      title: "AI-Powered Space Debris Tracking",
      description: "Advanced systems for monitoring and avoiding space debris.",
      icon: "A",
      color: "bg-purple-500",
    },
    {
      title: "Green Propulsion Technology",
      description: "Environmentally friendly propulsion systems for satellites.",
      icon: "G",
      color: "bg-green-500",
    },
  ];

  const patents = [
    { year: "2024", title: "Advanced Satellite Propulsion System" },
    { year: "2023", title: "Quantum Communication Protocol" },
    { year: "2023", title: "Space Debris Detection Algorithm" },
  ];

  return (
    <div className="pt-20 bg-gradient-to-t from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4"
          >
            Innovation Hub 🚀
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Exploring the frontiers of space technology through groundbreaking research and development.
          </p>
        </div>

        {/* Interactive Video Section */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-12">
          <motion.video
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            src="src/vdd.mp4"
            autoPlay // Enables autoplay
    loop // Ensures the video plays continuously
            className="w-full h-[400px] object-cover"
          ></motion.video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-2 rounded-lg text-white font-semibold text-sm">
             Pioneering Innovation and technology
          </div>
        </div>

        {/* Current Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gray-900/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div
                className={`w-12 h-12 ${project.color} rounded-full flex items-center justify-center text-white font-bold mb-6`}
              >
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Patents & Publications Section */}
        <div className="bg-gray-900/80 rounded-xl p-8 shadow-lg backdrop-blur-md mb-16">
          <h3 className="text-2xl font-bold text-white mb-6">Patents & Publications</h3>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {patents.map((patent, index) => (
              <li
                key={index}
                className="text-lg text-gray-300 hover:bg-gray-800 px-4 py-2 rounded-lg transition duration-300"
              >
                <span className="text-blue-400 font-semibold">{patent.year}</span> - {patent.title}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Fun Interactive Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Want to Explore More? ✨
          </h3>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg cursor-pointer"
          >
            Discover More Innovations →
          </motion.div>
        </div>
      </div>
    </div>
  );
}
