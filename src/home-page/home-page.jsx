import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DATA = {
  data: [
    {
      id: 1,
      metric_name: "Message sent",
      metric_description: "How many messages are been sent in the Discord Server",
      metric_value: 12690,
    },
    {
      id: 2,
      metric_name: "Reactions used",
      metric_description: "How many reactions are been used in the Discord Server",
      metric_value: 96380,
    },
    {
      id: 3,
      metric_name: "Active users",
      metric_description: "How many users are active in the Discord Server",
      metric_value: 670,
    },
        {
      id: 4,
      metric_name: "Links sent",
      metric_description: "How many links are been sent in the Discord Server",
      metric_value: 8690,
    },
    {
      id: 5,
      metric_name: "GIFs sent",
      metric_description: "How many GIFs are been used in the Discord Server",
      metric_value: 1200,
    },
    {
      id: 6,
      metric_name: "Channels",
      metric_description: "How many channels in the Discord Server",
      metric_value: 18,
    },
    {
      id: 7,
      metric_name: "Inactive users",
      metric_description: "How many users are inactive in the Discord Server",
      metric_value: 11,
    }
  ]
};

const HomePage = () => {
  const { data } = DATA;
  return (
    <Container>
      <Row>
        {
          data.map(metric => (
            <Col key={metric.id} lg={4} sm={12}>
              <Card style={{
                margin: "10px",
              }}>
                <Card.Body>
                  <Card.Title>{metric.metric_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{metric.metric_description}</Card.Subtitle>
                  <Card.Text style={{
                    fontSize: "2rem",
                  }}>{metric.metric_value}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default HomePage;