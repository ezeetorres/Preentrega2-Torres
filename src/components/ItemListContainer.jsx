import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const allItems = [
  { id: 1, name: 'Cadena de plata', description: 'Esta chain es una de las estrellas dentro del universo Don Rouch. Es el emblema que se luce en su máxima expresión, y se conecta a lo más profundo de nuestra filosofía a través de la cadena, para que siempre sientas que 0800 DR te escucha y está cerca tuyo.', price: '$25', imageUrl: 'https://www.0800donrouch.com.ar/images/527/CHAIN_DE_ROQUE_PLATA_0800_DON_ROUCH2022-07-13-11-02-14am.jpg', category: 'plata' },
  { id: 2, name: 'Cadena de oro', description: 'Esta chain es una de las estrellas dentro del universo Don Rouch. Es el emblema que se luce en su máxima expresión, y se conecta a lo más profundo de nuestra filosofía a través de la cadena, para que siempre sientas que 0800 DR te escucha y está cerca tuyo.', price: '$125', imageUrl: 'https://www.0800donrouch.com/images/650/CHAIN_DE_ROQUE_ORO_0800_DON_ROUCH2022-07-13-10-47-56am.png', category: 'oro' },
  { id: 3, name: 'Cadena de oro rosa', description: 'Esta chain es una de las estrellas dentro del universo Don Rouch. Es el emblema que se luce en su máxima expresión, y se conecta a lo más profundo de nuestra filosofía a través de la cadena, para que siempre sientas que 0800 DR te escucha y está cerca tuyo.', price: '$175', imageUrl: 'https://www.0800donrouch.com/images/649/CHAIN_DE_ROQUE_ORO_ROSA_0800_DON_ROUCH2022-07-13-10-43-44am.png', category: 'oro-rosa' },
  { id: 4, name: 'Anillo de plata', description: 'La joya emblema de 0800 Don Rouch. Una pieza que vayas donde vayas será reconocida por todos, porque representa más que una marca. Este anillo es pasión, técnica, y estilo en perfecta combinación.', price: '$20', imageUrl: 'https://www.0800donrouch.com/images/634/0800_DON_ROUCH_PLATA_ANILLO_CLASICO2022-07-13-12-11-08pm.jpg', category: 'plata' },
  { id: 5, name: 'Anillo de oro', description: 'La joya emblema de 0800 Don Rouch. Una pieza que vayas donde vayas será reconocida por todos, porque representa más que una marca. Este anillo es pasión, técnica, y estilo en perfecta combinación.', price: '$100', imageUrl: 'https://www.0800donrouch.com/images/644/0800_DON_ROUCH_ANILLO_CLASICO_ORO2022-07-13-12-18-50pm.jpg', category: 'oro' },
  { id: 6, name: 'Anillo de oro rosa', description: 'La joya emblema de 0800 Don Rouch. Una pieza que vayas donde vayas será reconocida por todos, porque representa más que una marca. Este anillo es pasión, técnica, y estilo en perfecta combinación.', price: '$150', imageUrl: 'https://www.0800donrouch.com.ar/images/525/ANILLO_CLASICO_ORO_ROSA_0800_DON_ROUCH2022-07-13-12-06-42pm.png', category: 'oro-rosa' },
];

function ItemListContainer() {
  const { categoryId } = useParams();

  const items = categoryId
    ? allItems.filter(item => item.category === categoryId)
    : allItems;

  return (
    <Container>
      <Row>
        {items.map(item => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text-muted">{item.price}</Card.Text>
                <Button variant="primary" href={`/item/${item.id}`}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
