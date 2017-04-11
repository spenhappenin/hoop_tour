import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const App = ({ children }) => (
  <div>
    <Nav />
    { children }
    <Footer />
  </div>
)

export default App;

