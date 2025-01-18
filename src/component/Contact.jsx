import { MailOpen, MapPin, PhoneCallIcon } from "lucide-react";
import { useState } from "react";
import { Element } from "react-scroll";
const contactData = {
  "title": "Contact Info",
  "description": "We’re here to help you achieve your goals. Reach out to us today!",
  "location": {
    "header": "Our Location",
    "address": "Dehradun",
    "state": "Uttarakhand, IN (248001)"
  },
  "whatsapp": {
    "header": "Whatsapp Number",
    "numbers": [
      "+91 9927703176",
      "+91 9557735224"
    ]
  },
  "email": {
    "header": "Email Address",
    "address": "technowebtech@gmail.com"
  }
}
const ContactInfo = () => {
  return (
    <div className="lg:w-1/3 w-full p-3" data-aos="fade-up" data-aos-delay="200">
      <div className="bg-customBlue text-white shadow-lg p-6 rounded-lg">
        <h3 className="text-2xl font-semibold">{contactData.title}</h3>
        <p className="mt-4">{contactData.description}</p>

        {/* Location */}
        <div className="mt-6 flex items-start" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mr-4">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold">{contactData.location.header}</h4>
            <p>{contactData.location.address}</p>
            <p>{contactData.location.state}</p>
          </div>
        </div>

        {/* Whatsapp Number */}
        <div className="mt-6 flex items-start" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mr-4">
            <PhoneCallIcon className="text-white w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold">{contactData.whatsapp.header}</h4>
            {contactData.whatsapp.numbers.map((number, index) => (
              <p key={index}>{number}</p>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="mt-6 flex items-start" data-aos="fade-up" data-aos-delay="500">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mr-4">
            <MailOpen className="text-white w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold">{contactData.email.header}</h4>
            <p>{contactData.email.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate a form submission (you can replace this with actual form submission logic)
    setTimeout(() => {
      setStatus("sent");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <Element name="contact">
      <section id="contact" className="contact section bg-light py-16 px-10">
        {/* Section Title */}
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-gray-900">Contact</h2>
          <p className=" mt-4">Have a question or need assistance? Reach out to us today!</p>
        </div>
        {/* End Section Title */}

        <div className="flex flex-wrap mt-8 justify-center" data-aos="fade-up" data-aos-delay="100">
          {/* Contact Info */}
          <ContactInfo />
          {/* Contact Form */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-bold">Get In Touch</h3>
              <p className=" mt-4">Fill out the form below, and our team will get back to you shortly to discuss your IT needs.</p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="flex gap-4">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control w-full p-4 bg-gray-100 rounded-md"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control w-full p-4 bg-gray-100 rounded-md"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-control w-full p-4 bg-gray-100 rounded-md"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="w-full">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="form-control w-full p-4 bg-gray-100 rounded-md"
                    placeholder="Message"
                    required
                  />
                </div>

                <div className="w-full text-center">
                  {status === "loading" && <div className="">Loading...</div>}
                  {status === "sent" && <div className="text-green-600">Your message has been sent. Thank you!</div>}
                  <button type="submit" className="btn px-6 py-3 bg-blue-500 text-white rounded-md">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
