import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Components from './pages/Components/Components';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <nav>
                <ul className='toolbar'>
                    <li><div className='link'><Link to="/" data-item="Home">Home</Link></div></li>
                    <li><div className='link'><Link to="/profile" data-item="Profile">Profile</Link></div></li>
                    <li><div className='link'><Link to="/components" data-item="Components">Components</Link></div></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/components" element={<Components />} />
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
