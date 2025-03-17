import { BrowserRouter, Route,Routes } from "react-router";

/// ROUTES
import Home from "./components/home";
import Contact from "./components/contact"

import Header from "./components/header"

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;