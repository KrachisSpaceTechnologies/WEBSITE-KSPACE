
export default function Careers() {
  const positions = [
    {
      title: "Software Engineer",
      department: "We are looking for a skilled Software Engineer to design, develop, and maintain scalable software solutions",
      location: "Toronto, ON",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "As a Product Designer, you will create innovative and intuitive designs for our software and product-related applications, focusing on delivering exceptional user experiences",
      location: "Remote",
      type: "Contract"
    },
    {
      title: "Research Analyst",
      department: "Join our Research team to analyze critical data that drives our technology development",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="pt-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Help us shape the future of space technology. We're always looking for talented individuals to join our mission.
          </p><br></br>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Send your Resume here on hiring@krachispacetechnologies.com
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Innovation</h2>
            <p className="text-gray-400">Work on cutting-edge space technology and breakthrough solutions.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Growth</h2>
            <p className="text-gray-400">Continuous learning and development opportunities.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Impact</h2>
            <p className="text-gray-400">Make a real difference in space exploration and technology.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                  <p className="text-gray-400">{position.department} • {position.location}</p>
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  {position.type}
                </span>
              </div>
              <a
  href={`mailto:hiring@krachispacetechnologies.com?subject=Application for ${position.title}&body=Hi Team,%0D%0A%0D%0AI'm interested in the ${position.title} position. Please find my resume attached.%0D%0A%0D%0AThank you.`}
  className="mt-6  px-4 py-1 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
>
  Apply Now
</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}