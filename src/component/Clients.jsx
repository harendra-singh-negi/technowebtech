import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const clients = [
    { name: 'Client 1', logo: 'assets/img/clients/client-1.png' },
    { name: 'Client 2', logo: 'assets/img/clients/client-2.png' },
    { name: 'Client 3', logo: 'assets/img/clients/client-3.png' },
    { name: 'Client 4', logo: 'assets/img/clients/client-4.png' },
    { name: 'Client 5', logo: 'assets/img/clients/client-5.png' },
    { name: 'Client 6', logo: 'assets/img/clients/client-6.png' },
    { name: 'Client 7', logo: 'assets/img/clients/client-7.png' },
    { name: 'Client 8', logo: 'assets/img/clients/client-8.png' },
    { name: 'Client 1', logo: 'assets/img/clients/client-1.png' },
    { name: 'Client 2', logo: 'assets/img/clients/client-2.png' },
    { name: 'Client 3', logo: 'assets/img/clients/client-3.png' },
    { name: 'Client 4', logo: 'assets/img/clients/client-4.png' },
    { name: 'Client 5', logo: 'assets/img/clients/client-5.png' },
    { name: 'Client 6', logo: 'assets/img/clients/client-6.png' },
    { name: 'Client 7', logo: 'assets/img/clients/client-7.png' },
    { name: 'Client 8', logo: 'assets/img/clients/client-8.png' },
  ]

  const slidesPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 6,
  }

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return slidesPerView.mobile
      if (window.innerWidth < 1024) return slidesPerView.tablet
      return slidesPerView.desktop
    }
    return slidesPerView.desktop
  }

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % (clients.length - getVisibleSlides() + 1))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === 0 ? clients.length - getVisibleSlides() : prev - 1))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="clients" className="clients section py-20 bg-gray-50 px-10">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Our Trusted Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to have partnered with these industry leaders to deliver exceptional IT and digital solutions.
          </p>
        </div>

        <div className="relative" data-aos="fade-up">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / getVisibleSlides())}%)`,
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-1/2 sm:w-1/3 lg:w-1/6 px-4"
                  style={{ transition: 'opacity 0.3s ease-in-out' }}
                >
                  <div className="p-2 cursor-pointer rounded-lg shadow-sm flex justify-center items-center">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="w-[150px] h-[40px] object-contain mx-auto filter grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                </div> 
              ))}

            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}