import Foto from '../../assets/pizza.png';

const INITIAL_STATE = {
	meals: [
		{
			id: 0,
			name: 'La Mafia',
			ingredients: [
				'sos',
				'ser',
				'cebula',
				'szynka',
				'boczek',
				'papryka',
				'czerwona cebula',
				'ogórek konserwowy'
			],
			price: 30,
			sizes: [ 30, 40, 50 ],
			image: Foto
		},
		{
			id: 1,
			name: 'La Mafia',
			ingredients: [
				'sos',
				'ser',
				'cebula',
				'szynka',
				'boczek',
				'papryka',
				'czerwona cebula',
				'ogórek konserwowy'
			],
			price: 30,
			sizes: [ 30, 40, 50 ],
			image: Foto
		},
		{
			id: 2,
			name: 'La Mafia',
			ingredients: [
				'sos',
				'ser',
				'cebula',
				'szynka',
				'boczek',
				'papryka',
				'czerwona cebula',
				'ogórek konserwowy'
			],
			price: 30,
			sizes: [ 30, 40, 50 ],
			image: Foto
		},
		{
			id: 3,
			name: 'La Mafia',
			ingredients: [
				'sos',
				'ser',
				'cebula',
				'szynka',
				'boczek',
				'papryka',
				'czerwona cebula',
				'ogórek konserwowy'
			],
			price: 30,
			sizes: [ 30, 40, 50 ],
			image: Foto
		},
		{
			id: 4,
			name: 'La Mafia',
			ingredients: [
				'sos',
				'ser',
				'cebula',
				'szynka',
				'boczek',
				'papryka',
				'czerwona cebula',
				'ogórek konserwowy'
			],
			price: 30,
			sizes: [ 30, 40, 50 ],
			image: Foto
		},
		{
			id: 5,
			name: 'La Mafia',
			ingredients: [
				'sos',
				'ser',
				'cebula',
				'szynka',
				'boczek',
				'papryka',
				'czerwona cebula',
				'ogórek konserwowy'
			],
			price: 30,
			sizes: [ 30, 40, 50 ],
			image: Foto
		}
	]
};

export const foodReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
