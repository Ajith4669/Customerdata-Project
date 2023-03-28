import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CusDetail = () => {
  const { cusid } = useParams();

  const [cusdata, cusdatachange] = useState({});

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userDb = await localStorage.getItem("usersDB");
    console.log(JSON.parse(userDb));
    const parsedata = JSON.parse(userDb);
    const activeContact = parsedata?.find((user) => user.id == cusid);
    cusdatachange(activeContact);
  };
  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "center" }}>
          <div className="card-title">
            <h2>Details</h2>
          </div>
          <div className="card-body"></div>

          {cusdata && (
            <div>
              <h4>
                Customer Name - <b>{cusdata.firstname}</b>
              </h4>
              <h6>Email : {cusdata.mail}</h6>
              <h6>Contact : {cusdata.phonenumber}</h6>
              <h6>Address : {cusdata.address}</h6>
              <h6>City : {cusdata.city}</h6>
              <h6>State : {cusdata.state}</h6>
              <h6>Country : {cusdata.country}</h6>
              <h6>Postalcode : {cusdata.postalcode}</h6>

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

export default CusDetail;
