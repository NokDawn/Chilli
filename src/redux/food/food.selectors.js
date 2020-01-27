import { createSelector } from 'reselect';

const selectorFood = (state) => state.food;

export const selectorMeals = createSelector([ selectorFood ], (food) => food.meals);

export const selectorOrders = createSelector([ selectorFood ], (food) => food.orders);

export const selectorTotalValue = createSelector([ selectorOrders ], (orders) =>
	orders.reduce((acc, value) => acc + value.price * value.quantity, 0)
);

export const selectorTotalItems = createSelector([ selectorOrders ], (orders) =>
	orders.reduce((acc, order) => acc + order.quantity, 0)
);
