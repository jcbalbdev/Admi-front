
import './App.css';
import MySideNav from './components/MySideNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Configuraciones from './pages/Configuracion';
import Catalogos from './pages/Catalogo';
import Analisis from './pages/Analisis';

function App() {
  return (
    <Router>
      <MySideNav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/configuracion' element={<Configuraciones/>}/>
        <Route path='/catalogo' element={<Catalogos/>}/>
        <Route path='/analisis' element={<Analisis/>}/>

      </Routes>
    </Router>
  );
}

export default App;
