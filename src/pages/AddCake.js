import React, { useRef } from 'react';
import { Container,Form,Button, Col,Row } from 'react-bootstrap';
import { useCakeStore } from '../store/cakeStore';
import { useNavigate } from 'react-router-dom';



function AddCake() {

    
const addCakeApiCall=useCakeStore((state)=>state.AddCakeAPI);

const name = useRef("");
const cost = useRef("");
const imageUrl=useRef("");

const navigate=useNavigate();

const addCakeHandler = async () => {
    let payload = {
        name:name.current.value,
        cost:cost.current.value,
        imageUrl:imageUrl.current.value
    }
    await addCakeApiCall(payload);
    navigate('/');
}
  return (
    <div className='container'>
      <Container className='mt-2'>
        <Row>
            <Col className='col-md-8 offset-md-2'>
                <legend>Create A New Cake</legend>
                <Form.Group className='mb-3' controlId='forName'>
                    <Form.Label>Cake Name</Form.Label>
                    <Form.Control type='text' ref={name} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='forCost'>
                    <Form.Label>Cake Price</Form.Label>
                    <Form.Control type='text' ref={cost} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='forImageUrl'>
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type='text' ref={imageUrl} />
                </Form.Group>
                <Button variant='primary' onClick={addCakeHandler}>Add Cake</Button>
            </Col>
        </Row>
       
      </Container>
    </div>
  )
}

export default AddCake
