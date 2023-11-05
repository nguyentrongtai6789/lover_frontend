import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";


export function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    )
}