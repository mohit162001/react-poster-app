import React from "react";
import classes from "./newPost.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "./post-store/ul-slice";
import { useMutation } from "@tanstack/react-query";
import { updatedPost } from "../fetc-query/http";
import { queryClient } from "../fetc-query/http";
function NewPost() {

  const {mutate} = useMutation({
    mutationFn: (data)=> updatedPost(data), 
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ['posts']})
    }
  })

  const dispatch = useDispatch();
  function handleModal() {
    dispatch(uiActions.handleShowModal());
  }

  function handleSubmitt(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const postData = {
      body: data.get("text").trim(),
      author:data.get("name") ,
    };
    mutate(postData);
    dispatch(uiActions.handleShowModal())
  }
  return (
    <form onSubmit={handleSubmitt} className={classes.form}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="enter name..."
      />
      <label htmlFor="">Text</label>
      <textarea
        type="textarea"
        name="text"
        rows={3}
        id="text"
        required
        placeholder="Write what's in your mind..."
      />
      <div className={classes.actions}>
        <button type="button" onClick={handleModal}>
          Cancle
        </button>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default NewPost;
 