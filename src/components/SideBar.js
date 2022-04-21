import React from "react";
import { Link } from "react-router-dom";

function SideBAr() {
    return (
        <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">ST Admin <sup>2</sup></div>
            </a>
            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Interface
            </div>

            <li className="nav-item ">
                <Link className="nav-link" to="/studentslist">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Student List</span></Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link" to="/teacherslist">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Teachers List</span></Link>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" >
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>

            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>

            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">
                Addons
            </div>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" >
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>

            </li>

            <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li>


            <hr className="sidebar-divider d-none d-md-block" />


            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>


            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
            </div>

        </ul>
    )
}

export default SideBAr;