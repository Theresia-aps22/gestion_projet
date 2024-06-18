import React from 'react';
import GeneralCard from '../../components/generalCard';
import BudgetCard from '../../components/budgetCard';


export default function ProjetForm() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <GeneralCard />
                </div>
                <div className="col-md-6">
                    <BudgetCard />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <a href="#" className="btn btn-secondary">Cancel</a>
                    <input type="submit" value="Create new Project" className="btn btn-success float-right" />
                </div>
            </div>
        </div>
    );
}
