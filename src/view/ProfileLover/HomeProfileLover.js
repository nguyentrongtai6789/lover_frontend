import Header from "../Header";
import {Footer} from "../Footer";
import {Demo} from "../Demo";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findAllImageByIdProfileLover, findByIdLover} from "../../Service/ProfileLoverService";
import {findByIdAccount} from "../../Service/ProfileUserService";
export function HomeProfileLover() {
    let [profileLover,setProfileLove] = useState({})
    let {id} = useParams()
    let [images,setImage] = useState([])
    const limit = 5;
    let count =0 ;
    let [service, setService] = useState([]);
    let [serviceFree, setServiceFree] = useState([]);
    let [vipService,setVipService] = useState([]);
    let [profileUser,setProfileUser] = useState({})
    useEffect(
        ()=>{
            findByIdLover(id).then((res) =>{
                setProfileLove(res)
                setService(res.serviceLovers)
                setServiceFree(res.freeServices)
                setVipService(res.vipServices)
                console.log(res)
            }).catch(() =>{
                return {}
            })
            findAllImageByIdProfileLover(id).then((res) =>{
                setImage(res)
            }).catch(() =>{
                return []
            })
            findByIdAccount(1).then((res) =>{
                setProfileUser(res)
            }).catch(() =>{
                return {}
            })
        },[]
    )

    return (
        <>

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
                                <span style={{fontWeight: "bold", color: "grey"}}>Tổng thu nhập:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>{profileLover.totalMoneyRented}  vnd</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch Vụ cơ bản:</span>
                                <a className="bi bi-brush-fill"></a>

                            </div>
                            {service.map((service) =>{
                                return(
                                    <>
                                        <div style={{marginBottom: 10}}>
                                            <img className={"info-info-image"} style={{marginLeft: 3}}
                                                 src={service.avatarService} alt=""/>
                                            <span style={{marginLeft: 3, fontStyle: "italic"}}>{service.name}</span>
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
                                Thông tin cá nhân
                            </div>
                            <div style={{fontStyle: "italic", color: "#d81a1a", fontWeight: "bold"}}>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> UserName : {profileLover.accountDTO?.username}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Nick Name : {profileLover.accountDTO?.nickname}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Email : {profileLover.accountDTO?.email}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Họ Và Tên : {profileUser.firstName} {profileUser.lastName}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="/assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Số CMT/CCCD : {profileUser.citizenNumber}
                                </div>
                            </div>
                            <h3>Dich vu free</h3>
                            {serviceFree.map((serviceFree) =>{
                                return(
                                    <>
                                        <div>- {serviceFree.name}</div>
                                        <hr/>
                                    </>
                                )
                            })}
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

                        <h3>Dich Vu Vip</h3>
                        {vipService.map((vipService) =>{
                            return(
                                <>
                                    <div>- {vipService.name}</div>
                                    <hr/>
                                </>
                            )
                        })}
                        <h4>Mô tả chi tiết NCC</h4>
                        <div>{profileLover.description}</div>
                        <h4>Yêu cầu của NCC</h4>
                        <div>{profileLover.requestToUser}</div>
                    </div>
                    <hr/>
                    <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: "gray"}}>
                        Đánh giá:
                    </div>
                </div>
            </div>
            <Demo img={images}/>
        </>
    )
}