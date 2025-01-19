import { ChartBar, Cloud, Laptop, Phone, Settings, ShieldCheck } from "lucide-react"
import { Element } from "react-scroll"

export default function Services() {
    const services = [
        { icon: Laptop, title: 'Web Development', description: 'Custom websites tailored to your business needs, from simple landing pages to complex web applications.' },
        { icon: Phone, title: 'Mobile App Development', description: 'Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android devices.' },
        { icon: Settings, title: 'IT Consulting', description: 'Expert advice on IT strategy, infrastructure optimization, and digital transformation to align technology with your business goals.' },
        { icon: ShieldCheck, title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your digital assets, including threat detection, prevention, and incident response.' },
        { icon: Cloud, title: 'Cloud Services', description: 'Scalable and flexible cloud solutions, including migration, management, and optimization of cloud infrastructure.' },
        { icon: ChartBar, title: 'Data Analytics', description: 'Advanced data analysis and visualization tools to help you make data-driven decisions and gain valuable insights.' },
    ]

    return (
        <Element name="services">
            <section id="services" className="services section py-20">
                <div className="container mx-auto px-4">
                    <div className="section-header text-center mb-16" data-aos="fade-up">
                        <h2 className="text-heading  text-3xl font-bold mb-4">Our Services</h2>
                        <p className="text-description max-w-2xl mx-auto">Explore our comprehensive range of IT and digital services designed to empower your business in the digital age.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="service-item p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                <div className="icon mb-4">
                                    <service.icon size={36} className={`text-4xl text-blue-500 hover:text-customBlue`} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    )
}

