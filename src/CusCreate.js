import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CusCreate = () => {
  const [id] = useState("");
  const [firstname, firstnamechange] = useState("");
  const [mail, mailchange] = useState("");
  const [phonenumber, phonenumberchange] = useState("");
  const [address, addresschange] = useState("");
  const [city, citychange] = useState("");
  const [state, statechange] = useState("");
  const [country, countrychange] = useState("");
  const [postalcode, postalcodechange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    const userdata = await localStorage.getItem("usersDB");
    const parsedata = JSON.parse(userdata);
    console.log(parsedata);

    e.preventDefault();
    const cusdata = {
      firstname,
      mail,
      phonenumber,
      address,
      city,
      state,
      country,
      postalcode,
      id: parsedata?.length + 1,
    };
    const updateddata = [...parsedata, cusdata];
    console.log(updateddata);

    await localStorage.setItem("usersDB", JSON.stringify(updateddata));

    navigate("/");
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "center" }}>
              <div className="card-title">
                <h2>Add Data</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={firstname}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => firstnamechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {firstname.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={mail}
                        onChange={(e) => mailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phonenumber}
                        onChange={(e) => phonenumberchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        value={city}
                        onChange={(e) => citychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        value={state}
                        onChange={(e) => statechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        value={country}
                        onChange={(e) => countrychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <label>PostalCode</label>
                      <input
                        value={postalcode}
                        onChange={(e) => postalcodechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <div className="form-group">
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CusCreate;
