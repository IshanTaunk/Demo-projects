import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
