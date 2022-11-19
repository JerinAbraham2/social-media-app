import { Button, Input } from "@mantine/core";
import React from "react";
import { Edit } from "react-feather";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Edit className="feed__editIcon"/>
          <form>
            <Input />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
