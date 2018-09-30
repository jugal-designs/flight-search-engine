import FLIGHTS from './flights-store';
const search = (state = {FLIGHTS}, action) => {
    switch (action.type) {
        case 'PRICE_FILTER':
            return {
                ...action,
                price: action.price
            }
        case 'ALL':
            return Object.assign({}, state, action);
        default:
            return Object.assign({}, state, action);
    }
}

export default search;