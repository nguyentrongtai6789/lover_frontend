import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";


export function Layout() {
    const isLogin = localStorage.getItem("isLogin");
    const idAccount = localStorage.getItem("idAccount")
    localStorage.getItem("isLogin")
    if (isLogin === null && idAccount === null) {
        return (
            <>
                <>
                    <Header isLogin={false} idAccount={0}/>
                    <Outlet/>
                    <Footer/>
                </>
            </>
        )
    }
    return (
        <>
            <Header isLogin={isLogin} idAccount={idAccount}/>
            <Outlet/>
            <Footer/>
        </>

    )
}