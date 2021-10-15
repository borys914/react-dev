import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import BlackBack from '../Modal/BlackBack';
import './index.css';

const Cart = (props) => {
  const {
    meetupId,
    deleteHandle
  } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const deleteHandleModal = () => {
    setModalIsOpen(true)
  }
  
  const editeHandleModal = () => {
    setEditModalIsOpen(true)
  }

  const modalClose = () => {
    setModalIsOpen(false)
    setEditModalIsOpen(false)
  }

  return(
    <div className="cart">
      { props.children }
      <hr/>
      <button className="edit-btn" onClick={editeHandleModal}>Edit</button>
      <button className="del-btn" onClick = {deleteHandleModal}>DELETE</button>
      {modalIsOpen && <Modal closeHandleClick={modalClose}  deleteHandleClick ={() => deleteHandle(meetupId) }/>}
      {(modalIsOpen || editModalIsOpen) && <BlackBack closeHandleClick={modalClose}/>}
    </div>
  );
}
export default Cart