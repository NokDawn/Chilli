import { FOOD_TYPES } from './food.types';

export const addFood = (food) => ({
	type: FOOD_TYPES.ADD_FOOD,
	payload: food
});

export const removeFood = (food) => ({
	type: FOOD_TYPES.REMOVE_FOOD,
	payload: food
});

export const removeOne = (food) => ({
	type: FOOD_TYPES.REMOVE_ONE,
	payload: food
});

export const plusOne = (food) => ({
	type: FOOD_TYPES.PLUS_ONE,
	payload: food
});

export const minusOne = (food) => ({
	type: FOOD_TYPES.MINUS_ONE,
	payload: food
});

export const cartPlus = (food) => ({
	type: FOOD_TYPES.CART_PLUS,
	payload: food
});

export const changeSize = (food, size) => ({
	type: FOOD_TYPES.SIZE_CHANGE,
	payload: food,
	payload2: size
});

export const clearCart = () => ({
	type: FOOD_TYPES.CLEAR_CART
});
