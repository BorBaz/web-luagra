import React from "react";
import "./app.css";

import {Brand, CTA, Navbar} from "./components";
import {Footer, Blog, Possibility, WhatGPT3, Header, Features} from "./containers";

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App