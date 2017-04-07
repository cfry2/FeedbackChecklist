import { routerReducer } from 'react-router-redux';

export const initialState = { };

export default function reducer(state = initialState, action) {
    return {
        routing : routerReducer(state.routing, action)
    };
}