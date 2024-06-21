import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';
import GalleryPage from './pages/GalleryPage';
import PhotoPage from './pages/PhotoPage';
import { Provider } from 'react-redux';
import { store } from './redux/index';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
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
      </div>
    </Router>
    </Provider>

  );
}

export default App;