import React from 'react'
import {createPortal} from 'react-dom'
import classes from './Modal.module.css'
const Backdrop = (props)=>{
    return<div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props =>{
  return <div className={classes.modal}>
    <div>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('modal')

const Modal = (props) => {
  return (
    <>
      {createPortal((<Backdrop onClose={props.onClose}/>), portalElement)}
      {createPortal((<ModalOverlay>{props.children}</ModalOverlay>),portalElement)}
    </>
  )
}

export default Modal