import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

export default function App() {
  //return <Post />;
  // lifted from postList
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  // add to show our Post form
  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}


