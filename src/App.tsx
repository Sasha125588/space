import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';
import GalleryPage from './pages/GalleryPage';
import PhotoPage from './pages/PhotoPage';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import PlanetPage from './pages/PlanetPage';
import Header from './components/header/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route path="/planets" element={<PlanetsPage />} />
        </Routes>
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
         <Routes>
          <Route path="/gallery/:title" element={<PhotoPage />} />
        </Routes>
        <Routes>
          <Route path="/planets/:title" element={<PlanetPage />} />
        </Routes>
      </div>
    </Router>
    </Provider>

  );
}

export default App;