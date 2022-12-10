import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../components/layout/query/querty';
import { Container } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import OtherPost from '../components/layout/blog/OtherPost';

const AuthorPage = () => {
    const { slug }= useParams()
                
    const {loading , data, errors}=useQuery(GET_AUTHOR_INFO, {
        variables:{slug}
    })
    // console.log(slug)

    if (loading) return <p>Loading ....</p>;

    if (errors) return <p>Error .....</p>;
    console.log(data)
    const {autherPic:{url}, name,posts }=data.authores1[0]
    console.log(posts)

    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12} display="flex" justifyContent="center" mt={10}><Avatar src={url} sx={{width:"300px" , height:"300px", alignItem:"center"}} ></Avatar></Grid>
                    <Grid item xs={12} textAlign="center"><Typography component="h3" variant='h5' mt={5} >{name}</Typography></Grid>
                    <Grid item xs={12} ><Typography component="h3" variant='h5' mt={5} > درباره ی من:</Typography></Grid>
                    <Grid item xs={12} ><Typography component="h3" variant='h5' mt={5} > مقالات من:</Typography></Grid>
                    <Grid container spacing={5}>
                      {posts.map((item,index)=><Grid item xs={12} md={6} lg={4} mt={10}><OtherPost slug={item.slug} title={item.title} urlPost={item.postPic.url}/></Grid>)}  </Grid>
                </Grid>
                
            </Container>
        </>
    );
};

export default AuthorPage;