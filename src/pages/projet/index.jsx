import Bouton from "../bouton";

export default function Project() {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Projects</h1>
                        </div>
                        <div className="col-sm-6">
                            <Bouton
                                title="ajouter"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Projects</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped projects">
                            <thead>
                                <tr>
                                    <th style={{ width: "1%" }}>
                                        #
                                    </th>
                                    <th style={{ width: "20%" }}>
                                        Project Name
                                    </th>
                                    <th style={{ width: "30%" }}>
                                        Team Members
                                    </th>
                                    <th>
                                        Project Progress
                                    </th>
                                    <th style={{ width: "8%" }} className="text-center">
                                        Status
                                    </th>
                                    <th style={{ width: "20%" }}>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        #
                                    </td>
                                    <td>
                                        <a>
                                            AdminLTE v3
                                        </a>
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
                                        <a className="btn btn-primary btn-sm" href="#">
                                            <i className="fas fa-folder">
                                            </i>
                                            View
                                        </a>
                                        <a className="btn btn-info btn-sm" href="#">
                                            <i className="fas fa-pencil-alt">
                                            </i>
                                            Edit
                                        </a>
                                        <a className="btn btn-danger btn-sm" href="#">
                                            <i className="fas fa-trash">
                                            </i>
                                            Delete
                                        </a>
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
