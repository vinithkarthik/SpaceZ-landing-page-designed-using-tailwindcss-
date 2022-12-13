import React, { useContext, useEffect, useState } from "react";
import Card from "../Common/Card";
import Pagination from "../Common/Pagination";

/**
 * Grid
 * A reusable grid component used to display data
 * 
 * Props
 * @param {Array} gridData - The data to be displayed 
 * @param {Number} currentPage - Current page selected in pagination
 * @param {Number} dataPerPage - count of the data to be displayed per page
 * @param {Function} onPageChange - callback function triggered on page change
 * 
 * Examples
 * <Grid 
 *  gridData={[{id,img,info},{id,img,info}]}
    currentPage={2}
    dataPerPage={6}
    onPageChange={()=>{}} />
 */
const Grid = ({ gridData, currentPage, dataPerPage, onPageChange }) => {
    const [paginationLength, setPaginationLength] = useState(0);
    useEffect(() => {
        let paginationLength = Math.ceil(gridData.length / dataPerPage);
        setPaginationLength(paginationLength);
    }, [gridData]);

    let gridDataStartingIndex = (currentPage - 1) * dataPerPage;
    let paginatedGridData = gridData.slice(gridDataStartingIndex, gridDataStartingIndex + dataPerPage);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {
                    paginatedGridData && paginatedGridData.map((data) => {
                        return (
                            <Card
                                id={data.ship_id}
                                name={data.ship_name}
                                image={data.image}
                                type={data.ship_type}
                                info={data.home_port}
                            />
                        )
                    })
                }
            </div>
            {
                paginationLength > 1 &&
                (<div className="flex justify-center">
                    <Pagination paginationLength={paginationLength} currentPage={currentPage} onPageChange={onPageChange} />
                </div>)
            }
        </div>
    )
}

export default Grid;