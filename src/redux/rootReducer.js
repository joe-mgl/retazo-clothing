import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import dirReducer from './directory/dirReducer';
import shopReducer from './shop/shopReducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cartReducer']
}

const rootReducer = combineReducers({
	userReducer,
	cartReducer,
	dirReducer,
	shopReducer
})



export default persistReducer(persistConfig, rootReducer);