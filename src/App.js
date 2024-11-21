import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Thesis from './components/Project/Project_pages/thesis';
import Phyllo from './components/Project/Project_pages/phyllo';
import ArtRecognizer from './components/Project/Project_pages/artRecognizer';
import YuhansMap from './components/Artwork/Artwork_pages/yuhans_map';

import Homepage from './components/Homepage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        {/* ===Project Pages=== */}
        <Route path="/project/thesis" element={<Thesis />} />
        <Route path="/project/phyllo" element={<Phyllo />} />
        <Route path="/project/art_recognizer" element={<ArtRecognizer />} />

        {/* ===Artwork Pages=== */}
        <Route path="/artwork/yuhans_map" element={<YuhansMap />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
