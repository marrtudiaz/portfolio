import './App.css';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/mi-portfolio/home" element={<HomePage />} />
        <Route path="/mi-portfolio/" element={<HomePage />} />
      </Routes>
        
    </div>
  );
}

export default App;
