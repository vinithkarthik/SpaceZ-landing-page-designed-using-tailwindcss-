import React, { useContext, useState } from "react";
import { homePageContext } from "../../Contexts/HomepageContext";
import SelectBox from "../Common/SelectBox";
import { req } from "../../Utils/util";
import { constants } from "../Home/Constants";

/**
 * SearchBar
 * Search bar used to search for specific type of data
 * 
 * Props
 * @param {Array} searchSchema - The text to be displayed 
 * 
 * Examples
 * <SearchBar searchSchema=[{
        id: 'ship_type',
        enumValues: []
    }] 
    />
 */
const SearchBar = ({searchSchema}) => {
    const [searchValue, setSearchValue] = useState({});
    const {homePage, dispatchHomePage} = useContext(homePageContext);
    const eventHandler = ({value, id}) => {
        let updatedSearchValue = {...searchValue};
        updatedSearchValue[id] = value;
        setSearchValue(updatedSearchValue);
    }
    const onSearch = async () => {
        const { ship_type , home_port } = searchValue;
        let url = constants.SHIP_URL;
        if(ship_type) {
            url = `${url}/?ship_type=${ship_type}`
        } 
        if (ship_type && home_port) {
            url = `${url}&home_port=${home_port}`
        } else if(home_port) {
            url = `${url}/?home_port=${home_port}`
        }
        let shipDetails = await req(url);
        dispatchHomePage({ type: constants.UPDATE_GRID_DATA, gridData: shipDetails.filter((ship) => ship.image) })
        dispatchHomePage({ type: constants.UPDATE_CURRENT_PAGE, currentPage: 1 })
    }
    return (
        <div className="flex justify-center mb-4">
            {searchSchema && searchSchema.map((sch) => {
                return (<SelectBox key={sch.id} dropdownList={sch.enumValues} id={sch.id} onChange={eventHandler} />)
            })}
            <button className="text-white bg-black rounded p-2" onClick={onSearch}>
                Search
            </button>
        </div>
    )
}   

export default SearchBar;