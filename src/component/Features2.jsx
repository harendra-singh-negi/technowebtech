import { Chrome, CodeSquare, Eye, Feather, Laptop, Phone } from "lucide-react";

export default function Features2() {
  const features = [
    {
      "icon": Laptop,
      "title": "Innovative Thinking",
      "description": "Crafting solutions that stand out."
    },
    {
      "icon": Feather,
      "title": "Tailored Solutions",
      "description": "Designed specifically for your business needs."
    },
    {
      "icon": Eye,
      "title": "Proven Expertise",
      "description": "Years of delivering exceptional results."
    },
    {
      "icon": CodeSquare,
      "title": "Business-Focused",
      "description": "Enabling you to focus on growth, not IT."
    },
    {
      "icon": Phone,
      "title": "Latest Technologies",
      "description": "Adopting cutting-edge tools and trends."
    },
    {
      "icon": Chrome,
      "title": "Comprehensive Support",
      "description": "From planning to maintenance, we've got you covered."
    }
  ]


  return (
    <section id="features2" className="features2 section py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our unique approach combines expertise, innovation, and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="feature-item flex items-center gap-4 flex-row-reverse" data-aos="fade-right" data-aos-delay={150 + index * 50}>
                  <div className="icon bg-blue-100 rounded-full p-4">
                    <feature.icon size={30} className="text-blue-600" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto px-4 mb-12 lg:mb-0 text-center" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative inline-block">
              <img
                src="assets/img/phone-app-screen.webp"
                alt="Features Overview"
                width={300}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-4">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(3).map((feature, index) => (
                <div key={index} className="feature-item flex items-center gap-4" data-aos="fade-left" data-aos-delay={150 + index * 50}>
                  <div className="icon bg-blue-100 rounded-full p-4">
                    <feature.icon size={30} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
