import React from 'react';
import { Link } from 'react-router-dom';

const Task = () => {
    return (
        <div className="card card-secondary">
            <div className="card-header">
                <h3 className="card-title">Tasks</h3>
                <div className="card-tools">
                    <Link to="/addTask" className="btn btn-primary custom-button">
                        <i className="fa-solid fa-plus"></i> Create
                    </Link>
                </div>
            </div>
            <div className="card-body p-0">
                <table className="table table-striped tasks">
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>
                                Name
                            </th>
                            <th style={{ width: "10%" }}>
                                Members
                            </th>
                            <th style={{ width: "50%" }} className="text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to="#">
                                    Task 1
                                </Link>
                                <br />
                                <small>
                                    Created 01.01.2022
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
                                </ul>
                            </td>
                            <td className="task-actions text-center">
                                <Link className="btn btn-info btn-sm" to="/editTask" style={{margin:"5px"}}>
                                    <i className="fas fa-pencil-alt"></i> Edit
                                </Link>
                                <Link className="btn btn-danger btn-sm" to="#" style={{margin:"5px"}}>
                                    <i className="fas fa-trash"></i> Delete
                                </Link>
                                <Link className="btn btn-success btn-sm" to="#" style={{margin:"5px"}}>
                                    <i className="fas fa-check"></i> Validate
                                </Link>
                            </td>
                        </tr>
                        {/* Ajouter d'autres lignes de tâches si nécessaire */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Task;
