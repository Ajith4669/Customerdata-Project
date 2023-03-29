import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CusListing from "./CusListing";
import CusCreate from "./CusCreate";
import CusDetail from "./CusDetail";
import CusEdit from "./CusEdit";
import { useEffect } from "react";
import { customerData } from "./mockData";
import Home from "./home";
import About from "./about";
import Navbar from "./navbar";

function App() {
  useEffect(() => {
    const data = localStorage.getItem("usersDB");
    const parsedData = JSON.parse(data);
    if (parsedData?.length === 0) {
      localStorage.setItem("usersDB", JSON.stringify(customerData));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<CusListing />}></Route>
          <Route path="/customer/create" element={<CusCreate />}></Route>
          <Route path="/customer/view/:cusid" element={<CusDetail />}></Route>
          <Route path="/customer/edit/:cusid" element={<CusEdit />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
