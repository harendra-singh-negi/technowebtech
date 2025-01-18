import { useState } from "react";

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What types of businesses do you work with?",
            answer: "We work with businesses of all sizes across various industries, from startups to established enterprises, helping them streamline their IT operations and drive growth.",
        },
        {
            question: "How does managed IT services benefit my business?",
            answer: "Managed IT services ensure your systems run smoothly, reduce downtime, and enhance productivity.",
        },
        {
            question: "What platforms do you develop on?",
            answer: "We specialize in web, mobile, cloud, and custom software platforms.",
        },
        {
            question: "Do you offer post-launch support?",
            answer: "Yes, we provide ongoing maintenance and support for all our projects.",
        },
        {
            question: "Can you integrate your systems with our existing setup?",
            answer: "Yes, we ensure seamless integration with your current processes and platforms.",
        },
        {
            question: "Can you customize solutions for my business?",
            answer: "Absolutely! We tailor all our services to meet your unique business needs.",
        },
        {
            question: "How do you ensure project security?",
            answer: "We prioritize security by using advanced encryption, monitoring, and best practices.",
        },
    ];

    return (
        <section className="faq-9 faq section bg-light py-16 px-10" id="faq">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap ">
                    {/* Image Section with Text and SVG */}
                    <div className="lg:w-1/2 w-full p-2" data-aos="fade-up">
                        <h2 className="text-3xl font-semibold text-gray-900">Have a question? Check out the FAQ</h2>
                        <p className="text-gray-600 mt-4">
                            Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.
                        </p>

                        {/* SVG Arrow */}
                        <div className="faq-arrow mt-4 hidden lg:block" data-aos="fade-up" data-aos-delay="200">
                            <svg className="faq-arrow text-customBlue" width="200" height="211" viewBox="0 0 200 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full p-2" data-aos="fade-up" data-aos-delay="200">
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4 bg-white shadow-md" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                <button
                                    className={`flex justify-between items-center w-full p-4  rounded-lg  focus:outline-none ${activeIndex === index ? 'text-customBlue' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-lg font-semibold text-left">{faq.question}</span>
                                    <i className={`bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} text-blue-500`}></i>
                                </button>
                                {activeIndex === index && (
                                    <div className="p-4  rounded-b-lg ">
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
