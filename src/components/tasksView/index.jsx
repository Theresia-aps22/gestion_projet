import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/images/personne1.jpg';

const TasksView = () => {
    // Exemple de données de tâches avec différents statuts
    const tasks = [
        {
            name: "Task 1",
            createdDate: "01.01.2022",
            description: "This is the first task.",
            attachments: ["file1.pdf", "file2.png"],
            status: "In Progress",
            members: [
                photo,
                photo
            ]
        },
        {
            name: "Task 2",
            createdDate: "02.01.2022",
            description: "This is the second task.",
            attachments: ["file3.docx", "file4.jpg"],
            status: "Completed",
            members: [
                photo,
                photo
            ]
        },
        {
            name: "Task 3",
            createdDate: "03.01.2022",
            description: "This is the third task.",
            attachments: [],
            status: "Cancelled",
            members: [
                photo,
                photo
            ]
        }
    ];

    // Fonction pour rendre la liste des membres
    const renderMembers = (members) => (
        <ul className="list-inline">
            {members.map((member, idx) => (
                <li className="list-inline-item" key={idx}>
                    <img alt="Avatar" className="img-thumbnail rounded-circle table-avatar" src={member} />
                </li>
            ))}
        </ul>
    );

    // Fonction pour rendre la liste des pièces jointes
    const renderAttachments = (attachments) => (
        <ul className="list-unstyled">
            {attachments.map((attachment, idx) => (
                <li key={idx}>
                    <a href={`#`} className="text-decoration-none">{attachment}</a>
                </li>
            ))}
        </ul>
    );

    // Fonction pour rendre le badge de statut avec classe dynamique en fonction du statut
    const renderStatusBadge = (status) => {
        let badgeClass = '';
        switch (status) {
            case 'In Progress':
                badgeClass = 'badge bg-primary text-white';
                break;
            case 'Completed':
                badgeClass = 'badge bg-success text-white';
                break;
            case 'Cancelled':
                badgeClass = 'badge bg-danger text-white';
                break;
            default:
                badgeClass = 'badge bg-warning text-dark';
        }
        return <span className={`badge ${badgeClass}`}>{status}</span>;
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-header bg-light">
                    <h3 className="card-title">Tasks</h3>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th style={{ width: "15%" }}>Name</th>
                                <th style={{ width: "15%" }}>Members</th>
                                <th style={{ width: "25%" }}>Description</th>
                                <th style={{ width: "20%" }}>Attachments</th>
                                <th style={{ width: "10%" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td>
                                        <Link to="#" className="text-dark">
                                            {task.name}
                                        </Link>
                                        <br />
                                        <small className="text-muted">
                                            Created {task.createdDate}
                                        </small>
                                    </td>
                                    <td>{renderMembers(task.members)}</td>
                                    <td>{task.description}</td>
                                    <td>{renderAttachments(task.attachments)}</td>
                                    <td>{renderStatusBadge(task.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TasksView;
