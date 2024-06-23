import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import person from "../../assets/images/personne1.jpg";
import { Tooltip } from 'bootstrap';
import DialogConfirmedDelete from '../../components/dialogConfirmedDelete';

export default function Project() {
    const [showTaskDialogDelete, setShowTaskDialogDelete] = useState(false);

    const handleCloseTaskDialogDelete = () => setShowTaskDialogDelete(false);
    const handleShowTaskDialogDelete = () => setShowTaskDialogDelete(true);

    useEffect(() => {
        // Initialisation des tooltips Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl);
        });
    }, []);

    return (
        <div className="content-wrapper">
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
                                    <th style={{ width: "30%" }}>
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
                                                <img alt="Avatar" className="table-avatar" src={person} data-toggle="tooltip" title="Nom de la personne 1" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src={person} data-toggle="tooltip" title="Nom de la personne 2" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src={person} data-toggle="tooltip" title="Nom de la personne 3" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" className="table-avatar" src={person} data-toggle="tooltip" title="Nom de la personne 4" />
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
                                        <Link className="btn btn-primary btn-sm" to="/viewProject" style={{ margin: "5px" }}>
                                            <i className="fas fa-folder"></i> View
                                        </Link>
                                        <Link className="btn btn-info btn-sm" to="/editProject" style={{ margin: "5px" }}>
                                            <i className="fas fa-pencil-alt"></i> Edit
                                        </Link>
                                        <button className="btn btn-danger btn-sm" to="#" style={{ margin: "5px" }} onClick={handleShowTaskDialogDelete}>
                                            <i className="fas fa-trash"></i> Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <DialogConfirmedDelete show={showTaskDialogDelete} handleClose={handleCloseTaskDialogDelete} description="Are you sure you want to delete this project?" />
        </div>
    );
}
