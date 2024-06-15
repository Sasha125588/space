import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/planets" element={<PlanetsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
