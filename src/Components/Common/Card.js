import React from "react";

/**
 * Card
 * A reusable component for displaying a data in the Grid 
 * 
 * Props
 * @param {string} id - unique identifier for card
 * @param {string} name - Name of the card
 * @param {string} image - image to be shown
 * @param {string} type - additional information related to card
 * @param {string} info - additional information related to card
 * 
 * Examples
 * <Card text="Hello World" style="bold" />
 */
const Card = ({id, name, image, type, info}) => {
    return (
        <section key={id} className="flex flex-col p-2 hover:shadow-lg hover:border cursor-pointer rounded">
            <div>
                <img src={image} alt={"ship"} className="w-[100%] h-[45vh] rounded">
                </img>
            </div>
            <div className="flex flex-col">
                <span>{name}</span>
                <span>{type}</span>
                <span>{info}</span>
            </div>
        </section>
    )
}   

export default Card;