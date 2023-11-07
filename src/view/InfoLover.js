import Header from "./Header";
import {Footer} from "./Footer";
import {Demo} from "./Demo";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findAllImageByIdProfileLover, findByIdLover} from "../Service/ProfileLoverService";

export function InfoLover() {
    let [profileLover,setProfileLove] = useState({})
    let {id} = useParams()
    let [images,setImage] = useState([])
    const limit = 5;
    let count =0 ;
    useEffect(
        ()=>{
            findByIdLover(id).then((res) =>{
                setProfileLove(res)
            }).catch(() =>{
                return {}
            })
            findAllImageByIdProfileLover(id).then((res) =>{
                setImage(res)
            }).catch(() =>{
                return []
            })
        },[]
    )

    return (
        <>
            <Header/>
            <div className="container-info">
                <div className={"image-info"}>
                    <img src={profileLover.avatarImage}
                         className="img-info" alt=""/>
                    <span style={{marginTop: 0, fontWeight: "bold", fontSize: 30}}>
                        {profileLover.accountDTO?.nickname}

                            </span>
                    <br/>
                    <span style={{marginTop: 0, fontWeight: "bold", color: "green"}}>
                                        {profileLover.statusLover?.name}
                            </span>
                    <br/>
                    <span style={{marginTop: 0}}>
                                        Ngày tham gia: {profileLover.createdAt}
                            </span>
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
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>{profileLover.averageRateScore}</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Đã được thuê:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>{profileLover.totalHourRented} /giờ</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Tỉ lệ hoàn thành:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>97,55%</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Game dual:</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="/assets/img/game-icon/cf-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Đột kích</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="/assets/img/game-icon/lol-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Liên minh huyền thoại</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="/assets/img/game-icon/pubg-mobile-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>PUBG mobile</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="/assets/img/game-icon/toc-chien-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Tốc chiến</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="/assets/img/game-icon/valorant-logo.png" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Valorant</span>
                            </div>
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
                    <div className={"container-list-image-info"} data-bs-toggle={"modal"}
                         data-bs-target={"#list-image-info"}>
                        {images.map((image) =>{
                            if (count<limit){
                                count ++;
                            return(
                                <>
                                <img src={image.urlImage} className="img-info-list-image" alt=""/>

                                </>
                            )}
                        })}
                        <div style={{display:"inline-block", position:"relative"}}>
                            <img src={profileLover.avatarImage} className="img-info-list-image" alt=""/>
                            <div className={"img-info-list-image-fade-dive"}>+5</div>
                        </div>
                    </div>
                    <br/>
                    <div style={{textAlign: "justify", marginRight: 13}}>
                       <div>{profileLover.description}</div>
                        <div>{profileLover.requestToUser}</div>
                    </div>
                    <hr/>
                    <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: "gray"}}>
                        Đánh giá:
                    </div>
                </div>
            </div>
            <Footer/>
            <Demo img={images}/>
        </>
    )
}