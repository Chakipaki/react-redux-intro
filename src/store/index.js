import { createStore } from 'redux';

// Changes Store Data
const counterReducer = (
    state = { counter: 0 },
    action
) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

// Create Redux Store
const store = createStore(counterReducer);

export default store;
