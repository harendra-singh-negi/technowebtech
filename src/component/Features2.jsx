import { ChartBar, Cloud, Laptop, Phone, Settings, ShieldCheck } from "lucide-react";

export default function Features2() {
  const features = [
    { icon: Laptop, title: 'Custom Web Development', description: 'Tailored websites that perfectly align with your brand and business goals.' },
    { icon: Phone, title: 'Mobile App Development', description: 'Innovative mobile applications for iOS and Android platforms.' },
    { icon: Settings, title: 'IT Infrastructure Management', description: 'Comprehensive management and optimization of your IT systems.' },
    { icon: ShieldCheck, title: 'Cybersecurity Solutions', description: 'Robust security measures to protect your digital assets.' },
    { icon: Cloud, title: 'Cloud Services', description: 'Scalable cloud solutions for improved efficiency and accessibility.' },
    { icon: ChartBar, title: 'Data Analytics', description: 'Insightful data analysis to drive informed business decisions.' },
  ];

  return (
    <section id="features2" className="features2 section py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of IT and digital services designed to elevate your business in the digital landscape.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 gap-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="feature-item flex items-center gap-4 flex-row-reverse" data-aos="fade-up" data-aos-delay={150 + index * 50}>
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

          <div className="w-full lg:w-auto px-4 mb-12 lg:mb-0 text-center" data-aos="fade-up" data-aos-delay="200">
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
                <div key={index} className="feature-item flex items-center gap-4" data-aos="fade-up" data-aos-delay={150 + index * 50}>
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
