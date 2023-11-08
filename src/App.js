import './App.css';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./view/Layout";
import {InfoLover} from "./view/InfoLover";
import {InfoUser} from "./view/InfoUser";
import {Demo} from "./view/Demo";
<<<<<<< HEAD
import {Home} from "./view/Home";

=======
import {HomeProfileLover} from "./view/ProfileLover/HomeProfileLover";
>>>>>>> b2da06feb5ff9da8bcccaa13591a1ac494798d6f
function App() {
  return (
      <>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
<<<<<<< HEAD
            <Route path={""} element={<Home/>}></Route>
=======
            <Route path={""} element={<HomeUser/>}></Route>
              <Route path={'/homeProfileLover'} element={<HomeProfileLover/>}></Route>

>>>>>>> b2da06feb5ff9da8bcccaa13591a1ac494798d6f
          </Route>
          <Route path={'/info-lover/:id'} element={<InfoLover/>}></Route>
          <Route path={'/info-user/:id'} element={<InfoUser/>}></Route>
          <Route path={'/demo'} element={<Demo/>}></Route>
        </Routes>
      </>
  );
}

export default App;
