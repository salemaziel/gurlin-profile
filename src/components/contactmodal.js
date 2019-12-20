import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'



const Contactmodal = (props) => {
  const {
    buttonLabel,
    className,
    scrollable,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button class="button n04" onClick={toggle}>Contact</button>
      <Modal scrollable isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Contact</ModalHeader>
        <ModalBody style={{
            display: 'flex',
            justifyContent: 'center',
            }}>
    
        </ModalBody>
        <ModalFooter>
          {/**<Button color="warn" onClick={toggle}>Learn More</Button>{' '}**/}
          <button color="secondary" onClick={toggle}>Close</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Contactmodal