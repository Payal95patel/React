import React from 'react';
import ReactDOM from 'react-dom/client';
import image1 from './flower1.jpg';
import image2 from './flower2.jpg';
import image3 from './flower3.jpg';
import Card from './Card';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Header/>
      <Navbar> </Navbar>
      <Card value="Rose" description="it colour is red" flowerimg={image1}/>
      <Card value="Sunflower" description="it colour is yellow" flowerimg={image2}/>
      <Card value="Lotus" description="it colour is pink" flowerimg={image3}/>
      <Footer/>
  </>
);



 