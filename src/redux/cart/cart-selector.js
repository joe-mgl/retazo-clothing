import { createSelector } from 'reselect';

const selectCart = state => state.cartReducer;

export const selectCartItems = createSelector(
	[selectCart],
	cartReducer => cartReducer.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce(( totalItems, cartItem ) =>
		cartItem.quantity + totalItems,
		0
	)
);

export const selectCartHidden = createSelector(
	[selectCart],
	cartReducer => cartReducer.hidden
);

export const selectCartTotal = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce(( totalItems, cartItem ) =>
		totalItems + cartItem.quantity * cartItem.price,
		0
	)
);