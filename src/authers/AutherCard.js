import React from "react";
import { Avatar, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const AutherCard = (props) => {
  const {
    autherPic: { url },
    name,
    slug,
  } = props.data;
  
  return (
    <>
      <div style={{ display: "flex" , margin:15}}>
       
          <Avatar >
            <img src={url} style={{ width: 50 }} alt={slug}></img>
          </Avatar>
          <Link to={`/author/${slug}`} style={{textDecoration:"none", color:"black"}} >
          <Typography component="p" variant="p" mt={1} mr={5}>
            {" "}
            {name}{" "}
          </Typography>
        </Link>
      </div>
      <Divider variant="middle" ></Divider>
    </>
  );
};

export default AutherCard;
