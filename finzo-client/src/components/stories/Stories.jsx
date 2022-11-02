import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const stories = [
  {
    id: 1,
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 2,
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 3,
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 5,
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 6,
    name: "Jane Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const Stories = () => {

  const {currUser} = useContext(AuthContext)
  return (
    <div className="stories">
      <div className="story">
        <img src={currUser.dp} alt="pp" />
        <span>{currUser.userName}</span>
        <button>+</button>
      </div>
      {stories.map((story, id) => {
        return (
          <div className="story" key={id}>
            <img src={story.img} alt="sp" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
