import React from "react";

/**
 * Header
 * Header component of the application 
 * 
 * Props
 * @param {Arrray} headerNavList - Navigation menu details 
 * 
 * Examples
 * <Header headerNavList={[{id: falcon, label: Falcon},{id:rocket, label: Rocket}]}" />
 */
const Header = ({headerNavList}) => {
    return (
        <header className="flex flex-row p-4">
            <label className="m-3 text-4xl">SpaceZ</label>
            <nav className="m-auto">
                <ul className="flex flex-row">
                    {headerNavList && headerNavList.map((list) => {
                        return (<li key={list.id} className="m-3 cursor-pointer">{list.label}</li>)
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;