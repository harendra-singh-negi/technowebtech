import Header from './../component/Header';
import FooterComponent from './../component/FooterComponent';
import Hero from '../component/Hero';
import About from './../component/About';
import Features from '../component/Features';
import FeaturesCards from './../component/FeaturesCards';
import Features2 from './../component/Features2';
import CallToAction from './../component/CallToAction';
import Clients from './../component/Clients';
import Services from './../component/Services';
import Faq from '../component/Faq';
import Contact from './../component/Contact';

export default function HomePage() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Features />
        <FeaturesCards />
        <Features2 />
        <CallToAction />
        <Clients />
        <Services />
        <Faq />
        <Contact />
      </main>
      <FooterComponent />
    </div>
  )
}
