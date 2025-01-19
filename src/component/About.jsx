import { Check, Phone } from "lucide-react";
import { Element } from "react-scroll";

export default function About() {
  return (
    <Element name="about">
      <section id="about" className="about section py-20 bg-gray-50 px-10">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full xl:w-5/12" data-aos="fade-up" data-aos-delay="200">
              <span className="about-meta text-blue-600 font-semibold mb-2 block">MORE ABOUT US</span>
              <h2 className="font-heading text-heading font-bold text-2xl lg:text-3xl mb-6">Transforming Ideas into Digital Success</h2>
              <p className="about-description text-description mb-6">
                We are more than just web developers—we are your trusted IT partners. We specialize in delivering comprehensive IT solutions and creative digital services to help businesses achieve operational excellence. From managing your IT infrastructure to building engaging websites, we bring innovation, reliability, and success to your doorstep.
              </p>

              <div className="feature-list-wrapper grid grid-cols-2 gap-4 mb-6">
                {[
                  "Comprehensive IT and web solutions",
                  "Dedicated team with industry expertise",
                  "Advanced tools for optimized operations",
                  "Proactive support and monitoring",
                  "Tailored solutions for diverse industries",
                  "Driving digital transformation with cutting-edge technology"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="bg-blue-500 mr-2 w-6 h-6 p-1 rounded-s-md"></Check>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="info-wrapper flex justify-center items-center h-full">
                <div className="flex flex-col text-center md:flex-row items-center gap-4">
                  <div className="contact-info flex items-center bg-white p-4 rounded-lg shadow-md">
                    <Phone className="text-2xl text-blue-500 mr-4"></Phone>
                    <div>
                      <p className="text-sm text-gray-500">Whatsapp us anytime</p>
                      <p className="text-lg font-semibold">+91 9927703176</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="w-full xl:w-6/12 mt-12 xl:mt-0" data-aos="fade-up" data-aos-delay="300">
              <div className="image-wrapper relative">
                <div className="images relative" data-aos="zoom-out" data-aos-delay="400">
                  <img
                    src="assets/img/about-5.webp"
                    alt="Business Meeting"
                    width={600}
                    height={400}
                    className="main-image rounded-lg shadow-xl"
                  />
                  <img
                    src="assets/img/about-2.webp"
                    alt="Team Discussion"
                    width={300}
                    height={200}
                    className="small-image absolute top-1/4 -left-16 w-2/5 rounded-lg border-8 border-white shadow-lg"
                  />
                </div>
                <div
                  className="experience-badge absolute bottom-8 right-8 bg-blue-500 text-white p-6 rounded-lg shadow-lg animate-slow-bounce"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                >
                  <h3 className="text-4xl font-bold">
                    7+ <span className="text-xl">Years</span>
                  </h3>
                  <p className="text-sm mt-2">Of experience in digital services.</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}
