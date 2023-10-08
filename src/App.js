import "./App.css";
import View from "./components/View";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartUpdate from "./components/CartUpdate";
import SvgRenderer from "./components/SvgRenderer";
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<View />} />
          <Route path="cart-update" element={<CartUpdate />} />
          <Route path="svg-render" element={<SvgRenderer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
