import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerListing from "./Components/Customer_Listing";
import CustomerCreate from "./Components/Customer_Create";
import CustomerDetail from "./Components/Customer_Detail";
import CustomerEdit from "./Components/Customer_Edit";
import { useEffect } from "react";
import { customerData } from "./mockData";
import Home from "./Components/home";
import About from "./Components/about";
import Navbar from "./Navbar/navbar";

function App() {
  useEffect(() => {
    // const data = localStorage.getItem("usersDB");
    // const parsedData = JSON.parse(data);
    // if (parsedData?.length === 0)
    {
      localStorage.setItem("usersDB", JSON.stringify(customerData));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerListing />}></Route>
          <Route path="/customer/create" element={<CustomerCreate />}></Route>
          <Route
            path="/customer/view/:customerid"
            element={<CustomerDetail />}
          ></Route>
          <Route
            path="/customer/edit/:customerid"
            element={<CustomerEdit />}
          ></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
