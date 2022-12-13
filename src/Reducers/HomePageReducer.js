import { constants } from '../Components/Home/Constants';

export const homePageReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_GRID_DATA:
            return {
                ...state,
                gridData: action.gridData
            }
        case constants.UPDATE_SEARCH_SCHEMA:
            return {
                ...state,
                searchSchema: action.searchSchema
            }
        case constants.UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }
}