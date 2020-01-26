export const addItemToCart = (orders, orderToAdd) => {
	const existingItem = orders.find((order) => order.id === orderToAdd.id && order.price === orderToAdd.price);

	if (existingItem) {
		return orders.map(
			(order) => (order.id === orderToAdd.id ? { ...order, quantity: order.quantity + order.number } : order)
		);
	}

	return [ ...orders, { ...orderToAdd, quantity: orderToAdd.number } ];
};

export const removeItemFromCart = (orders, orderToRemove) => {
	const exisitingItem = orders.find((order) => order.id === orderToRemove.id);

	if (exisitingItem.quantity === 1) {
		return orders.filter((order) => order.id !== orderToRemove.id);
	}

	return orders.map((order) => (order.id === orderToRemove.id ? { ...order, quantity: order.quantity - 1 } : order));
};

export const addOne = (meals, mealToAdd) => {
	const existingItem = meals.find((meal) => meal.id === mealToAdd.id);

	if (existingItem.number >= 1) {
		return meals.map((meal) => (meal.id === mealToAdd.id ? { ...meal, number: meal.number + 1 } : meal));
	}

	return [ ...meals, { ...mealToAdd, number: 1 } ];
};

export const changeSize = (meals, mealToFind, sizeToFind) => {
	const exisitingItem = meals.find((meal) => meal.id === mealToFind.id);

	if (exisitingItem) {
		return meals.map((meal) => {
			if (meal.id === mealToFind.id) {
				if (sizeToFind === 30) {
					return { ...meal, price: meal.low_price };
				} else if (sizeToFind === 40) {
					return { ...meal, price: meal.medium_price };
				} else if (sizeToFind === 50) {
					return { ...meal, price: meal.big_price };
				}
			}
			return meal;
		});
	}

	return [ ...meals ];
};
