import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 text-center" style={{ color: '#606060' }}>
          Our <span style={{ color: '#fcee21' }}>Products</span>
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore our comprehensive range of automation products designed to enhance your production efficiency
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link href="/products/cobots" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Cobots</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Collaborative robots designed for safe human-robot interaction, perfect for flexible automation in various applications.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Learn More →
              </span>
            </div>
          </Link>

          <Link href="/products/imm-traverse-robot" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>IMM Traverse Robot</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Specialized robots for injection molding machines, optimizing part removal and placement operations.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Learn More →
              </span>
            </div>
          </Link>

          <Link href="/products/iml" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>IML Systems</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In-Mold Labeling solutions for seamless integration of labels during the molding process.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Learn More →
              </span>
            </div>
          </Link>

          <Link href="/products/eoat-conveyors" className="group">
            <div className="p-10 border-2 border-gray-200 hover:border-[#fcee21] transition-all duration-300 hover:shadow-xl">
              <div className="w-20 h-20 bg-[#fcee21] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10" style={{ color: '#606060' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>EOAT & Conveyors</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                End-of-Arm Tooling and conveyor systems for efficient material handling and production flow.
              </p>
              <span className="text-lg font-semibold group-hover:text-[#fcee21] transition-colors" style={{ color: '#606060' }}>
                Learn More →
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center bg-gray-50 p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#606060' }}>Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">
            Our team can design and manufacture custom automation products tailored to your specific requirements
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#fcee21] hover:bg-[#e0d51e] font-semibold transition-all duration-300"
            style={{ color: '#606060' }}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </main>
  );
}
