import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import { Navbar } from "./components/Navbar";
import { SmoothScroll } from "./components/SmoothScroll";
import { StarField } from "./components/StarField";
import { ModeProvider } from "./context/ModeContext";
import { ModePicker } from "./components/ModePicker";
import { SplineBackground } from "./components/SplineBackground";
import "./App.css";

function App() {
  return (
    <ModeProvider>
      <Router>
        <ModePicker />
        <SplineBackground />
        <SmoothScroll>
          <div className="min-h-screen bg-black text-white">
            <StarField />
            <Navbar />
            <ScrollTop />

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </SmoothScroll>
      </Router>
    </ModeProvider>
  );
}

export default App;
