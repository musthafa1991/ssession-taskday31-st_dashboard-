import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TeachersList() {
    const [userdata, setUser] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    let getData = async () => {
        try {
            let udata = await axios.get("https://61eeed07d593d20017dbb208.mockapi.io/form/teachers");

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
                let ddata = await axios.delete(`https://61eeed07d593d20017dbb208.mockapi.io/form/teachers/${id}`)

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
                <h1 className="h3 mb-0 text-gray-800">Teacher's List</h1>
                <Link to="/createteacher" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i>Add New Entry</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Education</th>
                                    <th>Subject</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>city</th>
                                    <th>Pin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Education</th>
                                    <th>Subject</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>city</th>
                                    <th>Pin</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    userdata.map((item) => {
                                        return <tr>
                                            <td>{item.name}</td>
                                            <td>{item.education}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.address}</td>
                                            <td>{item.country}</td>
                                            <td>{item.state}</td>
                                            <td>
                                                {item.city}
                                            </td>
                                            <td>{item.pin}</td>
                                            <td>
                                                <Link to={`/ViewTeacher/${item.id}`} className="btn btn-primary mr-1">View</Link>
                                                <Link to={`/EditTeacher/${item.id}`} className="btn btn-primary mr-1">Edit</Link>
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
export default TeachersList;