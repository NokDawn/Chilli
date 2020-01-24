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
