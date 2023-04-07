import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { customerData } from "../mockData";

const CustomerListing = () => {
  const [customerdata, setCustomerData] = useState(null);
  const navigate = useNavigate();

  const View = (id) => {
    navigate("/customer/view/" + id);
  };
  const Edit = (id) => {
    navigate("/customer/edit/" + id);
  };
  const Delete = (id) => {
    if (window.confirm("Do you want to remove?")) {
      let updatedData = customerdata;
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
                <td>Id</td>
                <td>Name</td>
                <td>Surname</td>
                <td>Email</td>
                <td>Contact</td>
                <td>Address</td>
                <td>City</td>
                <td>State</td>
                <td>Country</td>
                <td>PostalCode</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {customerdata &&
                customerdata?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
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
                          Delete(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
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

export default CustomerListing;
