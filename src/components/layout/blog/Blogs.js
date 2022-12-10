import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOG_Data } from '../query/querty';
import Cards from './Card';
import { Grid } from '@mui/material';


const Blogs = () => {
   const {loading , data, errors}=useQuery(GET_BLOG_Data)
   if(loading) return <p>Loading ....</p>
   
   if (errors) return <p>Error .....</p>
      
  const data1=[...data.posts]
   
   
    return (
        <div>
            <Grid container spacing={2}>
            {data1.map(item=><Grid item xs={12} md={6} lg={4} key={item.id}><Cards  data={{...item}}/></Grid>)}
            </Grid>
        </div>
    );
};

export default Blogs;