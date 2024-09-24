import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

// Datos de ejemplo para los productos
const items = [
  { id: 1, name: 'Item 1', description: 'Detailed description for Item 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item 2', description: 'Detailed description for Item 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item 3', description: 'Detailed description for Item 3', price: '$30', imageUrl: 'https://via.placeholder.com/150' },
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const item = items.find(i => i.id === parseInt(itemId));

  if (!item) return <div>Item not found</div>;

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={item.imageUrl} alt={item.name} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="text-muted">{item.price}</Card.Text>
          <Button variant="secondary" href="/">Back to Catalog</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetailContainer;
