import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

export default function FooterComponent() {
  return (
    <>
      <footer className="py-12 px-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2  mb-8 md:mb-0 px-6">
              <h3 className="text-3xl font-bold mb-4">Technowebtech</h3>
              <p className="mb-4">We are an IT services firm dedicated to delivering end-to-end
                solutions across various industries. Our expert team ensures
                seamless management of your IT operations, enabling you to
                focus on your core business. Trust us to handle the technology,
                so you can drive your business forward.</p>
              <p><strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com</p>
              <SocialLinks />
            </div>

            <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Home</Link></li>
                <li><Link href="#about" className="hover:text-blue-400 transition duration-300">About us</Link></li>
                <li><Link href="#services" className="hover:text-blue-400 transition duration-300">Services</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Terms of service</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Web Design</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Web Development</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Product Management</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Marketing</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition duration-300">Graphic Design</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center border-t ">
            <div className="copyright pt-1">
              &copy; Copyright <strong><span>Technowebtech</span></strong>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>


  )
}
const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-2">
      <Link href="#" className="p-2 rounded-full transition duration-300">
        <Twitter className="text-blue-500 hover:text-blue-600 w-6 h-6" />
      </Link>
      <Link href="#" className="p-2 rounded-full transition duration-300">
        <Facebook className="text-blue-600 hover:text-blue-700 w-6 h-6" />
      </Link>
      <Link href="#" className="p-2 rounded-full transition duration-300">
        <Instagram className="text-pink-500 hover:text-pink-600 w-6 h-6" />
      </Link>
      <Link href="#" className="p-2 rounded-full transition duration-300">
        <Linkedin className="text-blue-700 hover:text-blue-800 w-6 h-6" />
      </Link>
    </div>
  );
};