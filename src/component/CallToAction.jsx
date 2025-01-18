import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section id="cta" className="px-20 ">
      <div className="rounded-3xl cta section py-20 bg-customBlue text-white relative overflow-hidden ">

        <div className="absolute top-10 left-10 bg-customBlue rounded-full w-20 h-20 opacity-20"></div>
        <div className="absolute bottom-10 right-10 bg-customBlue rounded-full w-32 h-32 opacity-20"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <svg width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="blue" />
            <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="2" fill="white" />
            </pattern>
            <rect width="200" height="200" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Us Today</h3>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get in touch with us for tailored IT solutions and expert support. Whether you need website development, IT consultancy, or managed IT services, our team is here to help you grow your business. Reach out to discuss how we can optimize your IT operations and help you achieve success.
          </p>
          <Link
            to="#contact"
            className="inline-block px-8 py-3 text-lg border border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>

  );
}
