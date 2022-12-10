import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_DATA } from "../query/querty";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import sanitizeHtml from "sanitize-html";
import OtherPost from "./OtherPost";

const BlagPage = () => {
  const { slug } = useParams();

  const Navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_POST_DATA, {
    variables: { slug },
  });

  if (loading) return <p>Loading ....</p>;

  if (errors) return <p>Error .....</p>;

  const {
    authores: {
      name,
      autherPic: { url: authorurl },
      posts,
    },
    content,
    date,
    postPic: { url },
    title,
  } = data.post;

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography component="h2" variant="h4" color="primary">
            {title}
          </Typography>
          <KeyboardReturnOutlinedIcon
            onClick={() => {
              Navigate(-1);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="img"
            variant="img"
            src={url}
            width="100%"
            mt={6}
          ></Typography>
        </Grid>
        <Grid item xs={12} width="100%">
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
          ></div>
        </Grid>
        <Grid>
          <Typography component="h4" variant="h5" mt={6}>
           مقالات این نویسنده:
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {posts.map((itemPost) => (
          <Grid item xs={12} md={6} lg={4} key={itemPost.slug} mt={8}>
            <OtherPost
              title={itemPost.title}
              slug={itemPost.slug}
              urlPost={itemPost.postPic.url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlagPage;
