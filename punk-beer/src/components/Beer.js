
import {Card, CardBody, CardTitle, CardText, Button, Col, Row} from 'reactstrap'



export default function Beer(props){
    return (
        <Card className="col-sm-12 col-md-6 col-lg-4 mt-5 mx-auto">
        <CardBody>        
          <CardTitle tag="h5">
            {props.title}           
          
          </CardTitle>
        </CardBody>
        <Row>
        <Col cs="4"> 
        <img
          alt="Card cap"
          src= {props.img}
          height={350}          
        />
         </Col>

        <CardBody>
        <Col className="d-flex flex-column">
          <CardText>
            {props.descripcion}
          </CardText></Col>
          <CardText >                       
          <h2 className="text-muted"> Price: ${props.price} </h2>
          </CardText>
          <div className="mt-auto">
            <h2>
              <Button color="info" outline onClick={(e) => props.onAddToCart(e)}>Agregar al Wish List</Button>
              <Button color="primary" outline onClick={(e) => props.onAddToCart(e)}>Agregar al carrito</Button>
            </h2>
            </div>
          
        </CardBody>
        </Row>
      </Card>
      
    );
}