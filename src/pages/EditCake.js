import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container,Form,Button, Col,Row } from 'react-bootstrap';
import { getCakeById, useCakeStore } from '../store/cakeStore';

function EditCake() {
    const {id} = useParams();
    const cakeToEdit = useCakeStore(getCakeById(id));
    const updateApiCall = useCakeStore((state)=>state.updateCakeAPI);

    const navigate = useNavigate();

const name = useRef("");
const cost = useRef("");
const imageUrl=useRef("");

useEffect(()=>{
    if(cakeToEdit) {
        name.current.value = cakeToEdit.name;
        cost.current.value = cakeToEdit.cost;
        imageUrl.current.value = cakeToEdit.imageUrl;
    }
},[cakeToEdit])

const updateHandler = async () => {
    let payload = {
        name:name.current.value,
        cost:cost.current.value,
        imageUrl:imageUrl.current.value,
        id:Number(id)
    };
    await updateApiCall(payload);
    navigate('/');
}

  return (
    <div className='container'>
      <Container className='mt-2'>
        <Row>
            <Col className='col-md-8 offset-md-2'>
                <legend>Update A  Cake</legend>
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
                <Button variant='primary' onClick={updateHandler}>Update Cake</Button>
            </Col>
        </Row>
       
      </Container>
    </div>
  )
}

export default EditCake
