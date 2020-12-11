import { createSelector } from 'reselect';

const selectDir = state => state.dirReducer;

export const selectDirSections = createSelector(
	[selectDir],
	dirReducer => dirReducer.SECTIONS_DATA
);