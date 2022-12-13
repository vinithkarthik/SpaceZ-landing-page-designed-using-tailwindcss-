import React from "react";
import Home from './Components/Home/Home';
import HomepageContextProvider from './Contexts/HomepageContext'

const App = () => {
    return (
        <HomepageContextProvider>
            <div>
                <Home />
            </div>
        </HomepageContextProvider>
    )
}

export default App;