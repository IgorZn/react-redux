const defaultState = {
    customer: [],
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return {...state, cash: state.customer.push(action.payload)}
        case "GET_CUSTOMERS":
            return {...state, cash: state.customer.pop(action.payload)}


        default:
            return state
    }
}