import { createSelector } from 'reselect';

const selectShop = state => state.shopReducer;

export const selectCollection = createSelector(
	[selectShop],
	shopReducer => shopReducer.collections
);