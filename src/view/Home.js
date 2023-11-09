import {useEffect, useState} from "react";
import {findAllByPage, getTotalPage} from "../Service/HomeService"
import {Link} from "react-router-dom";
import {LoadingButton} from "./LoadingButton";
import '../css/home.css'
export function Home() {
    const token = localStorage.getItem('token');
    let [profileLovers, setProfileLovers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        getTotalPage(token)
            .then((res)=>{
                setTotalPage(res.data)
                console.log(totalPage)
            })
    })
    useEffect(() => {
        findAllByPage(token, currentPage)
            .then((res) => {
                setProfileLovers(res.data.content);
            }).catch(() => {
            alert("Xảy ra lỗi trong quá trình kết nối!")
        })
    }, [currentPage])


    function nextPage() {
        if (currentPage === totalPage - 1 || totalPage === 0) {
            return
        }
        setCurrentPage(prevState => prevState + 1)
    }

    function previousPage() {
        if (currentPage === 0) {
            return;
        }
        setCurrentPage(prevState => prevState - 1)
    }

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
                    {profileLovers.map((item) => {
                        return (<div className={"info-lover-home"}>
                            <Link to={"/info-lover/" + item.id}>
                                <img src={item.avatarImage}
                                     className="img-fluid" alt={item.avatarImage}
                                     style={{width: 200, height: 280}}/>
                            </Link>
                            <div style={{width: 200}}>
                                <h6 style={{letterSpacing: 2}}>{item.price}/h</h6>
                                <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        {item.account.nickname}
                                </span>
                                <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>10<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                    <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                        style={{color: "blue"}}></i></span>
                                    <span style={{marginRight: 5}}>{item.averageRateScore}<i
                                        className={"bi bi-star-fill"}
                                        style={{color: "orange"}}></i></span>
                                </div>
                                <div className={"container-game-icon"}>
                                    <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                    <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt=""
                                         className={"game-icon"}/>
                                    <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                    <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                    <span className={"game-of-player-plus"}>+5</span>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>
                <div id={"page-item-home"}>
                    <button onClick={previousPage} className={"btn btn-secondary"}
                    id={"btn-home-previous-page"}>
                        <i className="bi bi-rewind-fill"></i>
                    </button>
                    {currentPage + 1} of {totalPage}
                    <button onClick={nextPage} className={"btn btn-secondary"}
                    id={"btn-home-next-page"}>
                        <i className="bi bi-fast-forward-fill"></i>
                    </button>
                </div>
            </div>

        </>)
}