import Header from "../Header";
import {Footer} from "../Footer";
import {Demo} from "../Demo";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findAllImageByIdProfileLover, findByIdLover} from "../../Service/ProfileLoverService";
import {findByIdAccount} from "../../Service/ProfileUserService";
import '../ProfileLover/HomProfileLover.css';
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
            findByIdLover(1).then((res) =>{
                setProfileLove(res)
                setService(res.serviceLovers)
                setServiceFree(res.freeServices)
                setVipService(res.vipServices)
                console.log(res)
            }).catch(() =>{
                return {}
            })
            findAllImageByIdProfileLover(1).then((res) =>{
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
                    <div className="text-center" >
                        <button href="" className="nav-link scrollto" data-bs-toggle={"modal"}data-bs-target={"#updateLover"}
                                style={{marginLeft: "10px"}} class="btn btn-primary">
                            Sửa thông tin cá nhân
                        </button>
                    </div>

                </div>

                <div className="modal fade" id="updateLover" tabIndex="-1" role="dialog" aria-labelledby="updateTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{ textAlign: "center", display: "inline" }}>
                            {/*    <img src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo" style={{ width: "100px" }} />*/}
                                <h1>Thông tin cá nhân</h1>
                            </div>
                            <div className="modal-body">
                                <input type="text" className={"form-control"} id={"email-form-login"} style={{ textAlign: "center" }} />
                                <input type="text" className={"form-control"} id={"email-form-login"} style={{ textAlign: "center", marginTop: 10 }} />
                                <input type="text" className={"form-control"} id={"email-form-login"}  style={{ textAlign: "center" }} />
                                <input type="text" className={"form-control"} id={"email-form-login"}  style={{ textAlign: "center" }} />
                                <input type="text" className={"form-control"} id={"email-form-login"}  style={{ textAlign: "center" }} />
                                <div className="modal-footer d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary" >Cập nhập thông tin</button>
                                </div>
                            </div>
                        </div>
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
                                <span style={{fontWeight: "bold", color: "grey"}}>Tổng thu nhập:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>{profileLover.totalMoneyRented}  vnd</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch Vụ cơ bản:</span>

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
                    <div style={{ textAlign: "justify", marginRight: 13 }}>
                        <h4 style={{ fontFamily: "inherit" }}>Dịch vụ Free</h4>
                        {serviceFree.map((serviceFree) => {
                            return (
                                <>
                                    <div>- {serviceFree.name}</div>
                                    <hr />
                                </>
                            );
                        })}
                        <h4 style={{ fontFamily: "inherit" }}>Dịch vụ Vip</h4>
                        {vipService.map((vipService) => {
                            return (
                                <>
                                    <div>- {vipService.name}</div>
                                    <hr />
                                </>
                            );
                        })}
                        <h4 style={{ fontFamily: "inherit" }}>Yêu cầu :</h4>
                        <div>{profileLover.requestToUser}</div>
                        <h4 style={{ fontFamily: "inherit" }}>Mô tả chi tiết:</h4>
                        <div>{profileLover.description}</div>
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