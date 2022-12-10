import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import { Container } from '@mui/system';

const Appbar = () => {
    return (

        <div style={{display:"flex"}}>
            <AppBar position='sticky' color="primary">
                <Container>
                <Toolbar>
                    <Typography component="h1" variant='h5' flex={1}>وبلاگ نیوز</Typography>
                    <StyleOutlinedIcon></StyleOutlinedIcon>

                </Toolbar>
                </Container>

            </AppBar>
        </div>
    );
};

export default Appbar;