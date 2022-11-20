import { Button, Input } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { AlignJustify, Calendar, Edit, Image, Video } from "react-feather";
import { db } from "../firebase";
import "./Feed.css";
import InputOption from "./InputOption/InputOption";
import Post from "./Post/Post";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const handleSendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Edit className="feed__editIcon" />
          <form onSubmit={handleSendPost}>
            <Input
              variant="unstyled"
              size="md"
              className="feed__inputField"
              placeholder="what are you thinking?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button type="submit" size="sm" color="gray" className="feed__button">
              Send
            </Button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} name="Image" color="#70B5F9" />
          <InputOption Icon={Video} name="Video" color="#4F7942" />
          <InputOption Icon={Calendar} name="Event" color="#E4D00A" />
          <InputOption Icon={AlignJustify} name="Write Article" color="#FF5733" />
        </div>
      </div>
      {/* posts */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
      ))}
      {/* <Post name="Tobi Turner" description="this is a test" message="wow this works" /> */}
      </FlipMove>
    </div>
  );
};

export default Feed;
