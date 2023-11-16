import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/Layout";
import {InfoLover} from "./view/InfoLover";
import {InfoUser} from "./view/InfoUser";
import {Demo} from "./view/Demo";
import {Home} from "./view/Home";
import {HomeProfileLover} from "./view/ProfileLover/HomeProfileLover";
import {HomeAdmin} from "./view/HomeAdmin";
import {ListBillOfProfileLover} from "./view/ListBillOfProfileLover";
import Home2 from "./view/Home2";


function App() {

    return (
        <>
                <Routes>
                    <Route path={'/'} element={<Layout />}>
                        <Route path={""} element={<Home2 />} ></Route>
                        <Route path={'/homeProfileLover/:id'} element={<HomeProfileLover/>}></Route>
                        <Route path={'/info-lover/:id'} element={<InfoLover/>}></Route>
                        <Route path={'/info-user/:id'} element={<InfoUser/>}></Route>
                        <Route path={'/listBillOfProfileLover/:id'} element={<ListBillOfProfileLover/>}></Route>
                    </Route>
                    <Route path={'/layout-admin'} element={<Layout />}>
                        <Route path={"/layout-admin/home/:id"} element={<HomeAdmin />} ></Route>
                    </Route>
                    <Route path={'/demo'} element={<Demo/>}></Route>
                </Routes>
        </>
    );
}

export default App;
