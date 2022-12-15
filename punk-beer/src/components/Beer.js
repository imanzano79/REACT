
import {Card, CardBody, CardTitle, CardText, CardLink} from 'reactstrap';


function Beer(props){
    return(
    <Card className= "col-3 pe-0">
    <CardBody>
        <CardTitle tag="h5">
      {props.title}

        </CardTitle>    
  </CardBody>
  <img
    alt="Card cap"
    src={props.img}
    width="100%"
    height="700px"

  />
  <CardBody>
    <CardText>
        {props.descripcion}
    </CardText>
    <CardLink href="#">
        {props.price}
    </CardLink>
   
  </CardBody>
</Card>
    );
}
