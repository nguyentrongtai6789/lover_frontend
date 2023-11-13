import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";
import {AppProvider} from "../context/AppContext";

export function Layout() {
    const isLogin = localStorage.getItem("isLogin");
    const idAccount = localStorage.getItem("idAccount")
    const role = localStorage.getItem("role")


    if (isLogin === null && idAccount === null && role === null) {
        return (
            <>
                <AppProvider>
                    <Header isLogin={false} idAccount={0} role={""}/>
                    <Outlet/>
                    <Footer/>
                </AppProvider>
            </>
        )
    }
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


export default Layout;