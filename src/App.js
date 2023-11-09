import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/Layout";
import {InfoLover} from "./view/InfoLover";
import {InfoUser} from "./view/InfoUser";
import {Demo} from "./view/Demo";

import {Home} from "./view/Home";


import {HomeProfileLover} from "./view/ProfileLover/HomeProfileLover";
import {HomeUser} from "./view/Home-user";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={""} element={<Home/>}></Route>
                    <Route path={'/homeProfileLover/:id'} element={<HomeProfileLover/>}></Route>
                    <Route path={'/info-lover/:id'} element={<InfoLover/>}></Route>
                    <Route path={'/info-user/:id'} element={<InfoUser/>}></Route>
                </Route>
                <Route path={'/demo'} element={<Demo/>}></Route>
            </Routes>
        </>
    );
}

export default App;
