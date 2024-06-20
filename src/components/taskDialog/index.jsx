import React, { useState } from 'react';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import MemberDropdown from '../memberDropdown'

const TaskDialog = ({ show, handleClose}) => {
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
        <Modal.Title><i class="fa-solid fa-list-check"></i>  Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTaskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le titre"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAssignedTo">
            <Form.Label>Concerned Person</Form.Label>
            <MemberDropdown onSelect={handleSelectPeople} />
            {selectedPeople.length > 0 && (
              <div className="mt-3">
                <h3>Personnes sélectionnées:</h3>
                <ul>
                  {selectedPeople.map((person) => (
                    <li key={person.id} className="d-flex align-items-center">
                      <Image src={person.avatar} roundedCircle width={50} height={50} className="me-2" />
                      {person.name}
              </li>
            ))}
          </ul>
        </div>
      )}
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Entrez la description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAttachments">
            <Form.Label>Attachments</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={handleFileChange}
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskDialog;
