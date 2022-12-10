
import React from 'react';
import Appbar from './Appbar';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Appbar/>
            {children}
            <Footer />
        </>
    );
};

export default Layout;