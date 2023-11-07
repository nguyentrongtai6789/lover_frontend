import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/Layout";
import {HomeUser} from "./view/Home-user";
import {InfoLover} from "./view/InfoLover";
import {InfoUser} from "./view/InfoUser";
import {Demo} from "./view/Demo";
import {FormLogin} from "./view/FormLogin";

function App() {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={""} element={<HomeUser/>}></Route>
          </Route>
          <Route path={'/info-lover/:id'} element={<InfoLover/>}></Route>
          <Route path={'/info-user'} element={<InfoUser/>}></Route>
          <Route path={'/demo'} element={<Demo/>}></Route>
        </Routes>
      </>
  );
}

export default App;
