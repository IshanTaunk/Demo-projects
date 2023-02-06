import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Components from './pages/Components/Components';
import Header from './components/header/header';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
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
