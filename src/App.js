import "./styles/main.css"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contacts from "./components/pages/Contacts";
import ProjectInfo from "./components/pages/ProjectInfo";

import ScrollToTop from "./utils/scrollToTop";

function App() {
    return (
        <div className="App">
            <Router>

                <ScrollToTop/>

                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/project/:id" element={<ProjectInfo/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>

                <Footer/>

            </Router>
        </div>
    );
}

export default App;
