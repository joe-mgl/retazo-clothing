import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import dirReducer from './directory/dirReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartReducer']
}

const rootReducer = combineReducers({
	userReducer,
	cartReducer,
	dirReducer
})



export default persistReducer(persistConfig, rootReducer);