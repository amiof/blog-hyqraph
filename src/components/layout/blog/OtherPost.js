import React from "react";
import Card from "@mui/material/Card";
import {
  Typography,
  Divider,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const OtherPost = (props) => {
  console.log("rrrrrrrrr", props);

  const { urlPost, slug, title } = props;
  return (
    <>
      <Card sx={{ boxShadow: "1px 5px 12px rgba(0,0,0,0.2)", borderRadius: 4 }}>
        <CardMedia component="img" height="194" image={urlPost} alt={slug} />
        <CardContent>
          {" "}
          <Typography component="h4" variant="h8" mt={2}>
            {title}
          </Typography>
        </CardContent>
        <Divider variant="middle" mt={1}></Divider>
        <Link to={`/blog/${slug}`}>
          <CardActions mt={2}>
            <Button variant="outlined" fullWidth sx={{ borderRadius: 4 }}>
              مطالعه
            </Button>{" "}
          </CardActions>
        </Link>
      </Card>
    </>
  );
};

export default OtherPost;
