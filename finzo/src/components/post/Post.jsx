import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentOpen , setCommentOpen] = useState(false)

  const likehandle = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="pp" />
            <div className="details">
              <Link
                style={{ textDecoration: "none" }}
                to={`/profile/${post.userId}`}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">2 min ago</span>
            </div>
          </div>
          <div className="more">
            <div className="vr"></div>
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="postp" />
        </div>
        <div className="interact">
          <div className="item">
            {liked ? (
              <FavoriteOutlinedIcon onClick={likehandle} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={likehandle} />
            )}
            14 likes
          </div>
          <div className="item">
            <TextsmsOutlinedIcon onClick={()=>{setCommentOpen(!commentOpen)}} />
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {
          commentOpen && <Comments /> 
        }
      </div>
    </div>
  );
};

export default Post;
