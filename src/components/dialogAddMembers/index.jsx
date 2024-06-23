import React, { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import MemberDropdown from '../memberDropdown';

const DialogAddMembers = ({ show, handleClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState([]);

  const handleSelectPeople = (people) => {
    setSelectedPeople(people);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour gérer les données du formulaire
    console.log({
      taskTitle,
      assignedTo,
      description,
      attachments
    });
    handleClose();
  };

  const handleFileChange = (event) => {
    setAttachments(event.target.files);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Member</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTaskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Form.Group>
          
          {/* Autres champs et logique de formulaire ici */}

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DialogAddMembers;
