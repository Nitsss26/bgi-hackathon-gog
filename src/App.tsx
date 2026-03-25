import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundElements } from './components/BackgroundElements';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ThemesPage } from './pages/ThemesPage';
import { GuidelinesPage } from './pages/GuidelinesPage';
import { VenuesPage } from './pages/VenuesPage';
import { RewardsPage } from './pages/RewardsPage';
import { LegalPage } from './pages/LegalPage';
import { RegisterPage } from './pages/RegisterPage';
import { SubmitPPTPage } from './pages/SubmitPPTPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white selection:bg-brand-secondary selection:text-white">
        <BackgroundElements />
        <Navbar />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/themes" element={<ThemesPage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
            <Route path="/venues" element={<VenuesPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/submit-ppt" element={<SubmitPPTPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
