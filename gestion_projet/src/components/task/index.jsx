import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TaskDialog from '../taskDialog'; 
import TaskDialogView from '../taskDialogView'; 
import DialogConfirmedDelete from '../dialogConfirmedDelete';
import photo from '../../assets/images/personne1.jpg';

const Task = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showTaskViewDialog, setShowTaskViewDialog] = useState(false);
  const [showTaskDialogDelete, setShowTaskDialogDelete] = useState(false);

  const handleCloseTaskForm = () => setShowTaskForm(false);
  const handleShowTaskForm = () => setShowTaskForm(true);

  const handleCloseTaskViewDialog = () => setShowTaskViewDialog(false);
  const handleShowTaskViewDialog = () => setShowTaskViewDialog(true);

  const handleCloseTaskDialogDelete = () => setShowTaskDialogDelete(false);
  const handleShowTaskDialogDelete = () => setShowTaskDialogDelete(true);

  // Sample task data
  const task = {
    taskTitle: 'Sample Task',
    assignedTo: 'John Doe',
    description: 'Sample description of the task.',
    attachments: [
      { name: 'Attachment 1' },
      { name: 'Attachment 2' },
    ],
    selectedPeople: [
      { id: 1, name: 'Alice', avatar: photo },
      { id: 2, name: 'Bob', avatar: photo },
    ],
  };

  return (
    <div className="card card-secondary">
      <div className="card-header">
        <h3 className="card-title">Tasks</h3>
        <div className="card-tools">
          <Button className="btn btn-primary custom-button" onClick={handleShowTaskForm}>
            <i className="fa-solid fa-plus"></i> Create
          </Button>
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
                <Button className="btn btn-primary btn-sm" style={{ margin: "5px" }} onClick={handleShowTaskViewDialog}>
                  <i className="fa-solid fa-eye"></i>
                </Button>
                <Button className="btn btn-info btn-sm" style={{ margin: "5px" }} onClick={handleShowTaskForm}>
                  <i className="fas fa-pencil-alt"></i>
                </Button>
                <Button className="btn btn-danger btn-sm" style={{ margin: "5px" }} onClick={handleShowTaskDialogDelete}>
                  <i className="fas fa-trash"></i>
                </Button>
                <Button className="btn btn-success btn-sm" style={{ margin: "5px" }} onClick={() => { /* Compléter logique */ }}>
                  <i className="fas fa-check"></i>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TaskDialog show={showTaskForm} handleClose={handleCloseTaskForm} />
      <TaskDialogView show={showTaskViewDialog} handleClose={handleCloseTaskViewDialog} task={task} />
      <DialogConfirmedDelete show={showTaskDialogDelete} handleClose={handleCloseTaskDialogDelete} description="Are you sure you want to delete this task?"/>
    </div>
  );
}

export default Task;
