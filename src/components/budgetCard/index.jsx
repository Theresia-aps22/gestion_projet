import React from 'react';

export default function BudgetCard() {
    return (
        <div className="card card-secondary">
            <div className="card-header">
                <h3 className="card-title">Budget</h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="inputEstimatedBudget">Estimated budget</label>
                    <input type="number" id="inputEstimatedBudget" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputSpentBudget">Total amount spent</label>
                    <input type="number" id="inputSpentBudget" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEstimatedDuration">Estimated project duration</label>
                    <input type="number" id="inputEstimatedDuration" className="form-control" />
                </div>
            </div>
        </div>
    );
}
