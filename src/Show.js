import { ListGroup,Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const Show = (props) => {


    return(
    <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
            <ListGroup.Item> {props.companyname} </ListGroup.Item>
            <ListGroup.Item>{props.name}</ListGroup.Item>
            <ListGroup.Item>{props.email}</ListGroup.Item>
        </ListGroup>
    </Card>
    )

}

export default Show