import React from 'react';
import { Container,Navbar } from 'react-bootstrap';


function Layout({children}) {
  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
        
          <Navbar.Brand>Cake Stores</Navbar.Brand>
      </Navbar>
        <Container>{children}</Container>
      
    </div>
  )
}

export default Layout
