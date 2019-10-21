import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import output from '../../json/pl_pl-palac-art.json';
// Importing all json
const importAll = r => r.keys().map(r);

const jsonFiles = importAll(require.context('../../json', false, /\.json$/));

console.log(jsonFiles);
const Home = () => {
  console.log(output);
  return (
    <div>
      <Container className='main'>
        <Row>
          <Col>
            <h1 className='header'>Review Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Waiting for review:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {jsonFiles.map(jsonfile => (
              <ul>
                <li>
                  <a href={jsonfile.crawler.id}>{jsonfile.cinema.name}</a>
                </li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
