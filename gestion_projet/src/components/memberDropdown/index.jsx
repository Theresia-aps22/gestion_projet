import React, { useState } from 'react';
import { Dropdown, Image, Form, Button } from 'react-bootstrap';

const people = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '../../assets/images/personne1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: '../../assets/images/personne1.jpg' 
  },
];

const MemberDropdown = ({ onSelect }) => {
  const [selectedPeople, setSelectedPeople] = useState([]);

  const handleCheckboxChange = (person) => {
    setSelectedPeople((prevSelected) =>
      prevSelected.includes(person)
        ? prevSelected.filter((p) => p !== person)
        : [...prevSelected, person]
    );
  };

  const handleApply = () => {
    onSelect(selectedPeople);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sélectionnez des personnes
      </Dropdown.Toggle>

      <Dropdown.Menu style={{padding:"10px"}}>
        {people.map((person) => (
          <Form.Check
            key={person.id}
            type="checkbox"
            id={`checkbox-${person.id}`}
            label={
              <div className="d-flex align-items-center">
                <Image src={person.avatar} roundedCircle width={30} height={30} className="me-2" />
                {person.name}
              </div>
            }
            checked={selectedPeople.includes(person)}
            onChange={() => handleCheckboxChange(person)}
          />
        ))}
        <Dropdown.Item as="div" className="text-center">
          <Button variant="primary" onClick={handleApply}>Appliquer</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MemberDropdown;
