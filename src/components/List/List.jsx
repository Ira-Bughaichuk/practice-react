import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


function List({listImg, openModal}) {
    return (

      <ListGroup as="ul">{listImg.map(item => (<ListGroup.Item  key={item} as="li" active>
              <Card style={{ width: '18rem' }}>
              <Card.Img onClick={ () => {openModal(item)}} variant="top" src={item} alt="img" />
              
          </Card>
              </ListGroup.Item> ))}
          
      </ListGroup>
            
  );
}

export default List;
