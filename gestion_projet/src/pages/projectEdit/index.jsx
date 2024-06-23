import React from 'react';
import {Link} from "react-router-dom"
import Task from '../../components/task'; 
import GeneralCard from '../../components/generalCard'; 
import BudgetCard from '../../components/budgetCard';

export default function ProjectEditForm() {

    return (
        <div className="content-wrapper">
            <div className="row mb-3">
                <div className="col-md-6">
                    <GeneralCard />
                </div>
                <div className="col-md-6">
                    <BudgetCard />
                    <Task/>
                </div>
            </div>
             <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <Link to="/project" className="btn btn-secondary">Cancel</Link>
                    <input type="submit" value="Enregistrer" className="btn btn-success" />
                </div>
            </div>
        </div>
    );
}
