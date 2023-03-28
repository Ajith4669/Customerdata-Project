import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { customerData } from "./mockData";

const CusListing = () => {
  const [cusdata, setCustomerData] = useState(null);
  const navigate = useNavigate();

  const View = (id) => {
    navigate("/customer/view/" + id);
  };
  const Edit = (id) => {
    navigate("/customer/edit/" + id);
  };
  const Remove = (id) => {
    if (window.confirm("Do you want to remove?")) {
      let updatedData = cusdata;
      updatedData = updatedData.filter((user) => user.id != id);
      setCustomerData(updatedData);
      console.log(updatedData);
      localStorage.setItem("usersDB", JSON.stringify(updatedData));
      navigate("/");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const userDb = await localStorage.getItem("usersDB");
    const parsedData = JSON.parse(userDb);
    setCustomerData(parsedData);
    console.log(parsedData);
  };

  const [data, setdata] = useState(customerData);
  const [order, setorder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Customer Data</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link
              to="customer/create"
              className="btn btn-success text-black"
              style={{ backgroundColor: "#d28c70", marginLeft: "1100px" }}
            >
              Add New +
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th onClick={() => sorting("id")}>Id</th>
                <th onClick={() => sorting("firstname")}>NAME</th>
                <th onClick={() => sorting("mail")}>MAIL</th>
                <th onClick={() => sorting("phonenumber")}>CONTACT</th>
                <th onClick={() => sorting("address")}>ADDRESS</th>
                <th onClick={() => sorting("city")}>CITY</th>
                <th onClick={() => sorting("state")}>STATE</th>
                <th onClick={() => sorting("country")}>COUNTRY</th>
                <th onClick={() => sorting("postalcode")}>POSTALCODE</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cusdata &&
                cusdata?.map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.mail}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.country}</td>
                    <td>{item.postalcode}</td>
                    <td>
                      <a
                        onClick={() => {
                          Edit(item.id);
                        }}
                        className="btn btn-primary"
                        style={{ backgroundColor: "#636363" }}
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          View(item.id);
                        }}
                        className="btn btn-primary"
                        style={{ backgroundColor: "#636363" }}
                      >
                        View
                      </a>
                      <a
                        onClick={() => {
                          Remove(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CusListing;
