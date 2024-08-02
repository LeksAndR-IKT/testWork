import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ message, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Подтверждение</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;