import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Row, Col} from 'react-bootstrap';

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 5})
    }

    const getCash = () => {
        dispatch({type: "GET_CASH", payload: 5})
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
                </Col>
            </Row>
        </Container>
    );
}

export default App;
