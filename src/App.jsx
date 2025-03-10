import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Overview from "./components/Overview";
import Trust from "./components/Trust";
import ElitePerformance from "./components/ElitePerformance";
import ShippingCalculator from "./components/ShippingCalculator";
import NewsletterSubscription from "./components/Newsletter";
import TrustedPartners from "./components/TrustedPartner";
import Testimonials from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Pricing from "./Pages/Pricing";
import Terms from "./Pages/Terms"; 
import TrackParcel from "./Pages/Tracking";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./components/Footer";
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Services />
                  <Overview />
                  <Trust />
                  <ElitePerformance />
                  <ShippingCalculator />
                  <NewsletterSubscription />
                  <Testimonials />
                  <TrustedPartners />
                  <FAQ />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/tracking" element={<TrackParcel />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
