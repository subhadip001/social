import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./leftbar.scss";

const itemlist = [
  {
    url: "https://cdn-icons-png.flaticon.com/512/3220/3220733.png",
    name: "Friends",
  },
  {
    url: "https://cdn-icons-png.flaticon.com/512/719/719726.png",
    name: "Groups",
  },
  {
    url: "https://cdn-icons-png.flaticon.com/512/3773/3773001.png",
    name: "Marketplace",
  },
  {
    url: "https://cdn-icons-png.flaticon.com/512/3028/3028390.png",
    name: "Watch",
  },
  {
    url: "https://cdn-icons-png.flaticon.com/512/3066/3066491.png",
    name: "Memories",
  },
];

const Leftbar = () => {

  const {currUser} = useContext(AuthContext)

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currUser.dp}
              alt="pp"
            />
            <span>{currUser.userName}</span>
          </div>

          {itemlist.map((item, id) => {
            return (
              <div className="item" key={id}>
                <img src={item.url} alt={item.name} key={id} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcurts</span>
          {itemlist.map((item, id) => {
            return (
              <div className="item" key={id}>
                <img src={item.url} alt={item.name} key={id} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="menu">
          <span>Ohers</span>
          {itemlist.map((item, id) => {
            return (
              <div className="item" key={id}>
                <img src={item.url} alt={item.name} key={id} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
