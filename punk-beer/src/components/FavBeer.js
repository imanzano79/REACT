

import {Card, CardTitle, CardText, Col, Row, CardHeader, Button} from 'reactstrap'


function FavBeer(props){
    return (
      <Card className="col-sm-12 col-md-6 col-lg-4 mt-5 mx-auto">
        <CardHeader>
          Our favorite Beer Today
        </CardHeader>
        <Row>
          <Col xs="4"> 
          <img src="https://images.punkapi.com/v2/8.png" height={350} />
          </Col>
          <Col className="d-flex flex-column">
            <CardTitle>
            Fake Lager
            </CardTitle>
            <CardText>
              Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager.
            </CardText>
            <div className="mt-auto">
            <h2>
              <small className="text-muted"><del>$4.7</del></small>
              <small>/$4.4</small>
              <Button color="info" outline>Agregar al Wish List</Button>
              <Button color="primary" outline onClick={(e) => props.onAddToCart(e)}>Agregar al carrito</Button>
            </h2>
            </div>
          </Col>
        </Row>
      </Card>

    )


    
    
}










export default FavBeer;

