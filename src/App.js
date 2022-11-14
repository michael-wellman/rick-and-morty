import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import CharactersPage from './pages/Characters';
import EpisodesPage from './pages/Episodes';
import LocationPage from './pages/Location';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<CharactersPage/>}/>
        <Route exact path="/episodes" element={<EpisodesPage/>}/>
        <Route exact path="/locations" element={<LocationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
