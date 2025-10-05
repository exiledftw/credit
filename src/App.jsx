import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LightRays from './components/LightRays/LightRays';
import Home from './pages/Home';
import Services from './pages/Services';
import Letters from './pages/Letters';

function App() {
  return (
    <Router>
      <div className="App">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={1}
          saturation={1}
          followMouse={false}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/letters" element={<Letters/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
