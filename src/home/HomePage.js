import React from "react";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Authers from "./../authers/Authers";
import Blogs from "./../components/layout/blog/Blogs";

const HomePage = () => {
  return (
    <div >
      <Container maxWidth="lg"  >
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={3} mt={4}>
            <Typography component="h3" variant="h5" mb={3} >
              نویسندگان
            </Typography>
            <Authers></Authers>
          </Grid>
          <Grid item xs={12} md={9} mt={4}>
            <Typography component="h3" variant="h5" mb={3}>
              مقالات
            </Typography>
            <Blogs></Blogs>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
