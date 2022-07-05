import './App.css';
import Login from './Components/Login/index';
import Application from './Pages/Application';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/application" element={<Application />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
