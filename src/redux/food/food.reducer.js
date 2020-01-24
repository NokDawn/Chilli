import { meals } from './food.data';
import { FOOD_TYPES } from './food.types';
import { addItemToCart, removeItemFromCart } from './food.utlis';

const INITIAL_STATE = {
	meals,
	orders: []
};

export const foodReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FOOD_TYPES.ADD_FOOD:
			return {
				...state,
				orders: addItemToCart(state.orders, action.payload)
			};
		case FOOD_TYPES.REMOVE_FOOD:
			return {
				...state,
				orders: state.orders.filter((order) => order.id !== action.payload.id)
			};
		case FOOD_TYPES.REMOVE_ONE:
			return {
				...state,
				orders: removeItemFromCart(state.orders, action.payload)
			};
		default:
			return state;
	}
};
