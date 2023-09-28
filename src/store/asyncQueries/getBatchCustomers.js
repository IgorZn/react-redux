import {addBatchCustomerAction} from "../customerReducer";

export const fetchBatchCustomers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch(addBatchCustomerAction(json))
            })
    }
}