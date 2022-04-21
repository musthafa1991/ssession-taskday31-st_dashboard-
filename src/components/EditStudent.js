import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditStudent() {
    let params = useParams();
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            grade: "",
            fatherName: "",
            mobile: "",
            address: "",
            country: "",
            state: "",
            city: "",
            pin: ""
        },
        validate: (values) => {
            let errors = {};

            if (!values.name) {
                errors.name = "Please enter the name";
            }
            else if (!values.grade) {
                errors.grade = "Please enter the class";
            } else if (!values.fatherName) {
                errors.fatherName = "Please enter the Father Name"
            } else if (!values.mobile) {
                errors.mobiler = " Please Enter the number"
            } else if (!values.address) {
                errors.address = "Please Enter the Country"
            } else if (!values.country) {
                errors.country = "Please Enter the Country"
            } else if (!values.state) {
                errors.state = "Please Enter the State"
            } else if (!values.city) {
                errors.city = "Please Enter the City"
            }
            return errors

        },
        onSubmit: async (values) => {
            console.log(values)
            try {
                await axios.put(`https://61eeed07d593d20017dbb208.mockapi.io/form/students/${params.id}`, values)

                alert("data updated");
                navigate("/studentslist");
            } catch (error) {
                console.log(error)
            }
        }

    })
    let studentData = async () => {
        try {
            let userdata = await axios.get(`https://61eeed07d593d20017dbb208.mockapi.io/form/students/${params.id}`);
            console.log(userdata.data);
            formik.setValues(userdata.data);

        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        studentData();
    }, [])
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Student ID: {params.id}</h1></div>

            <form onSubmit={formik.handleSubmit} className="container">
                <div className="row">
                    <div className="col-lg-6" >
                        <label>Name</label>
                        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                        }
                    </div>
                    <div className="col-lg-4">
                        <label>Class</label>
                        <input type="text" name="grade" value={formik.values.grade} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.grade ? <span style={{ color: "red" }}>{formik.errors.grade}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Father Name</label>
                        <input type="text" name="fatherName" value={formik.values.fatherName} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.fatherName ? <span style={{ color: "red" }}>{formik.errors.fatherName}</span> : null
                        }
                    </div>
                    <div className="col-lg-4">
                        <label>Number</label>
                        <input type="number" name="mobile" value={formik.values.mobile} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.mobile ? <span style={{ color: "red" }}>{formik.errors.mobile}</span> : null
                        }
                    </div>
                    <div className="col-lg-6">
                        <label>Address</label>
                        <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.address ? <span style={{ color: "red" }}>{formik.errors.address}</span> : null
                        }
                    </div>
                    <div className="col-lg-4">
                        <label>Country</label>
                        <input type="text" name="country" value={formik.values.country} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.country ? <span style={{ color: "red" }}>{formik.errors.country}</span> : null
                        }
                    </div>
                    <div className="col-lg-3">
                        <label>State</label>
                        <input type="text" name="state" value={formik.values.state} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.state ? <span style={{ color: "red" }}>{formik.errors.state}</span> : null
                        }
                    </div>
                    <div className="col-lg-3">
                        <label>City</label>
                        <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange} className="form-control" />
                        {
                            formik.errors.city ? <span style={{ color: "red" }}>{formik.errors.city}</span> : null
                        }
                    </div>
                    <div className="col-lg-3">
                        <label>Pin code</label>
                        <input type="number" name="pin" value={formik.values.pin} onChange={formik.handleChange} className="form-control" />

                    </div>
                    <div>

                        <input type="submit" className="btn btn-primary mt-3" />
                    </div>

                </div>
            </form>
        </>


    )
}
