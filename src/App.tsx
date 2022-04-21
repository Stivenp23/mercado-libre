import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import DetailsProduct from "./pages/details-product/details-product";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListProducts from "./pages/list-products/list-products";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/items" element={<ListProducts/>}/>
                <Route path="/items/:id" element={<DetailsProduct/>}/>
            </Routes>
        </Router>
    );
}

export default App;
