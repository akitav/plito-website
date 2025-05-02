import { Nav, HeroSection, PlitoFramework, Offerings, Footer, ContactUs } from './components';
import './index.css';

function App() {
  return (
    <div className='min-h-screen'>
      {/* Navigation */}
      <Nav />
      {/* Hero Section */}
      <HeroSection />
      {/* PLITO Framework Section */}
      <PlitoFramework />
      {/* Offerings Section */}
      <Offerings />
      {/* Contact Section */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
