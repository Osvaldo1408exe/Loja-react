import React from 'react';
import { Toast } from 'react-bootstrap';

const ToastCard = ({ header, body }) => {
  return (
    <div>
      <Toast>
        <Toast.Header>
          <strong className="me-auto">{header}</strong>
        </Toast.Header>
        <Toast.Body>
          {body}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default ToastCard;
