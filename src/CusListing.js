import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CusListing = () => {
    const [cusdata, cusdatachange] = useState(null);
    const navigate = useNavigate();

    const View = (id) => {
        navigate("/customer/view/" + id);
    }
    const Edit = (id) => {
        navigate("/customer/edit/" + id);
    }
    const Remove = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(" http://localhost:3000/contacts" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch(" http://localhost:3000/contacts").then((res) => {
            return res.json();
        }).then((resp) => {
            cusdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Customer Data</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="customer/create" className="btn btn-success text-black" style={{backgroundColor:"#d28c70",marginLeft:"1100px"}}>Add New +</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>NAME</td>
                                <td>MAIL</td>
                                <td>CONTACT</td>
                                <td>ADDRESS</td>
                                <td>CITY</td>
                                <td>STATE</td>
                                <td>COUNTRY</td>
                                <td>POSTALCODE</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {cusdata &&
                                cusdata.map(item => (
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
                                        <td><a onClick={() => { Edit(item.id) }} className="btn btn-primary" style={{backgroundColor:"#636363"}}>Edit</a>
                                            <a onClick={() => { View(item.id) }} className="btn btn-primary" style={{backgroundColor:"#636363"}}>View</a>
                                            <a onClick={() => { Remove(item.id) }} className="btn btn-danger">Remove</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CusListing;