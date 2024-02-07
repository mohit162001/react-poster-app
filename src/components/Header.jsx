import React from "react";
import classes from "./header.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "./post-store/ul-slice";
function Header() {
    const disptach  = useDispatch();
    function handleModal(){
        disptach(uiActions.handleShowModal())
    }
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Reacr Post</h1>
      <p>
        <button onClick={handleModal} className={classes.button}>Add Post</button>
      </p>
    </header>
  );
}

export default Header;
