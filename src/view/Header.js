import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {FormLogin} from "./FormLogin";
import {TopPlayer} from "./TopPlayer";
import {TopRichMan} from "./TopRichMan";
import {ButtonLogin} from "./ButtonLogin";
import {findAll} from "../Service/VipService"
import {findAllFree} from '../Service/FreeService'
import {findAllService} from "../Service/ServiceService"
import {connect} from "react-redux";
import {AppContext} from "../context/AppContext";


export function Header(props) {
    let [statusLogin, setStatusLogin] = useState(localStorage.getItem('isLogin'));
    let [idAccount, setIdAccount] = useState(localStorage.getItem("idAccount"));
    console.log(idAccount)
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
    const {handleSearchChange} = useContext(AppContext);
    const {handleIdVipServiceChange} = useContext(AppContext);
    const {handleFreeServiceChange} = useContext(AppContext);
    const {handleBaseServiceChange} = useContext(AppContext);
    const navigate = useNavigate();
    function searchByName(event) {
        const value = event.target.value;
        handleSearchChange(value);
        navigate("")
    }
    function searchByBaseService(id) {
        handleBaseServiceChange(id)
        navigate("")
    }
    const {searchValue} = useContext(AppContext);
    function searchByVipService(id) {
        handleIdVipServiceChange(id)
        navigate("")
    }
    function searchByFreeService(id) {
        handleFreeServiceChange(id)
        navigate("")
    }
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <div className="logo me-auto" style={{marginLeft: 5}}>
                        <h1><a href="http://localhost:3000/"><img
                            src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo"/></a></h1>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>

                            <li>

                                {(idAccount !== 0 && role === "ROLE_LOVER") &&
                                    <Link to={"/homeProfileLover/" + idAccount} style={{textDecoration: "none"}}>
                                        <i className="bi bi-person-hearts" style={{ fontSize : "30px" , color: "#EE0DB9FF"}}></i> </Link>}
                                {(idAccount === null) && <a className="nav-link scrollto" href="#" onClick={() => {
                                    alert("Bạn chưa đăng nhập")
                                }}>Profile lover</a>}
                                {(idAccount !== null && role === "ROLE_USER") &&
                                    <a className="nav-link scrollto" href="#" onClick={() => {
                                        alert("Bạn chưa đăng kí tài khoản lover!")
                                    }}>Profile lover</a>}
                            </li>

                            <li style={{position: 'relative'}}>
                                <input
                                    type="text"
                                    placeholder={"Nickname/Url....."}
                                    style={{marginLeft: "10px", width: "280px"}}
                                    value={searchValue}
                                    className={"form-control"}
                                    onChange={(event) => {
                                        searchByName(event);
                                    }}
                                />
                                <i
                                    className="bi bi-search"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(-50%)',
                                        color: '#555', // Màu sắc của biểu tượng
                                    }}
                                ></i>
                            </li>

                            <li>
                                {(idAccount !== null) &&
                                    <Link to={"/info-user/" + idAccount} style={{textDecoration: "none"}}>Thông tin cá
                                        nhân</Link>}
                                {(idAccount === null) && <a className="nav-link scrollto" href="#" onClick={() => {
                                    alert("Bạn chưa đăng nhập")
                                }}>Trang của bạn</a>}
                            </li>

                            <li><a href="http://localhost:3000/" className="nav-link scrollto" >Trang chủ</a></li>
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
                                                        <li><a href="#" onClick={() => {
                                                            searchByVipService(item.id)
                                                        }}>{item.name}</a></li>
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
                                                    <li><a href="#" onClick={()=>{
                                                        searchByFreeService(item.id)
                                                    }}>{item.name}</a></li>

                                                )
                                            })}
                                        </ul>
                                    </li>
                                    {serviceLovers.map((item) => {
                                        return (
                                            <li><a href="#" onClick={()=>{
                                                searchByBaseService(item.id)
                                            }}>{item.name}</a></li>
                                        )
                                    })}
                                </ul>
                            </li>
                            <li><a href=""><i className="bi bi-chat-dots"/></a></li>
                            <li><a href=""><i className="bi bi-bell"/></a></li>

                            {/*<li>*/}
                            {/*    <ButtonLogin m={statusLogin} n={getStatus}/>*/}
                            {/*</li>*/}




                            <li className="dropdown"><a href="#"><span><i className="bi bi-person-circle" style={{ fontSize : "25px" , color: "#053DF3FF"}}></i></span> <i
                                className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li>
                                        <ButtonLogin m={statusLogin} n={getStatus}/>
                                    </li>

                                </ul>
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


export default (Header);
