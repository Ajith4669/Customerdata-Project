import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CustomerDetail = () => {
  const { customerid } = useParams();

  const [customerdata, customerdatachange] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userDb = await localStorage.getItem("usersDB");
    console.log(JSON.parse(userDb));
    const parsedata = JSON.parse(userDb);
    const Contact = parsedata?.find((user) => user.id == customerid);
    customerdatachange(Contact);
  };
  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "center" }}>
          <div className="card-title">
            <h2>Details</h2>
          </div>
          <div className="card-body"></div>

          {customerdata && (
            <div>
              <h4>
                Customer Name - <b>{customerdata.firstname}</b>
              </h4>
              <h6>Surname : {customerdata.lastname}</h6>
              <h6>Email : {customerdata.mail}</h6>
              <h6>Contact : {customerdata.phonenumber}</h6>
              <h6>Address : {customerdata.address}</h6>
              <h6>City : {customerdata.city}</h6>
              <h6>State : {customerdata.state}</h6>
              <h6>Country : {customerdata.country}</h6>
              <h6>Postalcode : {customerdata.postalcode}</h6>

              <Link className="btn btn-danger" to="/">
                Back
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
