import { createSelector } from 'reselect';

const selectorFood = (state) => state.food;

export const selectorMeals = createSelector([ selectorFood ], (food) => food.meals);
