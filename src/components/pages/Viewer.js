import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Misc from '../../components/viewer/Misc';
import Cinema from '../../components/viewer/Cinema';
import Showtimes from '../../components/viewer/Showtimes';
import { useParams } from 'react-router-dom';

const Viewer = () => {
  let { id } = useParams();
  const jsonFile = require(`../../json/${id}.json`);
  console.log(jsonFile);

  console.log(id);
  return (
    <Container className='main'>
      <Row>
        <Col>
          <h1 className='header'>Viewer</h1>
        </Col>
      </Row>
      <Row className='misc'>
        <Misc jsonFile={jsonFile} />
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
