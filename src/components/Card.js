
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';




const Card = ({ product }) => {
  return (
    <div>
      <Card style={{ width: '18rem', marginTop: '2rem' }}>
       
      <Image  />
      <Card.Body>
        <Card.Title> 
          <Name/>  
        </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <Price />

        <Button variant="primary"> Learn More </Button>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default Card;
