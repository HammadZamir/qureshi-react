import {BrowserRouter as Router, Route,Routes,} from "react-router-dom";
import {Navigate} from 'react-router-dom'

import LandingPage from "./pages/landingPage/LandingPage";
import Explore from './pages/explore/Explore'
import Expand from './pages/expand/Expand'
import AboutUs from './pages/aboutUs/AboutUs'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Expand" element={<Expand />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
