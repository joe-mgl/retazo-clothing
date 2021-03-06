import { createSelector } from 'reselect';

const selectShop = state => state.shopReducer;

export const selectCollection = createSelector(
	[selectShop],
	shopReducer => shopReducer.collections
);

export const selectCollectionForPreview = createSelector(
	[selectCollection],
	collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionMap = collectionUrlParam => createSelector(
	[selectCollection],
	collections => collections ? collections[collectionUrlParam] : null
);

// export const selectCollectionMap = (collectionUrlParam) =>
//   createSelector([selectCollection], (collections) =>
//     collections ? collections[collectionUrlParam] : null
//   );