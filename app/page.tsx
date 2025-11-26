import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ color: '#606060' }}>
            Purity in <span style={{ color: '#fcee21' }}>Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of Robotics Automation, Special Purpose Machines, IoT Solutions & Vision Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-[#fcee21] hover:bg-[#e0d51e] font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ color: '#606060' }}
            >
              EXPLORE PRODUCTS
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-[#606060] hover:bg-[#606060] hover:text-white font-semibold transition-all duration-300"
              style={{ color: '#606060' }}
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#606060' }}>
            Our <span style={{ color: '#fcee21' }}>Solutions</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive automation solutions tailored to your industry needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/solutions/robotic-automations" className="group">
              <div className="p-8 border border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#606060' }}>
                  Robotic Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced robotic solutions for pick and place, machine tending, assembly, welding, and more.
                </p>
                <span className="font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/solutions/special-purpose-machines" className="group">
              <div className="p-8 border border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#606060' }}>
                  Special Purpose Machines
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed machinery solutions to meet your unique production requirements.
                </p>
                <span className="font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/solutions/vision-inspection-systems" className="group">
              <div className="p-8 border border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#606060' }}>
                  Vision Inspection
                </h3>
                <p className="text-gray-600 mb-4">
                  High-precision vision systems for quality control and inspection automation.
                </p>
                <span className="font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/solutions/iiot-traceability" className="group">
              <div className="p-8 border border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#606060' }}>
                  IIoT & Traceability
                </h3>
                <p className="text-gray-600 mb-4">
                  Smart production control systems for enhanced safety and reliability.
                </p>
                <span className="font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/solutions/factory-automation-systems" className="group">
              <div className="p-8 border border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#606060' }}>
                  Factory Automation
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete factory automation systems including auxiliary equipment and conveying solutions.
                </p>
                <span className="font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/products" className="group">
              <div className="p-8 border border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#606060' }}>
                  View All Products
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore our complete range of automation products and solutions.
                </p>
                <span className="font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                  View Products →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#606060' }}>
            Industries We <span style={{ color: '#fcee21' }}>Serve</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Delivering automation excellence across multiple sectors
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Plastic Process', 'Automotive', 'Die-casting', 'Food & Pharma', 'White Goods', 'Rubber Industries'].map((industry) => (
              <div key={industry} className="bg-white p-6 text-center hover:shadow-lg transition-shadow border border-gray-100 hover:border-[#fcee21]">
                <h4 className="font-semibold text-sm" style={{ color: '#606060' }}>
                  {industry}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#606060' }}>
            Trusted <span style={{ color: '#fcee21' }}>Partners</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We collaborate with industry-leading brands
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {['Festo', 'Mitsubishi', 'Yaskawa', 'Epson', 'Baumer', 'Keyence', 'Zimmer', 'Gimatics', 'SMC', 'Delta'].map((partner) => (
              <div key={partner} className="flex items-center justify-center p-6 border border-gray-100 hover:border-[#fcee21] transition-colors">
                <span className="text-lg font-semibold" style={{ color: '#606060' }}>
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#606060]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to <span style={{ color: '#fcee21' }}>Automate</span> Your Production?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our automation solutions can transform your manufacturing process
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#fcee21] hover:bg-[#e0d51e] font-semibold transition-all duration-300 transform hover:scale-105"
            style={{ color: '#606060' }}
          >
            CONTACT US TODAY
          </Link>
        </div>
      </section>
    </main>
  );
}
