const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const ADD_BATCH_CUSTOMER = "ADD_BATCH_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_BATCH_CUSTOMER:
            console.log(...state.customers, action.payload)
            return {...state, customers: [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(el => el.id !== action.payload)}

        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addBatchCustomerAction = (payload) => ({type: ADD_BATCH_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})