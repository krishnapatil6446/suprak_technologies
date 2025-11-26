import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center" style={{ color: '#606060' }}>
          Our <span style={{ color: '#fcee21' }}>Solutions</span>
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Comprehensive automation solutions designed to transform your manufacturing processes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Link href="/solutions/robotic-automations" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Robotic Automations</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Complete robotic automation solutions including pick and place, injection molding, CNC operations, packaging, palletizing, quality inspection, assembly, polishing, machine tending, welding, gluing, and dispensing applications.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Explore Solution →
              </span>
            </div>
          </Link>

          <Link href="/solutions/special-purpose-machines" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Special Purpose Machines</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Custom-designed and engineered machinery solutions tailored to meet your unique production requirements and operational challenges across various manufacturing processes.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Explore Solution →
              </span>
            </div>
          </Link>

          <Link href="/solutions/vision-inspection-systems" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Vision Inspection Systems</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Advanced machine vision systems for automated quality control, defect detection, measurement, and inspection processes ensuring consistent product quality.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Explore Solution →
              </span>
            </div>
          </Link>

          <Link href="/solutions/iiot-traceability" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>IIoT & Traceability</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Smart production control systems utilizing Industrial Internet of Things for real-time tracking, monitoring, and traceability to enhance safety and production reliability.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Explore Solution →
              </span>
            </div>
          </Link>

          <Link href="/solutions/factory-automation-systems" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Factory Automation Systems</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive factory automation including auxiliary equipment for drying, conveying, blending, temperature control, and recycling with focus on energy and material efficiency.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Explore Solution →
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center bg-[#606060] text-white p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-300 mb-8">
            Our solutions are trusted across multiple sectors
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/10">Plastic Process</div>
            <div className="p-4 bg-white/10">Automotive</div>
            <div className="p-4 bg-white/10">Die-casting</div>
            <div className="p-4 bg-white/10">Food & Pharma</div>
            <div className="p-4 bg-white/10">White Goods</div>
            <div className="p-4 bg-white/10">Rubber Industries</div>
          </div>
        </div>
      </div>
    </main>
  );
}
