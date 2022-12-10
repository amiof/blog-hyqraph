
import React from 'react';

import HomePage from './home/HomePage';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import BlagPage from './components/layout/blog/BlagPage';
import AuthorPage from './authers/AuthorPage';




function App() {


  return (
    <>
        <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:slug' element={<BlagPage/>} />
        <Route path='/author/:slug' element={<AuthorPage/>} />
         
       </Routes>
        
        </Layout>
    </>
  );
}

export default App;
