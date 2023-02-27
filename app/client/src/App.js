import './App.css';
import CrearProyecto from './components/CrearProyecto';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lista_Proyecto from './components/Lista_Proyecto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/proyecto/nuevo' element={<CrearProyecto/>} />         
          <Route path='/' element={<Lista_Proyecto/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
