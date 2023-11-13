import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FormLogin} from "./FormLogin";
import {TopPlayer} from "./TopPlayer";
import {TopRichMan} from "./TopRichMan";
import {ButtonLogin} from "./ButtonLogin";
import {findAll} from "../Service/VipService"
import {findAllFree} from '../Service/FreeService'
import {findAllService} from "../Service/ServiceService"

function Header(props) {
    let [statusLogin, setStatusLogin] = useState(props.isLogin);
    let [idAccount, setIdAccount] = useState(props.idAccount);
    let [role, setRole] = useState(props.role)
    const [vipServices, setVipServices] = useState([])
    const [freeServices, setFreeServices] = useState([])
    const [serviceLovers, setServiceLovers] = useState([])
    useEffect(() => {
        findAllService().then((res) => {
            setServiceLovers(res)
        })
    }, [])
    useEffect(() => {
        findAll().then((res) => {
            setVipServices(res)
            console.log(vipServices)
        })
    }, [])
    useEffect(() => {
        findAllFree().then((res) => {
            setFreeServices(res)
        })
    }, [])
    let getStatus = (status) => {
        setStatusLogin(status)
    }
    let getIdAccount = (id) => {
        setIdAccount(id);
    }
    let getRole = (role) => {
        setRole(role)
    }
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <div className="logo me-auto" style={{marginLeft: 60}}>
                        <h1><a href="http://localhost:3000/"><img
                            src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo"/></a></h1>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>

                            <li>
                                {(idAccount !== 0 && role === "ROLE_LOVER") &&
                                    <Link to={"/homeProfileLover/" + idAccount} style={{textDecoration: "none"}}>Profile
                                        lover</Link>}

                                {(idAccount === 0) && <a className="nav-link scrollto" href="#" onClick={() => {
                                    alert("Bạn chưa đăng nhập")
                                }}>Profile lover</a>}
                                {(idAccount !== 0 && role === "ROLE_USER") &&
                                    <a className="nav-link scrollto" href="#" onClick={() => {
                                        alert("Bạn chưa đăng kí tài khoản lover!")
                                    }}>Profile lover</a>}
                            </li>

                            <li>
                                <input type="text" placeholder={"Nhập tên"} style={{marginLeft: 25, width: 190}}
                                       className={"form-control"}/>
                            </li>

                            <li>
                                {(idAccount !== 0) &&
                                    <Link to={"/info-user/" + idAccount} style={{textDecoration: "none"}}>Thông tin cá
                                        nhân</Link>}
                                {(idAccount === 0) && <a className="nav-link scrollto" href="#" onClick={() => {
                                    alert("Bạn chưa đăng nhập")
                                }}>Trang của bạn</a>}
                            </li>

                            <li><Link to={""} style={{textDecoration: "none"}}>Trang chủ</Link></li>

                            <li><a className="nav-link scrollto" href="#menu" data-bs-toggle={"modal"}
                                   data-bs-target={"#top-player"}>Top player</a></li>
                            <li><a className="nav-link scrollto" href="#menu" data-bs-toggle={"modal"}
                                   data-bs-target={"#top-rich-man"}>Top đại gia</a></li>

                            <li className="dropdown"><a href="#"><span>Dịch vụ</span> <i
                                className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li className="dropdown"><a href="#"><span>Dịch vụ vip</span> <i
                                        className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            {
                                                vipServices.map((item) => {
                                                    return (
                                                        <li><a href="#">{item.name}</a></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#"><span>Dịch vụ miễn phí</span> <i
                                        className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            {freeServices.map((item) => {
                                                return (
                                                    <li><a href="#">{item.name}</a></li>

                                                )
                                            })}
                                        </ul>
                                    </li>
                                    {serviceLovers.map((item) => {
                                        return (
                                            <li><a href="#">{item.name}</a></li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li><a href=""><i className="bi bi-chat-dots"/></a></li>
                            <li><a href=""><i className="bi bi-bell"/></a></li>
                            <li>
                                <ButtonLogin m={statusLogin} n={getStatus}/>
                                {/*{statusLogin && <a href="" className="nav-link scrollto" data-bs-toggle={"modal"}*/}
                                {/*   data-bs-target={"#exampleModalCenter"}>Đăng xuất</a>}*/}
                                {/*{!statusLogin && <a href="" className="nav-link scrollto" data-bs-toggle={"modal"}*/}
                                {/*   data-bs-target={"#exampleModalCenter"}>Đăng nhập</a>}*/}
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <FormLogin m={getStatus} n={getIdAccount} l={getRole}/>
            <TopPlayer/>
            <TopRichMan/>
        </>
    )
}

export default Header;