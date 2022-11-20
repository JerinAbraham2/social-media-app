import { Avatar } from "@mantine/core";
import { MessageCircle, Send, Share2, ThumbsUp } from "react-feather";
import InputOption from "../InputOption/InputOption";
import "./Post.css";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbsUp} name="Like" color="#899499" />
        <InputOption Icon={MessageCircle} name="Comment" color="#899499" />
        <InputOption Icon={Share2} name="Share" color="#899499" />
        <InputOption Icon={Send} name="Send" color="#899499" />
      </div>
    </div>
  );
});

export default Post;
