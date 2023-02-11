import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Components from './pages/Components/Components';
import Header from './components/header/header';
import HealthApp from './pages/HealthApp/HealthApp';
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
                <Route path="/health-app" element={<HealthApp />} />
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
