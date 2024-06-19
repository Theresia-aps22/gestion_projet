import React from 'react';
import GeneralCard from '../../components/generalCard';
import BudgetCard from '../../components/budgetCard';
import { Link } from 'react-router-dom';
import Bouton from '../../components/bouton';

export default function ProjectForm() {
    return (
        <div className="content-wrapper">
            <div className="row mb-3">
                <div className="col-md-6">
                    <GeneralCard />
                </div>
                <div className="col-md-6">
                    <BudgetCard />
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-between">
                    <div className="col-12 d-flex justify-content-between">
                        <Bouton
                            title="Cancel"
                            action="/project"
                        />
                        
                    <input type="submit" value="Create new Project" className="btn btn-success" />
                    </div>
                </div>
            </div>
        </div>
    );
}
