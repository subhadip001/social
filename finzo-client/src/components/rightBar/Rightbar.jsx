import React from "react";
import "./rightbar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="pp"
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="pp"
              />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activites</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="pp"
              />
              <p>
                <span>Jane Doe</span> changed her cover photo
              </p>
            </div>
            <span id="time">1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="pp"
              />
              <p>
                <span>Jane Doe</span> changed her cover photo
              </p>
            </div>
            <span id="time">1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="pp"
              />
              <p>
                <span>Jane Doe</span> changed her cover photo
              </p>
            </div>
            <span id="time">1 min ago</span>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                alt="pp"
              />
              <p>
                <span>Jane Doe</span> changed her cover photo
              </p>
            </div>
            <span id="time">1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online friends</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="pp"
              />
              <div className="online" />
              <span>Mary Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="pp"
              />
              <div className="online" />
              <span>Mary Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="pp"
              />
              <div className="online" />
              <span>Mary Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
