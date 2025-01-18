import { Award, CheckCircleIcon, ShieldCheck, Sunrise } from "lucide-react"

export default function FeaturesCards() {
    const features = [
      { icon: Award, title: 'IT Consultancy', description: 'Strategic advice to align IT with business goals.', color: 'orange' },
      { icon: CheckCircleIcon, title: 'Web Development', description: 'Scalable and secure digital solutions tailored to you.', color: 'blue' },
      { icon: Sunrise, title: 'Reliable Support', description: 'Always here to address your needs.', color: 'green' },
      { icon: ShieldCheck, title: 'Global Expertise', description: 'Serving businesses from diverse industries worldwide.', color: 'red' },
    ]
  
    return (
      <section id="features-cards" className="features-cards section py-20 bg-gray-50 px-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`feature-box p-6 bg-white rounded-lg shadow-md  ${feature.color === 'orange' ? 'text-yellow-500 bg-yellow-100' : 
                                                                  feature.color === 'blue' ? 'text-blue-500 bg-blue-200' : 
                                                                  feature.color === 'green' ? 'text-green-500 bg-green-100' : 
                                                                  'text-red-500 bg-red-100'}`} data-aos="zoom-in" data-aos-delay={100 * (index + 1)} >
                <feature.icon size={60} className={`mb-4`}/>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  