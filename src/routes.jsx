import { BrowserRouter, Route,Routes } from "react-router";

/// ROUTES
import Home from "./components/home";
import Contact from "./components/contact"

import Header from "./components/header"
import MainLayout from "./components/layouts/mainLayout";

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router;