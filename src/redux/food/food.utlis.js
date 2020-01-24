export const addItemToCart = (orders, orderToAdd) => {
	const existingItem = orders.find((order) => order.id === orderToAdd.id);

	if (existingItem) {
		return orders.map((order) => (order.id === orderToAdd.id ? { ...order, quantity: order.quantity + 1 } : order));
	}

	return [ ...orders, { ...orderToAdd, quantity: 1 } ];
};

export const removeItemFromCart = (orders, orderToRemove) => {
	const exisitingItem = orders.find((order) => order.id === orderToRemove.id);

	if (exisitingItem.quantity === 1) {
		return orders.filter((order) => order.id !== orderToRemove.id);
	}

	return orders.map((order) => (order.id === orderToRemove.id ? { ...order, quantity: order.quantity - 1 } : order));
};
