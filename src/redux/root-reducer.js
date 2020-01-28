import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { foodReducer } from './food/food.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'food' ]
};

const rootReducer = combineReducers({
	food: foodReducer
});

export default persistReducer(persistConfig, rootReducer);
