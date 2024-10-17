import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Contents from "./components/Contents";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="contents" element={<Contents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
