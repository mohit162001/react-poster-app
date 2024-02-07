import React from "react";
import classes from "./modal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "./post-store/ul-slice";
function Modal({ children }) {
  const dispatch = useDispatch();
  function closeHandler(){
    dispatch(uiActions.handleShowModal())
  }
  return (
    <div className={classes.backdrop} onClick={closeHandler}>
      <div className={classes.modal}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
