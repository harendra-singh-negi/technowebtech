import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the scroll-to-top button
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 bg-customBlue text-white p-3 rounded-full shadow-lg ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } transition-opacity duration-300 ease-in-out`}
            id="scroll-top"
        >
            <ArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
