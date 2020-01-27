import { meals } from './food.data';
import { FOOD_TYPES } from './food.types';
import { addItemToCart, removeItemFromCart, addOne, changeSize } from './food.utlis';

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
		case FOOD_TYPES.PLUS_ONE:
			return {
				...state,
				meals: addOne(state.meals, action.payload)
			};
		case FOOD_TYPES.MINUS_ONE:
			return {
				...state,
				meals: state.meals.map(
					(meal) =>
						meal.id === action.payload.id && meal.number > 1 ? { ...meal, number: meal.number - 1 } : meal
				)
			};
		case FOOD_TYPES.CART_PLUS:
			return {
				...state,
				orders: state.orders.map(
					(order) => (order.id === action.payload.id ? { ...order, quantity: order.quantity + 1 } : order)
				)
			};
		case FOOD_TYPES.SIZE_CHANGE:
			return {
				...state,
				meals: changeSize(state.meals, action.payload, action.payload2)
			};
		case FOOD_TYPES.CLEAR_CART:
			return {
				...state,
				orders: []
			};
		default:
			return state;
	}
};
