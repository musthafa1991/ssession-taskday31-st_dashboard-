import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ViewTeacher() {
    let params = useParams();
    let [data, setdata] = useState({})
    useEffect(() => {
        getdata();
    }, []);
    let getdata = async () => {
        let userdata = await axios.get(`https://61eeed07d593d20017dbb208.mockapi.io/form/teachers/${params.id}`);
        let data = userdata.data;
        console.log(data);
        setdata(data);

    }
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 ml-3 text-gray-800">View Teacher Id: {params.id}</h1></div>
            <div className="ml-3">
                <p>Name : {data.name}</p>
                <p>Qualification : {data.education}</p>
                <p>subject : {data.subject}</p>
                <p>Marrital Status : {data.marrital_status}</p>
                <p>Email : {data.email}</p>

                <p>Mobile : {data.mobile}</p>
                <p>Address : {data.address}</p>
                <p>Country : {data.country}</p>
                <p>State : {data.state}</p>
                <p>City : {data.city}</p>
                <p>Pin Code : {data.pin}</p>
            </div>


        </>


    )
}

