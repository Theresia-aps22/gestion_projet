import React from 'react';
import { Link } from 'react-router-dom';
import Bouton from "../../components/bouton"; 

export default function Project() {
    return (
        <div className="content-wrapper" >
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Projects</h3>
                        <div className="card-tools">
                            <Link to="/addProject" className="btn btn-primary custom-button">
                                <i className="fa-solid fa-plus"></i> Create
                            </Link>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped projects">
                            <thead>
                                <tr>
                                    <th style={{ width: "20%" }}>
                                        Project Name
                                    </th>
                                    <th style={{ width: "20%" }}>
                                        Team Members
                                    </th>
                                    <th>
                                        Project Progress
                                    </th>
                                    <th style={{ width: "8%" }} className="text-center">
                                        Status
                                    </th>
                                    <th style={{ width: "30%"}}>
                                      
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            AdminLTE v3
                                        </Link>
                                        <br />
                                        <small>
                                            Created 01.01.2019
                                        </small>
                                    </td>
                                    <td>
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar2.png" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar3.png" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar4.png" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="project_progress">
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{ width: "57%" }}>
                                            </div>
                                        </div>
                                        <small>
                                            57% Complete
                                        </small>
                                    </td>
                                    <td className="project-state">
                                        <span className="badge badge-success">Success</span>
                                    </td>
                                    <td className="project-actions text-right">
                                        <Link className="btn btn-primary btn-sm" to="#" style={{margin:"5px"}}>
                                            <i className="fas fa-folder"></i> View
                                        </Link>
                                        <Link className="btn btn-info btn-sm" to="/editProject" style={{margin:"5px"}}>
                                            <i className="fas fa-pencil-alt"></i> Edit
                                        </Link>
                                        <Link className="btn btn-danger btn-sm" to="#" style={{margin:"5px"}}>
                                            <i className="fas fa-trash"></i> Delete
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
