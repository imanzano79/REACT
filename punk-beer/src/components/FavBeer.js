

import { AlignCenter } from 'react-bootstrap-icons';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from 'reactstrap';

function FavBeer (props) {
    return(

<Card
  style={{
    width: '18rem'
    
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Our Favorite Beer
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://images.punkapi.com/v2/4.png"
    width="50%"
  />
  <CardBody>
    <CardText>
    "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch."
    </CardText>
    <CardLink href="#">
    Price: 17.5
    </CardLink>
    <CardLink href="#">
      
    </CardLink>
  </CardBody>
</Card>
);
}

export default FavBeer;


