
import { Input } from "reactstrap";

export default function BeerSearch(props){


    return (

        <div className="col-md-6 mt-4 mx-auto">
            <h5>Busca tu cervez favorita</h5>
            <input placeholder="Buscar..." onKeyUp={(e) => props.onfilterBeer(e)}/>
            <small className="float-start text muted">Filtrado por:{props.filter}</small>

        </div>
    )
}
