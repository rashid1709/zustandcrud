import React, { useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useCakeStore } from '../store/cakeStore';

function AllCakes() {
  const allCake = useCakeStore((state)=>state.cakeData)
  const getCakesAPI = useCakeStore((state)=>state.getCakesAPI)

  useEffect(()=>{
    getCakesAPI();
  },[])
   
  return (
    <>
    <Container className='mt-3'>

    
     <Row xs={1} md={3} className="g-4">
      {
      allCake.map((cake) => (
        <Col key={cake.id}>
          <Card>
            <Card.Img 
            variant="top" 
            src={cake.imageUrl} 
            style={{height:400,width:"100%"}} 
            />
            <Card.Body>
              <Card.Title>{cake.name}</Card.Title>
              <Card.Text>
               Price:  {cake.cost}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default AllCakes
