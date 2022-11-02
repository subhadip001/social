import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const posts = [
  {
    id: 1,
    name: "Bilie Doe",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    name: "Jane Doe",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post, id) => {
        return <Post post={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
