// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Booklet from './Pages/Booklet';
import FAQs from './Pages/FAQs';
import Gallery from './Pages/Gallery';
// Import interview pages
import Urdu from "./pages/interview/Urdu";
import English from "./pages/interview/English";
import Math from "./pages/interview/Math";
import ComputerScience from "./pages/interview/ComputerScience";
// Import Gernal knowledge
import GKEnglish from "./Pages/General-Knowledge/GKEnglish";
import GKUrdu from './Pages/General-Knowledge/GKUrdu';
import RegistrationSlip from './Pages/RegistrationSlip';
import Result from './Pages/Result';
import PNRSCS from './Pages/PNRSCS';
import Footer from './Components/Footer';
import RegistrationForm from "./Pages/RegistrationForm";
import IPASForm from './Pages/IPASForm';
import FaqAccordion from './Components/FaqAccordion'; 
import Faqs from './Components/faqs';
import GdmFaqList from './Components/GdmFaqList';
import SailorFAQs from './Components/SailorFAQs';
import CiviliansFAQs from './Components/CiviliansFAQs';
import Karachi from "./Pages/Karachi";
import Lahore from "./Pages/Lahore";
import Abbottabad from "./Pages/Abbottabad";
import Multan from "./Pages/Multan";
import Dikhan from "./Pages/Dikhan";
import Faisalabad from "./Pages/Faisalabad";
import Gwadar from "./Pages/Gwadar";
import Peshawar from "./Pages/Peshawar";












export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booklet" element={<Booklet />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/matric/urdu" element={<Urdu />} />
        <Route path="/matric/english" element={<English />} />
        <Route path="/matric/maths" element={<Math />} />
        <Route path="/matric/computer-science" element={<ComputerScience />} />
        <Route path="/interview/gk-english" element={<GKEnglish />} />
        <Route path="/interview/gk-urdu" element={<GKUrdu />} />
        <Route path="/pnrscs" element={<PNRSCS />} />
        <Route path="/civilian/slip" element={<RegistrationSlip />} /> {/* ✅ UPDATED */}
        <Route path="/result" element={<Result />} />
        <Route path="/pnrscs" element={<PNRSCS />} />
        <Route path="/civilian/register" element={<RegistrationForm />} />
        <Route path="/civilian/results" element={<Result/>} />
        <Route path="/marine/slip" element={<RegistrationSlip />} /> 
        <Route path="/marine/results" element={<Result/>} />
        <Route path="/mcadet/slip" element={<RegistrationSlip />} /> 
        <Route path="/mcadet/results" element={<Result/>} />
        <Route path="/pncadet/slip" element={<RegistrationSlip />} /> 
        <Route path="/pncadet/results" element={<Result/>} />
        <Route path="/sailor/slip" element={<RegistrationSlip />} /> 
        <Route path="/sailor/results" element={<Result/>} />
        <Route path="/ssc/slip" element={<RegistrationSlip />} /> 
        <Route path="/ssc/results" element={<Result/>} />
        <Route path="/mcadet/ipas" element={<IPASForm/>} />
        <Route path="/civilian/ipas" element={<IPASForm/>} />
        <Route path="/pn-cadet-faqs" element={<FaqAccordion />} />
       <Route path="/reset-password" element={<Faqs/>} />
       <Route path="/m-cadet" element={<GdmFaqList/>} />
       <Route path="/shipping-status" element={<SailorFAQs/>} />
       <Route path="/contact-support" element={<CiviliansFAQs/>} />
      <Route path="/karachi" element={<Karachi />} />
      <Route path="/lahore" element={<Lahore />} />
      <Route path="/abbottabad" element={<Abbottabad />} />
      <Route path="/multan" element={<Multan />} />
      <Route path="/dikhan" element={<Dikhan />} />
      <Route path="/faisalabad" element={<Faisalabad />} />
      <Route path="/gwadar" element={<Gwadar />} />
      <Route path="/peshawar" element={<Peshawar />} />
      </Routes>
      <Footer />
    </>
  );
}
