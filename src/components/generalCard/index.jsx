import React from 'react';

export default function GeneralCard() {
    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">General</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="inputName">Project Name</label>
                    <input type="text" id="inputName" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputDescription">Project Description</label>
                    <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="inputStatus">Status</label>
                    <select id="inputStatus" className="form-control custom-select">
                        <option selected disabled>Select one</option>
                        <option>On Hold</option>
                        <option>Canceled</option>
                        <option>Success</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="inputClientCompany">Client Company</label>
                    <input type="text" id="inputClientCompany" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputProjectLeader">Project Leader</label>
                    <input type="text" id="inputProjectLeader" className="form-control" />
                </div>
            </div>
        </div>
    );
}
