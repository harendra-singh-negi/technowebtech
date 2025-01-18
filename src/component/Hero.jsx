import { Award, Briefcase, ChartSpline, Settings, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
const imagesName = ["avatar-1.webp", "avatar-2.webp", "avatar-3.webp", "avatar-4.webp", "avatar-5.webp"];
const stats = [
  { icon: Trophy, title: '7+ Years of Excellence', description: 'Delivering innovative solutions with expertise and dedication.' },
  { icon: Briefcase, title: '400+ Projects Delivered', description: 'Trusted by businesses worldwide to turn ideas into reality.' },
  { icon: ChartSpline, title: '100+ Loyal Clients', description: 'Building long-term partnerships with satisfied customers.' },
  { icon: Award, title: '24/7 Customer Support', description: 'Providing round-the-clock assistance to ensure client success.' },
]
export default function Hero() {
  return (
    <Element name="home" className="element">
      <section id="hero" className="hero section pt-32 pb-0 bg-gradient-to-br from-blue-50 to-white overflow-hidden px-10">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                <div className="company-badge mb-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full">
                  <div className="animate-pulse">
                    <Settings className="text-base mr-2" />
                  </div>

                  Focus on Your Business, We Handle the Rest
                </div>

                <h1 className="lg:text-5xl font-bold text-8xl mb-6">
                  Building Digital Excellence, <br />
                  <span className="text-blue-600">Transforming Ideas into Reality</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8">
                  Experience the perfect blend of creativity and innovation with our expert team, <br />
                  delivering premium solutions tailored to your success.
                </p>

                <div className="hero-buttons">
                  <Link href="#about" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 inline-block">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="hero-image relative" data-aos="zoom-out" data-aos-delay="300">
                <img
                  src="assets/img/illustration-1.webp"
                  alt="Hero Image"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />

                <div className="w-1/2 customers-badge absolute bottom-4 right-10 bg-white p-4 rounded-lg shadow-md  animate-slow-bounce " >
                  <div className="customer-avatars flex -space-x-2 mb-2 ">
                    {imagesName.map((img, i) => (
                      <img
                        key={`img-${i}`}
                        src={`assets/img/${img}`}
                        alt={`Customer ${i}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white text-sm font-bold">12+</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">12,000+ lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="500">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item bg-white p-6 rounded-lg shadow-md">
                <div className="stat-icon mb-4 w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
                  <stat.icon className={`bi  text-2xl`} />
                </div>
                <div className="stat-content">
                  <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}