import React from 'react';
import { createContext, useReducer } from 'react';
import { homePageReducer } from '../Reducers/HomePageReducer';
import { searchSchema } from '../Schema/SearchSchema';

const initialState = {
    gridData: [],
    totalGridCount: 19,
    searchSchema: [],
    currentPage: 1,
    totalGridDataPerPage: 6
}

export const homePageContext = createContext();

const HomepageContextProvider = (props) => {
    const [homePage, dispatchHomePage] = useReducer(homePageReducer, initialState);
    return <homePageContext.Provider value={{ homePage, dispatchHomePage }}>{props.children}</homePageContext.Provider>
}

export default HomepageContextProvider