import React from 'react';
import Card from '@mui/material/Card'
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




const Cards = (props) => {
   const {authores:{autherPic:{url}, name}, postPic:{url:url2},slug, title}=props.data

//    console.log(url , url2)
    return (
        <div>
           <Card sx={{boxShadow:"1px 5px 12px rgba(0,0,0,0.2)", borderRadius:4}}> 
            <CardHeader avatar={
            
                <Avatar ><img src={url} style={{width:"50px"}} alt="pic"></img></Avatar> }
              title ={ <Typography component="p" variant="p" mr={1}>{name}</Typography>} 
             
           />
            <CardMedia component="img"
            height="194"
            image={url2}
            alt={slug}
            
            />
            <CardContent ><Typography component="h5" variant='h6' sx={{fontSize:"15px", fontWeight:"bold"}}>{title}</Typography></CardContent>
            <Divider variant='middle' />
            <Link to={`/blog/${slug}`}>
            <CardActions><Button fullWidth color="primary" variant='outlined' sx={{borderRadius:5, marginTop:2}} >مطالعه ی بیشتر </Button></CardActions>
            </Link>

           </Card>
            
        </div>
    );
};

export default Cards;