// src/components/navbar/Modal/Modal.jsx
import { useState, useEffect } from 'react';
import { ModalContainer, ModalContent } from './ModalCartStyles';

const Modal = ({ message, duration = 2000 }) => {
  const [show, setShow] = useState(true);
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => setHidden(true), 300);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  if (hidden) return null;
  
  return (
    <ModalContainer show={show} hidden={hidden}>
      <ModalContent>
        <p>{message}</p>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;