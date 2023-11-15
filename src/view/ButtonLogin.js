import {useNavigate} from "react-router-dom";

export function ButtonLogin(props) {
    const navigate = useNavigate();
    if (props.m) {
        return (
            <a href="" className="nav-link scrollto" onClick={logOut}> Đăng xuất</a>
        )
    } else {
        return (
            <a href="" className="nav-link scrollto" data-bs-toggle={"modal"}
               data-bs-target={"#exampleModalCenter"}>Đăng nhập</a>
        )
    }
    function logOut() {
        localStorage.clear()
        props.n(false);
        navigate("/")
    }
}