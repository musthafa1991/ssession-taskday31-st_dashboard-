import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";


export function CreateTeacher() {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            education: "",
            subject: "",
            marrital_status: "",
            email: "",
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
            else if (!values.education) {
                errors.education = "Please enter the Qualification";
            }
            else if (!values.subject) {
                errors.subject = "Please enter the Subject";
            } else if (!values.email) {
                errors.email = "Please enter the Father email"
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
                await axios.post("https://61eeed07d593d20017dbb208.mockapi.io/form/teachers", values)
                // await fetch("https://61eeed07d593d20017dbb208.mockapi.io/form/userdata", {
                //     method: "POST",
                //     body: JSON.stringify(values),
                //     headers: {
                //         "Content-type": "application/json"
                //     }

                // })
                alert("data updated");
                navigate("/teacherslist");
            } catch (error) {
                console.log(error)
            }
        }

    })


    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">New Teacher's data</h1></div>
            <div className="container">
                <form onSubmit={formik.handleSubmit} >
                    <div className="row">
                        <div className="col-lg-6" >
                            <label>Name</label>
                            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                            }
                        </div>
                        <div className="col-lg-4">
                            <label>Education</label>
                            <input type="text" name="education" value={formik.values.education} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.education ? <span style={{ color: "red" }}>{formik.errors.grade}</span> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Subject</label>
                            <input type="text" name="subject" value={formik.values.subject} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.subject ? <span style={{ color: "red" }}>{formik.errors.fatherName}</span> : null
                            }
                        </div>
                        <div className="col-lg-4">
                            <label>Marrital Status</label>
                            <input type="text" name="marrital_status" value={formik.values.marrital_status} onChange={formik.handleChange} className="form-control" />

                        </div>
                        <div className="col-lg-4">
                            <label>Email</label>
                            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" />
                            {
                                formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.mobile}</span> : null
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
            </div>



        </>
    )
}
