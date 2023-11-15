import "../css/InfoLover.css"
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {findByIdLover, findImagesByIdLover, createBill} from "../Service/InfoLoverService"
import {Demo} from "./Demo";
import {Field, Form, Formik} from "formik";
import {parseCSS} from "@testing-library/jest-dom/dist/utils";

export function InfoLover() {
    const [profileLover, setProfileLover] = useState({})
    const {id} = useParams();
    const [vipService, setVipService] = useState([])
    const [freeService, setFreeService] = useState([])
    const [baseService, setBaseService] = useState([])
    const [linkFb, setLinkFb] = useState("")
    const [images, setImages] = useState([])
    const [idAccount, setIdAccount] = useState(localStorage.getItem("idAccount"));
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [bill, setBill] = useState({
        time: "",
        accountUser: {
            id: 0,
        },
        accountLover: {
            id: 0,
        },
        vipServices: [0],
        totalMoney: 0,
        statusBill: {
            id: 1
        },
    })
    const [moneyTime, setMoneyTime] = useState(0)
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

    function changeTime(time) {
        setMoneyTime(time * profileLover.price)
        bill.time = time;
        let total = bill.totalMoney - moneyTime;
        total += time * profileLover.price;
        setBill({...bill, totalMoney: total})
    }


    function rentLover() {
        if (idAccount === null) {
            return alert("Bạn chưa đăng nhập!")
        }
        if (bill.time === "") {
            return alert("Bạn chưa chọn giờ!")
        }
        bill.accountLover.id = +profileLover.account.id;
        bill.accountUser.id = +idAccount;
        createBill(bill, token)
            .then(() => {
            }).catch(() => {
            alert("Lỗi kết nối!")
        })
        console.log(bill)
    }

    const [selectedOptions, setSelectedOptions] = useState([]); // Mảng chứa các lựa chọn đã chọn

    function handleCheckboxChange(event) {
        let selectedOption = event.target.value; // Giá trị của checkbox đã thay đổi
        if (event.target.checked) {
            // Nếu checkbox được chọn, thêm lựa chọn vào mảng
            selectedOptions.push(selectedOption);
        } else {
            // Nếu checkbox bị bỏ chọn, loại bỏ lựa chọn khỏi mảng
            let index = selectedOptions.indexOf(selectedOption);
            if (index > -1) {
                selectedOptions.splice(index, 1);
            }
        }
        let arr = [];
        for (let i = 0; i < vipService.length; i++) {
            for (let j = 0; j < selectedOptions.length; j++) {
                if (vipService[i].id == selectedOptions[j]) {
                    arr.push(vipService[i]);
                }
            }
        }
        let money = 0;
        for (let i = 0; i < arr.length; i++) {
            money += arr[i].price
        }
        money += moneyTime;
        bill.totalMoney = money;
        console.log(bill.totalMoney)
        setBill({...bill, vipServices: arr})
        console.log(arr)
    }

    return (
        <>
            <div className="container-info">
                <div className={"image-info-lover"} style={{ textAlign: "center"}}>
                   <div>
                       <img src={profileLover.avatarImage}
                            className="img-info" alt=""/>
                   </div>
                    <br/>
                    <div style={{marginTop: 0, fontWeight: "bold", fontSize: 30, textAlign: "center"}}>
                        {profileLover.account?.nickname}
                    </div>
                    <div style={{marginTop: 0, fontWeight: "bold", color: "green", textAlign: "center"}}>
                        {profileLover.statusLover?.name}
                    </div>

                    <div style={{
                        backgroundColor: '#4267b2',
                        padding: '10px',
                        borderRadius: '50%', // Sử dụng border-radius với giá trị 50% để tạo hình tròn
                        display: 'flex',
                        alignItems: 'center', // Căn giữa theo chiều dọc
                        justifyContent: 'center', // Căn giữa theo chiều ngang
                        width: '35px', // Đảm bảo kích thước của div là vuông
                        height: '35px', // Đảm bảo kích thước của div là vuông
                        marginLeft: '40%'
                    }}>
                        <a href="https://www.facebook.com/tuan.sakol"
                           style={{color: '#ffffff', textDecoration: 'none', display: 'block', fontSize: '20px'}}
                           className="facebook">
                            <i className="bx bxl-facebook"></i>
                        </a>
                    </div>

                    <div style={{marginTop: 0}}>
                        Địa chỉ: {profileLover.city?.name}
                    </div>


                    <div style={{marginTop: 0}}>
                        Giá: {profileLover.price}/h
                    </div>

                    <div style={{marginTop: 0}}>
                        Ngày tham gia: {profileLover.createdAt}
                    </div>
                    <div className={"image-info-action"}>

                        {idAccount === null &&
                            <button className={"btn-info-action"}>
                                <i className="bi bi-currency-dollar"
                                   onClick={() => {
                                       alert("Bạn chưa đăng nhập")
                                   }}>THUÊ</i>
                            </button>}
                        {(idAccount !== null && +idAccount !== +profileLover.account?.id && profileLover.statusLover?.id ===1) &&
                            <button className={"btn-info-action"}>
                                <i className="bi bi-currency-dollar"
                                   data-bs-toggle={"modal"}
                                   data-bs-target={"#form-rent-lover"}>THUÊ</i>
                            </button>}
                        {(idAccount !== null && +idAccount !== +profileLover.account?.id && profileLover.statusLover?.id !==1) &&
                            <button className={"btn-info-action"}>
                                <i className="bi bi-currency-dollar"
                                   onClick={()=>{alert("Lover không thể cung cấp dịch vụ lúc này!")}}>THUÊ</i>
                            </button>}
                        <div className="modal fade" id="form-rent-lover" tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content" id={"modal-content-rent-lover"}>
                                    <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                                        <span style={{fontSize: 25, color: "black"}}>THUÊ LOVER</span>
                                    </div>
                                    <div className="modal-body" id={"modal-body-rent-lover"}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Tên lover:</td>
                                                <td>{profileLover.account?.nickname}</td>
                                            </tr>
                                            <tr>
                                                <td>Thời gian muốn thuê:</td>
                                                <td>
                                                    <select name="" id="" onChange={(e) => {
                                                        changeTime(e.target.value)
                                                    }}>
                                                        <option value="">Chọn giờ</option>
                                                        <option value="1">1 giờ</option>
                                                        <option value="2">2 giờ</option>
                                                        <option value="3">3 giờ</option>
                                                        <option value="4">4 giờ</option>
                                                        <option value="5">5 giờ</option>
                                                        <option value="24">1 ngày</option>
                                                        <option value="48">2 ngày</option>
                                                        <option value="168">1 tuần</option>
                                                        <option value="336">2 tuần</option>
                                                        <option value="720">1 tháng</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Chọn dịch vụ VIP:</td>
                                                <td>
                                                    {vipService.map((item) => {
                                                        return (
                                                            <>
                                                                <label htmlFor="">
                                                                    <input type="checkbox"
                                                                           id={"check" + item.id}
                                                                           value={item.id}
                                                                        // checked={vipServicesChecked.some((s) => s.id === item.id)}
                                                                        // onChange={(event) => changeVipServices(event, item)}
                                                                        //  onChange={getMoneyVipService}
                                                                           onChange={handleCheckboxChange}
                                                                    />
                                                                    {item.name} ({item.price}vnđ)
                                                                </label>
                                                                <br/>
                                                            </>

                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Tổng tiền:</td>
                                                <td>{bill.totalMoney} vnđ</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} style={{textAlign: "center"}}>
                                                    <button type={"button"} onClick={rentLover}>Thanh toán</button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-between">
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div style={{position: "relative"}}>
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
                    <div style={{textAlign: "justify", marginRight: 13, marginTop :'20px'}}>
                        <div>{profileLover.description}</div>
                        <h5 style={{fontFamily: "inherit"}}>Yêu cầu đối với người thuê:</h5>
                        <div>{profileLover.requestToUser}</div>
                        <h5 style={{fontFamily: "inherit"}}>Sở thích cá nhân:</h5>
                        <div>{profileLover.hobby}</div>
                        <h5 style={{fontFamily: "inherit"}}>Chiều cao:</h5>
                        {profileLover.height}m
                        <div><h5 style={{fontFamily: "inherit"}}>Cân nặng:</h5>
                            {profileLover.weight}kg</div>
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