import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CusEdit = () => {
  const { cusid } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userDb = await localStorage.getItem("usersDB");
    console.log(JSON.parse(userDb));
    const parsedata = JSON.parse(userDb);
    const activeContact = parsedata?.find((user) => user.id == cusid);

    const {
      id,
      firstname,
      mail,
      phonenumber,
      address,
      city,
      state,
      country,
      postalcode,
    } = activeContact ?? {};
    idchange(id);
    firstnamechange(firstname);
    mailchange(mail);
    phonenumberchange(phonenumber);
    addresschange(address);
    citychange(city);
    statechange(state);
    countrychange(country);
    postalcodechange(postalcode);
  };

  const [id, idchange] = useState("");
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
    const userDb = await localStorage.getItem("usersDB");
    let parsedata = JSON.parse(userDb);
    const cusdata = {
      id,
      firstname,
      mail,
      phonenumber,
      address,
      city,
      state,
      country,
      postalcode,
    };
    const udatedUserDb = parsedata?.map((item) => {
      var updatedData = item;
      if (item?.id === id) {
        updatedData = cusdata;
      }

      return updatedData;
    });

    console.log(udatedUserDb);
    localStorage.setItem("usersDB", JSON.stringify(udatedUserDb));
    navigate("/");
    e.preventDefault();
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Customer Edit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ textAlign: "left" }}>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
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

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        value={mail}
                        onChange={(e) => mailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phonenumber}
                        onChange={(e) => phonenumberchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>City</label>
                      <input
                        value={city}
                        onChange={(e) => citychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        value={state}
                        onChange={(e) => statechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        value={country}
                        onChange={(e) => countrychange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Postalcode</label>
                      <input
                        value={postalcode}
                        onChange={(e) => postalcodechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
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

export default CusEdit;
