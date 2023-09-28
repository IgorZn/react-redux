import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Row, Col} from 'react-bootstrap';
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchBatchCustomers} from "./store/asyncQueries/getBatchCustomers";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 5})
    }

    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 5})
    }

    const addClient = () => {
        const name = 'Client__' + Date.now().toString().slice(5,)

        dispatch(addCustomerAction({id: Date.now(), name}))
    }

    const addBatchClients = () => {
        dispatch(fetchBatchCustomers())
    }

    const removeClient = (clientId) => {
        dispatch(removeCustomerAction(clientId))
    }

    return (
        <Container fluid>
            <Row>
                <Col className="justify-content-center">
                    <div className="fs-4">{cash}</div>

                    <Button onClick={() => addCash()} as="a" variant="primary">
                        Add Cash
                    </Button>{' '}

                    <Button onClick={() => getCash()} as="a" variant="success">
                        Get Cash
                    </Button>{' '}

                    <Button onClick={() => addClient()} as="a" variant="warning">
                        Add Client
                    </Button>{' '}

                    <Button as="a" variant="warning">
                        Remove Client
                    </Button>{' '}

                    <Button onClick={() => addBatchClients()} as="a" variant="warning">
                        Add Batch Client
                    </Button>{' '}

                </Col>
            </Row>
            <Row>
                {customers.length > 0 ?
                    <div>
                        {customers.map(client =>
                            <div className={client.id} onClick={() => removeClient(client.id)}>{client.name}</div>
                        )}
                    </div>
                    :
                    <div className="fs-4">
                        No clients.
                    </div>
                }
            </Row>
        </Container>
    );
}

export default App;
