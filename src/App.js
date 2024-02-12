import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar.jsx";
import Footer from "./Components/Common/Footer.jsx";
import AboutUs from "./Components/Page/AboutUs.jsx";
import Blog from "./Components/Page/Blog.jsx";
import Contact from "./Components/Page/Contact.jsx";
import Event from "./Components/Page/Event.jsx";
import Gallery from "./Components/Page/Gallery.jsx";
import Resources from "./Components/Page/Resources.jsx";
import Home from "./Components/Page/Home.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/event" element={<Event />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
