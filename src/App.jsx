import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const teamMembers = [
  { id: 1, name: 'John Doe', photo: '/path/to/photo1.jpg', details: 'Detailed info about John.' },
  { id: 2, name: 'Jane Smith', photo: '/path/to/photo2.jpg', details: 'Detailed info about Jane.' },
  // Add more members
];

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [show, setShow] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setShow(true);
  };

  const handleClosePopup = () => {
    setShow(false);
    setSelectedMember(null);
  };

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {teamMembers.map(member => (
          <div className="col" key={member.id}>
            <div className="card" style={{ cursor: 'pointer' }} onClick={() => handleCardClick(member)}>
              <img src={member.photo} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMember?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedMember?.photo} alt={selectedMember?.name} className="img-fluid rounded-circle mb-3" />
          <p>{selectedMember?.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeamSection;
