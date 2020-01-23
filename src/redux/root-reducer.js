import { combineReducers } from 'redux';

import { foodReducer } from './food/food.reducer';

export default combineReducers({
	food: foodReducer
});
