import React from 'react';
import TasksView from '../../components/tasksView';
import InfoProjectView from '../../components/infoProjectView';
import Bouton from '../../components/bouton';

export default function ProjectView() {
    return (
        <div className="content-wrapper">
            <InfoProjectView />
            <TasksView />
            <div className="d-flex justify-content-between mt-4" style={{margin:"10px"}}>
                <div>
                    <Bouton
                        title="Cancel"
                        action="/project"
                    />
                </div>
                <div>
                    <Bouton
                        title="Edit"
                        action="/editProject"
                    />
                </div>
            </div>
        </div>
    );
}
