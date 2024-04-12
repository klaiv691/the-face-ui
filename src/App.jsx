import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import Notifications from "./Notifications";
import Support from "./Support";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/Notifications" exact element={<Notifications />} />
          <Route path="/" element={<Home />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
