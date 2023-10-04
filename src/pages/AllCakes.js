import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import { useCakeStore } from '../store/cakeStore';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DeleteConfirmation from './DeleteConfirmation';



function AllCakes() {
  const allCake = useCakeStore((state)=>state.cakeData)
  const getCakesAPI = useCakeStore((state)=>state.getCakesAPI);
  const navigate = useNavigate();

  const [showModal,setShowModal] = useState(false);
  const [itemIdToDelete,setItemIdToDelete] = useState(0);

  const deleteCakeApiCall= useCakeStore((state)=>state.deleteCakeAPI);

  useEffect(()=>{
    if(allCake.length===0){
      getCakesAPI();
    }
   
  },[])

  const openConfirmationModalHandler = (id) => {
    setItemIdToDelete(id);
    setShowModal(true);
  }

  const closeConfirmationModalHandler = () => {
    setItemIdToDelete(0);
    setShowModal(false);
  }

  const deleteConfirmHandler = async () => {
    await deleteCakeApiCall(itemIdToDelete);
    setItemIdToDelete(0);
    setShowModal(false);
  }
   
  return (
    <>
    <DeleteConfirmation 
    showModal={showModal} 
    title="Delete Confirmation" 
    body="Are you sure to delte this item?"
    closeConfirmationModalHandler={closeConfirmationModalHandler} 
    deleteConfirmHandler={deleteConfirmHandler} >

    </DeleteConfirmation>
    <Container className='mt-3'>
    <Row>
      <Col>
      <Button variant='primary' onClick={()=>navigate('/addcake')}>Add Cake</Button>
      </Col>
    </Row>
    
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
              <Button variant='primary' type="button" onClick={()=>navigate(`/editcake/${cake.id}`)}>Edit</Button>
              <Button variant='danger' type="button" style={{margin:"10px"}} onClick={()=>openConfirmationModalHandler(cake.id)}>Delete</Button>
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
