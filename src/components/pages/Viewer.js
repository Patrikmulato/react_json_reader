import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cinema from './viewer/Cinema';
import { useParams } from 'react-router-dom';
import Showtimes from './viewer/Showtimes';

const Viewer = () => {
  let { id } = useParams();
  const jsonFile = require(`../../json/${id}.json`);
  return (
    <Container className='main'>
      <Row>
        <Col>
          <h1 className='header'>Viewer</h1>
        </Col>
      </Row>

      <Row>
        <Cinema jsonFile={jsonFile} />
      </Row>

      <Row>
        <Showtimes jsonFile={jsonFile} />
      </Row>
    </Container>
  );
};

export default Viewer;
