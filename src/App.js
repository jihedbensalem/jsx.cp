import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Image from './components/Image';
import Description from './components/Description';
import Price from './components/Price';


const firstName = "jihed";

const App = () => {
  return (
    <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/516/638/343/bmw-bmw-bmw-m4-hd-wallpaper-preview.jpg" />
            <Card.Body>
              <Card.Title>
                <Name />
              </Card.Title>
              <Card.Text>
                <Description />
              </Card.Text>
              <Price /> <br /> <br />
              <Button variant="primary">Buy from here</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p>
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;



