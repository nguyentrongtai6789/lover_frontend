import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {LoadingButton} from "./LoadingButton";
import '../css/home.css'
import {AppContext} from "../context/AppContext";
import {
    findAll,
    findAllByBaseService,
    findAllByFreeService,
    findAllByNameContaining,
    findAllByVipService
} from "../Service/HomeService";
import Pagination from 'react-js-pagination';

export function Home() {
    const token = localStorage.getItem('token');
    const [profileLovers, setProfileLovers] = useState([]);
    // phân trang:
    const [currentPage, setCurrentPage] = useState(1);
    const profilePerPage = 4; // Số sản phẩm hiển thị trên mỗi trang
    const indexOfLastProduct = currentPage * profilePerPage;
    const indexOfFirstProduct = indexOfLastProduct - profilePerPage;
    const currentProducts = profileLovers.slice(indexOfFirstProduct, indexOfLastProduct);
    // Xử lý sự kiện chuyển trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // truyền props tìm kiếm:
    const [loading, setLoading] = useState(false);
    const {searchValue} = useContext(AppContext);
    const {idVipService} = useContext(AppContext);
    const {idFreeService} = useContext(AppContext);
    const {idBaseService} = useContext(AppContext);
    // console.log(searchValue)
    useEffect(() => {
        if (searchValue !== "") {
            setCurrentPage(1)
            findAllByNameContaining(searchValue)
                .then((res) => {
                    setProfileLovers(res.data)
                })
        } else if (idVipService !== 0) {
            setCurrentPage(1)
            findAllByVipService(idVipService)
                .then((res) => {
                    setProfileLovers(res.data)
                })
        } else if (idFreeService !== 0) {
            setCurrentPage(1)
            findAllByFreeService(idFreeService)
                .then((res) => {
                    setProfileLovers(res.data)
                })
        } else if (idBaseService !== 0) {
            setCurrentPage(1)
            findAllByBaseService(idBaseService)
                .then((res)=>{
                    setProfileLovers(res.data)
                })
        } else {
            setCurrentPage(1)
            findAll()
                .then((res) => {
                    setProfileLovers(res.data)
                })
        }

    }, [searchValue, idVipService, idFreeService, idBaseService])


    if (loading) {
        return (
            <div className={"loading"}>
                <LoadingButton/>
            </div>
        )
    }
    return (
        <>
            <div className="container-home-user" id={"container-home-user"}>
                <div className="row">
                    {currentProducts.map((item) => (
                        <div className={"info-lover-home"} >
                            <Link to={"/info-lover/" + item.id}>
                                <div className="image-container">
                                    <img
                                        src={item.avatarImage}
                                        className="img-fluid"
                                        alt={item.avatarImage}
                                        style={{ width: 200, height: 280 }}
                                    />
                                </div>
                            </Link>
                            <div className="details-container">
                                <h6
                                    style={{
                                        marginLeft: "150px",
                                        backgroundColor: "#f0564a",
                                        fontFamily: "inherit",
                                        borderRadius: "20%",
                                    }}
                                >
                                    {item.price}/h
                                </h6>
                                <span style={{ marginTop: 0, fontWeight: "bold" }}>{item.account?.nickname}</span>
                                <div className={"like-comment-rate-home"}>
                                    <span style={{ marginRight: 5 }}>{item.averageRateScore}<i className={"bi bi-star-fill"} style={{ color: "orange" }}></i></span>
                                </div>
                                <div className={"container-game-icon"}>
                                    <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"} />
                                    <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"} />
                                    <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"} />
                                    <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"} />
                                    <span className={"game-of-player-plus"}>+5</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={profilePerPage}
                    totalItemsCount={profileLovers.length}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />


                <div >
                    <img src="https://playerduo.net/favicons/popup-chat.png" style={{paddingLeft: "1100px"}}/>
                </div>

            </div>

        </>)
}
