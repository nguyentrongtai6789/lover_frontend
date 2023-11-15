import {AppProvider} from "../context/AppContext";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";
import Header from "./Header";

export function LayoutAdmin() {
    const isLogin = localStorage.getItem("isLogin");
    const idAccount = localStorage.getItem("idAccount")
    const role = localStorage.getItem("role")
    return (
        <>
            <AppProvider>
                <Header isLogin={isLogin} idAccount={idAccount} role={role}/>
                <Outlet/>
                <Footer/>
            </AppProvider>
        </>

    )
}