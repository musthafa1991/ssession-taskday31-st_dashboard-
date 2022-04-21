import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentsList() {
    const [userdata, setUser] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    let getData = async () => {
        try {
            let udata = await axios.get("https://61eeed07d593d20017dbb208.mockapi.io/form/students");

            setUser(udata.data)



        } catch (error) {
            console.log(error)
        }

    };

    console.log(userdata);


    let handleDelete = async (id) => {
        /*eslint no-restricted-globals: ["error","event"]*/
        let res = confirm("Are you want to delete?")

        if (res) {
            try {
                let ddata = await axios.delete(`https://61eeed07d593d20017dbb208.mockapi.io/form/students/${id}`)

                alert("data deleted");
                getData();

            } catch (error) {
                console.log(error)
            }

        }
    }
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Student List</h1>
                <Link to="/createstudent" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i>Add New Entry</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Data Table</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Father Name</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>city</th>
                                    <th>pin</th>

                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Class</th>
                                    <th>Father Name</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>city</th>
                                    <th>pin</th>

                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    userdata.map((item) => {
                                        return <tr>
                                            <td>{item.name}</td>
                                            <td>{item.grade}</td>
                                            <td>{item.fatherName}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.address}</td>
                                            <td>{item.country}</td>
                                            <td>{item.state}</td>
                                            <td>
                                                {item.city}
                                            </td>
                                            <td>{item.pin}</td>

                                            <td>
                                                <Link to={`/ViewStudent/${item.id}`} className="btn btn-primary mr-1">View</Link>
                                                <Link to={`/EditStudent/${item.id}`} className="btn btn-primary mr-1">Edit</Link>
                                                <button onClick={() => handleDelete(item.id)} className="btn btn-primary ">Delete</button>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>

    )
}
export default StudentsList;