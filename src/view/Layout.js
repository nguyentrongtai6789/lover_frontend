import Header from "./Header";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";


export function Layout() {
    const isLogin = localStorage.getItem("isLogin");
    const idAccount = localStorage.getItem("idAccount")
    const role = localStorage.getItem("role")
    if (isLogin === null && idAccount === null && role === null) {
        return (
            <>
                <>
                    <Header isLogin={false} idAccount={0} role={""}/>
                    <Outlet/>
                    <Footer/>
                </>
            </>
        )
    }
    return (
        <>
            <Header isLogin={isLogin} idAccount={idAccount} role={role}/>
            <Outlet/>
            <Footer/>
        </>

    )
}