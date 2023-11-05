import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {FormLogin} from "./FormLogin";
import {TopPlayer} from "./TopPlayer";
import {TopRichMan} from "./TopRichMan";
import {Demo} from "./Demo";

function Header() {

    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <div className="logo me-auto">
                        <h1><a href="home.html">PLAY DUAL</a></h1>
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to={"/"} style={{textDecoration:"none"}}>Trang chủ</Link></li>
                            <li>
                                <input type="text" placeholder={"Nhập tên"} style={{marginLeft: 25, width: 190}}
                                       className={"form-control"}/>
                            </li>
                            <li><Link to={"/info-user"} style={{textDecoration:"none"}}>Trang của bạn</Link></li>
                            <li><a className="nav-link scrollto" href="#menu" data-bs-toggle={"modal"}
                                   data-bs-target={"#top-player"}>Top player</a></li>
                            <li><a className="nav-link scrollto" href="#menu" data-bs-toggle={"modal"}
                                   data-bs-target={"#top-rich-man"}>Top đại gia</a></li>
                            <li><a className="nav-link scrollto" href="#menu">Thư viện ảnh</a></li>
                            <li className="dropdown"><a href="#"><span>Thể loại</span> <i
                                className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li className="dropdown"><a href="#"><span>Game PC</span> <i
                                        className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Liên Minh Huyền Thoại</a></li>
                                            <li><a href="#">Đột kích</a></li>
                                            <li><a href="#">Valorant</a></li>
                                            <li><a href="#">Genshin Impact</a></li>
                                            <li><a href="#">CS GO 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#"><span>Game MOBILE</span> <i
                                        className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Liên quân</a></li>
                                            <li><a href="#">Tốc chiến</a></li>
                                            <li><a href="#">Truy kích</a></li>
                                            <li><a href="#">PUBG mobile</a></li>
                                            <li><a href="#">Free Fire</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Hát</a></li>
                                    <li><a href="#">Tâm sự</a></li>
                                    <li><a href="#">Khác</a></li>
                                </ul>
                            </li>
                            <li><a href=""><i className="bi bi-chat-dots"/></a></li>
                            <li><a href=""><i className="bi bi-bell"/></a></li>
                            <li><a href="" className="nav-link scrollto" data-bs-toggle={"modal"}
                            data-bs-target={"#exampleModalCenter"}>Đăng nhập</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <FormLogin/>
            <TopPlayer/>
            <TopRichMan/>
        </>
    )
}

export default Header;