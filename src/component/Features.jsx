import { CheckCheck } from "lucide-react"
import { useState } from "react"
import { Element } from "react-scroll"

export default function Features() {
    const [activeTab, setActiveTab] = useState('features-tab-1')

    const tabs = [
        { id: 'features-tab-1', title: 'Managed IT Services' },
        { id: 'features-tab-2', title: 'IT Consultancy' },
        { id: 'features-tab-3', title: 'Custom Software Development' },
    ]

    const tabContent = {
        'features-tab-1': {
            title: 'Reliable IT Management',
            description: 'Experience seamless operations with proactive IT management. Our services are tailored to optimize your business processes and ensure smooth functionality.',
            points: [
                'Comprehensive monitoring 24/7 for system reliability.',
                'Enhanced IT infrastructure security to minimize risks.',
                'Proactive solutions to reduce downtime and boost productivity.',
            ],
            image: 'assets/img/features-illustration-1.webp',
        },
        'features-tab-2': {
            title: 'Expert IT Guidance',
            description: 'Receive expert IT advice to help you make informed decisions for your business. From system optimization to technology integration, we guide you in the right direction.',
            points: [
                'Scalable solutions tailored to your business needs',
                'Guidance for technology upgrades and system integrations.',
                'Expert support for decision-making and planning.',
            ],
            image: 'assets/img/features-illustration-2.webp',
        },
        'features-tab-3': {
            title: 'Tailored Software Solutions',
            description: 'We design and develop custom software solutions to fit your business needs, improving efficiency and automating processes.',
            points: [
                'Custom software designed to streamline operations.',
                'End-to-end development, from idea to deployment.',
                'Scalable solutions that grow with your business.',
            ],
            image: 'assets/img/features-illustration-3.webp',
        },
    }

    return (
        <Element name="features">
            <section id="features" className="features section py-20 px-10">
                <div className="container mx-auto px-4">
                    <div className="section-title text-center mb-16" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-4">Features</h2>
                        <p className="text-gray-600">Explore our feature-packed services designed to address all your IT and web needs.</p>
                    </div>

                    <div className="flex justify-center mb-12">
                        <ul className="nav nav-tabs flex space-x-4 bg-gray-100 rounded-full p-2" data-aos="fade-up" data-aos-delay="100">
                            {tabs.map((tab) => (
                                <li key={tab.id} className="nav-item">
                                    <button
                                        className={`nav-link px-6 py-2 rounded-full transition-colors ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'
                                            }`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <h4 className="text-sm font-medium">{tab.title}</h4>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
                        {Object.entries(tabContent).map(([id, content]) => (
                            <div key={id} className={`tab-pane ${activeTab === id ? 'block' : 'hidden'}`}>
                                <div className="flex flex-wrap items-center">
                                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                                        <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                                        <p className="text-gray-600 mb-6">{content.description}</p>
                                        <ul className="space-y-2">
                                            {content.points.map((point, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCheck data-aos="fade-up" data-aos-delay={`${index * 200}`} className="text-blue-500 mr-2 mt-1"></CheckCheck>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-1/2">
                                        <img
                                            data-aos="fade-up" data-aos-delay={`200}`}
                                            src={content.image || "/placeholder.svg"}
                                            alt={content.title}
                                            className="rounded-lg shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    )
}