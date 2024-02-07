import React from "react";

import PostDispaly from "./components/PostDispaly";

import NewPost from "./components/NewPost";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

function App() {
  const isModal = useSelector((state)=>state.ui.showModal)
  return (
    <main>
      <Header />
      {isModal && (
        <Modal >
          <NewPost />
        </Modal>
      )}
      <PostDispaly />
    </main>
  );
}

export default App;
