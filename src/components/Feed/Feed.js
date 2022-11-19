import { Button, Input } from "@mantine/core";
import React, { useState } from "react";
import { AlignJustify, Calendar, Edit, Image, Video } from "react-feather";
import "./Feed.css";
import InputOption from "./InputOption/InputOption";
import Post from "./Post/Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const handleSendPost = (e) => {
    e.preventDefault();
    setPosts(...posts)
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Edit className="feed__editIcon" />
          <form onSubmit={handleSendPost}>
            <Input variant="unstyled" size="md" className="feed__inputField" placeholder="what are you thinking?" />
            <Button type="submit" size="sm" color="gray">
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
      {posts.map((post) => (
        <Post />
      ))}
      <Post name="Tobi Turner" description="this is a test" message="wow this works" />
    </div>
  );
};

export default Feed;
