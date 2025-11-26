export default function AboutPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center" style={{ color: '#606060' }}>
            About <span style={{ color: '#fcee21' }}>Suprak Technologies</span>
          </h1>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Purity in Technology</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Suprak Technologies is a leading provider of advanced automation solutions, specializing in robotics automation, special purpose machines, IoT & traceability, vision systems, and packaging solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a commitment to excellence and innovation, we deliver cutting-edge technology solutions that transform manufacturing processes across multiple industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#606060' }}>Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted partner in industrial automation, driving innovation and efficiency in manufacturing worldwide.
              </p>
            </div>
            <div className="p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#606060' }}>Our Mission</h3>
              <p className="text-gray-600">
                To deliver world-class automation solutions that enhance productivity, ensure quality, and create sustainable value for our clients.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#606060' }}>Core <span style={{ color: '#fcee21' }}>Competencies</span></h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#fcee21] mt-2 mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#606060' }}>Robotics Automation</h4>
                  <p className="text-gray-600">Comprehensive robotic solutions for pick and place, injection molding, CNC operations, packaging, quality inspection, assembly, and more.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#fcee21] mt-2 mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#606060' }}>Special Purpose Machines</h4>
                  <p className="text-gray-600">Custom-designed machinery tailored to specific production requirements and operational challenges.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#fcee21] mt-2 mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#606060' }}>IoT & Traceability</h4>
                  <p className="text-gray-600">Smart production control systems that track product direction and enhance safety and reliability.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#fcee21] mt-2 mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#606060' }}>Vision Inspection Systems</h4>
                  <p className="text-gray-600">Advanced vision systems for quality control and automated inspection processes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#fcee21] mt-2 mr-4"></div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" style={{ color: '#606060' }}>Auxiliary Equipment</h4>
                  <p className="text-gray-600">Energy-efficient solutions for drying, conveying, blending, temperature control, and recycling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
