import React from "react";
import { useEffect, useContext } from "react";
import { addEnum, req } from '../../Utils/util';
import { homePageContext } from "../../Contexts/HomepageContext";
import { constants } from "./Constants";
import Grid from "../Grid/Grid";
import SearchBar from "../SearchBar/SearchBar";
import { searchSchema } from "../../Schema/SearchSchema";
import { headerNavSchema } from "../../Schema/HeaderNavSchema";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

/**
 * Home
 * Landing page of the application 
 */
const Home = () => {
    const { homePage, dispatchHomePage } = useContext(homePageContext);

    useEffect(() => {
        const fetchShipDetails = async () => {
            let shipDetails = await getShipDetails();
            getSearchEnums(shipDetails);
            dispatchHomePage({ type: constants.UPDATE_GRID_DATA, gridData: shipDetails.filter((ship) => ship.image) })
        }
        fetchShipDetails()
    }, [])

    const getShipDetails = async () => {
        try {
            let response = await req(constants.SHIP_URL);
            return response;
        } catch (err) {
        }
    }

    const getSearchEnums = (shipDetails) => {
        let typeEnum = [], home_port = [];
        shipDetails.forEach(ship => {
            addEnum(typeEnum, ship.ship_type);
            addEnum(home_port, ship.home_port);
        });
        let updatedSearchSchema = searchSchema.map((sch) => {
            if (sch.id === "ship_type") {
                sch.enumValues = typeEnum;
                if (!sch.defaultValue) {
                    sch.defaultValue = typeEnum[0].value
                }
            }
            if (sch.id === "home_port") {
                sch.enumValues = home_port;
                if (!sch.defaultValue) {
                    sch.defaultValue = home_port[0].value
                }
            }
            return sch;
        })
        dispatchHomePage({ type: constants.UPDATE_SEARCH_SCHEMA, searchSchema: updatedSearchSchema })
    }

    const onPageChange = (currentPage) => {
        dispatchHomePage({ type: constants.UPDATE_CURRENT_PAGE, currentPage: currentPage })
    }

    return (
        <section>
            <Header headerNavList={headerNavSchema} />
            <div className="mx-6">
                <Banner />
                <SearchBar searchSchema={homePage.searchSchema} />
                <Grid
                    gridData={homePage.gridData}
                    currentPage={homePage.currentPage}
                    dataPerPage={homePage.totalGridDataPerPage}
                    onPageChange={onPageChange}
                />
            </div>
        </section>
    )
}

export default Home;