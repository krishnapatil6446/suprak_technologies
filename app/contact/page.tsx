export default function ContactPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center" style={{ color: '#606060' }}>
            Contact <span style={{ color: '#fcee21' }}>Us</span>
          </h1>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Get in touch with us to discuss your automation needs
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#606060' }}>Our Locations</h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 hover:border-[#fcee21] transition-colors">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#606060' }}>Nashik Office</h3>
                  <p className="text-gray-600">
                    S.No 29 Nr Highschool<br />
                    Vilholi Shiwar, Vilholi<br />
                    Nashik 422010
                  </p>
                </div>
                <div className="p-6 border border-gray-200 hover:border-[#fcee21] transition-colors">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#606060' }}>Pune Office 1</h3>
                  <p className="text-gray-600">
                    Plot No 7, Ganesh Nagar<br />
                    Telco Road, MIDC Bhosari<br />
                    Pune 411026
                  </p>
                </div>
                <div className="p-6 border border-gray-200 hover:border-[#fcee21] transition-colors">
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#606060' }}>Pune Office 2</h3>
                  <p className="text-gray-600">
                    No.16 Highway Towers<br />
                    Kalbhornagar, Chinchwad<br />
                    Pune 411019
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#606060' }}>Contact Information</h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#606060' }}>Phone</h3>
                  <p className="text-gray-600 mb-2">
                    <a href="tel:02066301188" className="hover:text-[#fcee21] transition-colors">
                      020 66301188
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+919370252525" className="hover:text-[#fcee21] transition-colors">
                      +91 9370252525
                    </a>
                  </p>
                </div>
                <div className="p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#606060' }}>Email</h3>
                  <p className="text-gray-600 mb-2">
                    <a href="mailto:sales@supraktechnologies.com" className="hover:text-[#fcee21] transition-colors">
                      sales@supraktechnologies.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:info@supraktechnologies.com" className="hover:text-[#fcee21] transition-colors">
                      info@supraktechnologies.com
                    </a>
                  </p>
                </div>
                <div className="p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-3" style={{ color: '#606060' }}>Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#606060' }}>Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to learn how we can help automate your production processes
            </p>
            <a
              href="mailto:sales@supraktechnologies.com"
              className="inline-block px-8 py-4 bg-[#fcee21] hover:bg-[#e0d51e] font-semibold transition-all duration-300"
              style={{ color: '#606060' }}
            >
              SEND US AN EMAIL
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
