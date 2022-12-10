import { Grid } from '@mui/material';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHERS_DATA } from '../components/layout/query/querty';
import AutherCard from './AutherCard';



const Authers = () => {
    const {loading , data, errors}=useQuery(GET_AUTHERS_DATA)

    if(loading) return <p>Loading ....</p>
   
    if (errors) return <p>Error .....</p>
    
    const Data=data.authores1
       
    return (
        <>
            <Grid container sx={{boxShadow:"1px 5px 12px rgba(0,0,0,0.2)", borderRadius:4} } >
              
            {Data.map(dataItem=><Grid key={dataItem.id} item xs={12} mt={4}><AutherCard  data={{...dataItem}}/></Grid> 

            )}

            </Grid>
            </>
        );
};

export default Authers;