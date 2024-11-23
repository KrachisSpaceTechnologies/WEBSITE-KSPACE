export default function About() {
  return (
    <div id="about" className="bg-gray-900 py-20">
      <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="lg:grid lg:grid-cols-13 lg:gap-16 items-center">
          <div className="relative">
            
          <video 
  src="src/tech2.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="some-css-class"
>
  Your browser does not support the video tag.
</video>

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-xl" />
          </div>

          <div className="mt-10 lg:mt-0 text-white">
            <h2 className="text-4xl font-bold mb-6">About Krachi's Space Technologies .Inc</h2>
            <p className="text-gray-300 mb-6">
            At Krachi's Space Technologies, we're dedicated to pushing the boundaries of innovation and technology. <p></p>Our team combines expertise and creativity to deliver groundbreaking solutions in software, hardware, and cutting-edge product development.At Krachi's Space Technologies, we are driven by a passion for developing exceptional software and hardware solutions using cutting-edge technology. Over the years, we have established ourselves as a trusted and scalable company, delivering innovative and reliable products. Our expertise spans diverse industries, including Education, Real Estate, Agriculture, Fashion, and more.

<p></p>Our commitment to excellence is reflected in the innovative, scalable solutions we provide, blending software development with hardware innovation. By leveraging advanced engineering processes and deploying products on cloud computing servers, we ensure speed, accessibility, and top-tier performance. At Krachi’s, we don’t just build technology—we shape the future.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">15+</h3>
                <p className="text-gray-400">Ongoinging R&D</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">50+</h3>
                <p className="text-gray-400">Successful Missions</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">20+</h3>
                <p className="text-gray-400">Global Partners</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">24/7</h3>
                <p className="text-gray-400">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}