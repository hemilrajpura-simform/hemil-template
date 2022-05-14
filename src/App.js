import './App.css';

import { BrowserRouter as Router, Routes, Route }from "react-router-dom";
import Hi from './pages/Hi';
function App() {
  return (
    <div className="App">
      <Router>
  <Routes>


     
      <Route path="/*" element={  <Hi /> } />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
