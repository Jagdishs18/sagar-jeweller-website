// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import HomePage from './components/HomePage';
// import AdminDashboard from './components/AdminDashboard';  // This path is correct now
// import AboutUs from './components/AboutUs';
// import Collections from './components/Collections';
// import ContactUs from './components/ContactUs';
// import TermsAndConditions from './components/TermsAndConditions';
// import PrivacyPolicy from './components/PrivacyPolicy';
// import RefundPolicy from './components/RefundPolicy';
// import DeliveryShippingPolicy from './components/DeliveryShippingPolicy';
// import CancellationReturnPolicy from './components/CancellationReturnPolicy';
// import Disclaimer from './components/Disclaimer';
// import SplashScreen from './components/SplashScreen';




// const theme = createTheme({
//   palette: {
//     primary: { main: '#d4af37' },
//     secondary: { main: '#1a1a1a' },
//   },
//   typography: {
//     fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutUs />} />
// <Route path="/about" element={<AboutUs />} />
// <Route path="/collections" element={<Collections />} />
// <Route path="/contact" element={<ContactUs />} />
// <Route path="/terms" element={<TermsAndConditions />} />
// <Route path="/privacy" element={<PrivacyPolicy />} />
// <Route path="/refund" element={<RefundPolicy />} />
// <Route path="/shipping" element={<DeliveryShippingPolicy />} />
// <Route path="/cancellation" element={<CancellationReturnPolicy />} />
// <Route path="/disclaimer" element={<Disclaimer />} />



//           <Route path="/admin" element={<AdminDashboard />} />
//         </Routes>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SplashScreen from './components/SplashScreen';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Collections from './components/Collections';
import ContactUs from './components/ContactUs';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Disclaimer from './components/Disclaimer';
import RefundPolicy from './components/RefundPolicy';
import DeliveryShippingPolicy from './components/DeliveryShippingPolicy';
import CancellationReturnPolicy from './components/CancellationReturnPolicy';

const theme = createTheme({
  palette: {
    primary: { main: '#d4af37' },
    secondary: { main: '#1a1a1a' },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show splash screen on every route change
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/refund" element={<RefundPolicy />} />
      <Route path="/shipping" element={<DeliveryShippingPolicy />} />
      <Route path="/cancellation" element={<CancellationReturnPolicy />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;