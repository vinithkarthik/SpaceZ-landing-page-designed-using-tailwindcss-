import React from "react";

/**
 * Banner
 * Banner component for displaying product tagline
 */
const Banner = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[30vh] bg-gradient-to-t from-[#283E51] to-[#0A2342] mb-5 uppercase">
            <h1 className="text-7xl text-white">Journey to Infinity and Beyond</h1>
            <p className="mt-4 text-xl text-white">We're going to make it happen</p>
        </div>
    )
}

export default Banner;