import "../css/InfoLover.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findByIdLover, findImagesByIdLover} from "../Service/InfoLoverService"
import {Demo} from "./Demo";

export function InfoLover() {
    const [profileLover, setProfileLover] = useState({})
    const {id} = useParams();
    const [vipService, setVipService] = useState([])
    const [freeService, setFreeService] = useState([])
    const [baseService, setBaseService] = useState([])
    const [linkFb, setLinkFb] = useState("")
    const [images, setImages] = useState([])
    useEffect(() => {
        findByIdLover(id)
            .then((res) => {
                setProfileLover(res)
                setFreeService(res.freeServices)
                setVipService(res.vipServices)
                setBaseService(res.serviceLovers)
                setLinkFb(res.facebookLink)
            })
    }, [id])
    useEffect(() => {
        findImagesByIdLover(id)
            .then((res) => {
                setImages(res)
            })
    }, [id])
    console.log(images)
    return (
        <>
            <div className="container-info">
                <div className={"image-info-lover"}>
                    <img src={profileLover.avatarImage}
                         className="img-info" alt=""/>
                    <br/>
                    <div style={{marginTop: 0, fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
                        {profileLover.account?.nickname}
                    </div>
                    <div style={{marginTop: 0, fontWeight: "bold", color: "green", textAlign: "center"}}>
                        {profileLover.statusLover?.name}
                    </div>
                    <div style={{marginTop: 0}}>
                        Ngày tham gia: {profileLover.createdAt}
                    </div>
                    <div style={{marginTop: 0}}>
                        Địa chỉ: {profileLover.city?.name}
                    </div>
                    <div style={{marginTop: 0}}>
                        <a href={linkFb}>FACEBOOK</a>
                    </div>
                    <div style={{marginTop: 0}}>
                        Giá: {profileLover.price}/h
                    </div>
                    <div className={"image-info-action"}>
                        <button className={"btn-info-action"}>
                            <i className="bi bi-currency-dollar">THUÊ</i>
                        </button>
                        <button className={"btn-info-action"}>
                            <i className="bi bi-database-fill">DONATE</i>
                        </button>
                        <button className={"btn-info-action"}>
                            <i className={"bi bi-chat-dots"}>CHAT</i>
                        </button>
                    </div>
                </div>
                <div className={"info-info"}>
                    <div className={"info-info-container-1"}>
                        <div className={"info-info-1"}>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Điểm đánh giá trung bình:</span>
                                <span style={{
                                    fontWeight: "bold",
                                    color: "#d81a1a",
                                    marginLeft: 5
                                }}>{profileLover.averageRateScore}</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Đã được thuê:</span>
                                <span style={{
                                    fontWeight: "bold",
                                    color: "#d81a1a",
                                    marginLeft: 5
                                }}>{profileLover.totalHourRented} /giờ</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch vụ miễn phí:</span>
                            </div>
                            {freeService.map((item) => {
                                return (
                                    <>
                                        <div style={{marginBottom: 10}}>
                                            <img className={"info-info-image"} style={{marginLeft: 3}}
                                                 src={item.avatarService} alt=""/>
                                            <span style={{marginLeft: 3, fontStyle: "italic"}}>{item.name}</span>
                                        </div>
                                    </>
                                )
                            })}
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch vụ vip:</span>
                            </div>
                            {vipService.map((item) => {
                                return (
                                    <>
                                        <div style={{marginBottom: 10}}>
                                            <img className={"info-info-image"} style={{marginLeft: 3}}
                                                 src={item.avatarService} alt=""/>
                                            <span style={{marginLeft: 3, fontStyle: "italic"}}>{item.name}
                                                + {item.price} /h</span>
                                        </div>
                                    </>
                                )
                            })}
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch vụ cơ bản:</span>
                            </div>
                            {baseService.map((item) => {
                                return (
                                    <>
                                        <div style={{marginBottom: 10}}>
                                            <img className={"info-info-image"} style={{marginLeft: 3}}
                                                 src={item.avatarService} alt=""/>
                                            <span style={{marginLeft: 3, fontStyle: "italic"}}>{item.name}
                                            </span>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div className={"top-donate-info"}>
                            <div style={{
                                fontWeight: "bold",
                                fontSize: 20,
                                textAlign: "center",
                                color: "gray",
                                marginBottom: 20
                            }}>
                                Top 5 donate tháng:
                            </div>
                            <div style={{fontStyle: "italic", color: "#d81a1a", fontWeight: "bold"}}>
                                <div style={{marginBottom: 15}}>
                                    #1<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginBottom: 15}}>
                                    #2<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginBottom: 15}}>
                                    #3<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginBottom: 15}}>
                                    #4<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginTop: 5}}>
                                    #5<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: "gray"}}>
                        Thông tin
                    </div>
                    <br/>
                    <div className={"container-list-image-info-lover"} data-bs-toggle={"modal"}
                         data-bs-target={"#list-image-info"}>
                        <div style={{position:"relative"}}>
                            {images.length <= 4 &&
                                images.map((item) => {
                                    return (
                                        <>
                                            <img src={item.urlImage} className="img-info-list-image" alt=""/>
                                        </>
                                    )
                                })
                            }
                            {images.length >= 4 &&
                                images.slice(0, 4).map((item) => {
                                    return (
                                        <>
                                            <img src={item.urlImage} className="img-info-list-image" alt=""/>
                                            <div className={"img-info-list-image-fade-dive"}>+{images.length - 4}</div>
                                        </>
                                    )
                                })

                            }
                        </div>
                    </div>
                    <br/>
                    <div style={{textAlign: "justify", marginRight: 13}}>
                        <div>{profileLover.description}</div>
                        <h6 style={{fontFamily: "inherit"}}>Yêu cầu đối với người thuê:</h6>
                        <div>{profileLover.requestToUser}</div>
                        <h6 style={{fontFamily: "inherit"}}>Sở thích cá nhân:</h6>
                        <div>{profileLover.hobby}</div>
                        <h6 style={{fontFamily: "inherit"}}>Chiều cao:</h6>
                        <div>{profileLover.height}m</div>
                        <h6 style={{fontFamily: "inherit"}}>Cân nặng:</h6>
                        <div>{profileLover.weight}kg</div>
                    </div>
                    <hr/>
                    <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: "gray"}}>
                        Đánh giá:
                    </div>
                </div>
            </div>
            <Demo img={images} id={id}/>
        </>
    )
}