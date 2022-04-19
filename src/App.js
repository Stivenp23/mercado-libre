import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import DetailsProduct from "./pages/details-product/details-product";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/items" element={<DetailsProduct/>}/>
            </Routes>
        </Router>
    );
}

export default App;
