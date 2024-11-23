import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3"
        >
          <source src="https://videos.pexels.com/videos/earth-view-from-space-1851190" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Pioneering the Future of Technology and innovation.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Advancing humanity's reach into new technologies through innovative solutions and cutting-edge technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/solutions"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}