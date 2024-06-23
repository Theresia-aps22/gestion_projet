import React from 'react';
import { Link } from 'react-router-dom';
import InfoBox from '../info-box';
import photo from '../../assets/images/personne1.jpg';
import ProjectProgressChart from '../projectProgressChart';

const InfoProjectView = () => {
    // Exemple de données de détails de projet
    const projectDetails = {
        title: 'Sample Project',
        description: 'This is a sample project description.',
        status: 'In Progress',
        clientCompany: 'Sample Company Inc.',
        projectLeader: 'John Doe',
        estimatedBudget: 5000,
        spentBudget: 2500,
        estimatedDuration: 6,
    };

    return (
        <div>
            {/* Contenu principal */}
            <section className="content" >
                <div className="container-fluid">
                    <div className="row">
                        {/* Colonne pour le contenu principal */}
                        <div className="row">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">{projectDetails.title} detail</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        {/* InfoBox */}
                                        <div className="col-md-4">
                                            <InfoBox text="Estimated budget" valeur={projectDetails.estimatedBudget} />
                                        </div>
                                        <div className="col-md-4">
                                            <InfoBox text="Total amount spent" valeur={projectDetails.spentBudget} />
                                        </div>
                                        <div className="col-md-4">
                                            <InfoBox text="Estimated project duration" valeur={projectDetails.estimatedDuration} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <h4>Description</h4>
                                            <div className="post">
                                                <span className="description">Created at - 7:45 PM today</span>
                                                <p>{projectDetails.description}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="user-block">
                                                <img className="img-circle img-bordered-sm" src={photo} alt="user" />
                                                <span className="username">
                                                    <Link to="#">{projectDetails.projectLeader}</Link>
                                                </span>
                                                <span className="description">Project Leader</span>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div>
                                                <strong>Client Company:</strong> <Link to="#">{projectDetails.clientCompany}</Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <ProjectProgressChart />
                                        </div>
                                    </div>
                                   
                                </div>
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoProjectView;
