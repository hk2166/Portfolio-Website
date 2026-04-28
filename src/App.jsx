import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ScrollTop from "./components/ScrollTop";
import { Navbar } from "./components/Navbar";
import { SmoothScroll } from "./components/SmoothScroll";
import { ModeProvider } from "./context/ModeContext";
import { ModePicker } from "./components/ModePicker";
import "./App.css";

// Lazy load heavy components and other routes
const SplineBackground = React.lazy(() =>
  import("./components/SplineBackground").then((m) => ({
    default: m.SplineBackground,
  })),
);
const StarField = React.lazy(() =>
  import("./components/StarField").then((m) => ({ default: m.StarField })),
);
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
  return (
    <ModeProvider>
      <Router>
        <ModePicker />
        <Suspense fallback={null}>
          <SplineBackground />
        </Suspense>
        <SmoothScroll>
          <div className="min-h-screen bg-black text-white">
            <Suspense fallback={null}>
              <StarField />
            </Suspense>
            <Navbar />
            <ScrollTop />

            <main>
              <Suspense
                fallback={
                  <div className="flex h-screen items-center justify-center">
                    Loading...
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </SmoothScroll>
      </Router>
    </ModeProvider>
  );
}

export default App;
