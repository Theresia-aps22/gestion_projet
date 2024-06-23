import React from 'react';
import { Button, Modal, Image, ListGroup } from 'react-bootstrap';

const TaskDialogView = ({ show, handleClose, task }) => {
  const { taskTitle, assignedTo, description, attachments, selectedPeople } = task;

  const titleStyle = {
    borderBottom: '1px solid',
    fontFamily: 'Arial, sans-serif',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  };

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Header closeButton>
        <Modal.Title ><i className="fa-solid fa-list-check"></i> Task Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={titleStyle}>
          <h4>Title</h4>
          <p>{taskTitle}</p>
        </div>

        <div style={titleStyle}>
          <h4>Description</h4>
          <p>{description}</p>
        </div>

        <div style={titleStyle}>
          <h4>Concerned Person</h4>
          <ListGroup horizontal>
            {selectedPeople.map((person) => (
              <ListGroup.Item key={person.id} className="text-center">
                <Image src={person.avatar} roundedCircle width={200} height={30} className="mb-2 rounded-circle" />
                <p className="mb-0">{person.name}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        {attachments && attachments.length > 0 && (
          <div style={titleStyle}>
            <h4>Attachments</h4>
            <ul>
              {attachments.map((attachment, index) => (
                <li key={index}>{attachment.name}</li>
              ))}
            </ul>
          </div>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default TaskDialogView;
