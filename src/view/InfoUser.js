import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {findByIdAccount} from "../Service/InfoUserService"
import {} from '../css/profileUser.css'
import {storage} from "../firebase/Firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import {RingLoader} from "react-spinners";
import {updateAvatar, updateInfo} from "../Service/InfoUserService"
import {Field, Form, Formik} from "formik";
import {findAllByAccountUserId, deleteById} from "../Service/BillService";
import {AppContext} from "../context/AppContext";

export function InfoUser() {
    const {id} = useParams(); //idAccountUser
    const [profileUser, setProfileUser] = useState({
        avatarImage: "",
        citizenNumber: "",
        lastName: "",
        firstName: "",
        phoneNumber: "",
        account: {
            id: "",
        },
    })
    const [bills, setBills] = useState([])
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)
    const [checkDeleted, setCheckDeleted] = useState(false);

    useEffect(() => {
        findAllByAccountUserId(id)
            .then((res) => {
                setBills(res)
                console.log(bills)
            })
    }, [id,checkDeleted])

    function showImage() {
        const fileInput = document.getElementById('input-avatar-profile-user');
        fileInput.click();
    }

    useEffect(() => {
        findByIdAccount(id, token).then((res) => {
            setProfileUser(res.data)
        })
    }, [id, token])

    function updateAvt(file) {
        setLoading(true)
        const storageRef = ref(storage, `images/${file.name + v4()}`);
        const uploadTask = uploadBytes(storageRef, file);
        uploadTask.then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                profileUser.avatarImage = url;
                updateAvatar(url, id, token)
                    .then(() => {
                        alert("Cập nhật ảnh đại diện thành công!");
                        setLoading(false);
                    })
            })
        })
    }

    function updateInfoProfileUser(profileUser) {
        console.log(profileUser)
        updateInfo(profileUser, token)
            .then((res) => {
                console.log(res)
                setProfileUser(res)
                console.log(profileUser)
                alert("Update thành công!")
            })
            .catch(() => {
                alert("Xảy ra lỗi không thể update!")
            })
    }


    function deleteBill(id) {
        if (window.confirm("Bạn có chắc chắn huỷ đơn này không?")) {
            deleteById(id, token).then(() => {
                setCheckDeleted(!checkDeleted)
            })
        }
    }

    if (loading) {
        return (
            <>
                <div style={{marginTop: 250, marginBottom: 300, display: "flex", justifyContent: "center"}}>
                    <RingLoader color="#f0564a" loading={loading} size={50}/>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container-info">

                <div className={"image-info"} style={{position: "relative"}}>
                    <div>
                        <img src={profileUser.avatarImage} style={{width: 300, height: 300}}
                             className="img-info" alt=""/>
                        <i className="bi bi-gear-fill" id={"setting-avatar-profile-user"} onClick={showImage}></i>
                        <input type="file" id={"input-avatar-profile-user"} onChange={(event) => {
                            updateAvt(event.target.files[0])
                        }} style={{display: "none"}}/>
                    </div>
                    <span style={{marginTop: 0, fontWeight: "bold", fontSize: 30}}>
                        {profileUser.account?.nickname}
                    </span>
                    <br/>
                    <span style={{marginTop: 0, fontWeight: "bold", color: "green"}}>
                        Đang hoạt động
                    </span>
                    <br/>
                    <span style={{marginTop: 0}}>
                                        Ngày tham gia: {profileUser.createAt}
                    </span>
                </div>
                <div className={"info-info"}>
                    <div className={"info-info-container-1"}>
                        <div className={"info-info-1"}>
                            <span style={{fontWeight: "bold", fontSize: 20}}>Thông tin cá nhân:
                                <i className="bi bi-gear-fill" id={"setting-nickname-profile-user"}
                                   data-bs-toggle={"modal"}
                                   data-bs-target={"#edit-info-profile-user"}>
                                </i>
                            </span>
                            <br/>
                            {profileUser.updateAt && <span>(Sửa lần cuối:{profileUser.updateAt})</span>}

                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#f0564a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Số chứng minh nhân dân:</span>
                                <span style={{fontWeight: "bold", color: "#f0564a", marginLeft: 5}}>
                                    {profileUser.citizenNumber}
                                </span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#f0564a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Họ:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>
                                    {profileUser.lastName}
                                </span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#f0564a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Tên:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>
                                    {profileUser.firstName}
                                </span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#f0564a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Số điện thoại:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>
                                    {profileUser.phoneNumber}
                                </span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#f0564a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Hoá đơn bạn đã đặt:</span>
                                <br/>
                                <span>
                                    {(bills.length === 0) && <span>Bạn chưa có hoá đơn nào</span>}
                                    {(bills.length !== 0) &&
                                        <table className={"table table-striped"}>
                                            <tbody>
                                            <tr>
                                                <td>#</td>
                                                <td>Tên lover</td>
                                                <td>Đặt lúc</td>
                                                <td>Thời gian thuê</td>
                                                <td>Tổng tiền</td>
                                                <td>Trạng thái</td>
                                                <td></td>
                                            </tr>
                                            {bills.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{item.accountLover?.nickname}</td>
                                                            <td>{item.createdAt}</td>
                                                            <td>{item.time} giờ</td>
                                                            <td>{item.totalMoney} vnđ</td>
                                                            <td>{item.statusBill?.name}</td>
                                                            <td>
                                                                {(item.statusBill.id === 1) &&
                                                                    <button className={"btn btn-warning"}
                                                                            onClick={() => {
                                                                                deleteBill(item.id)
                                                                            }}>Huỷ</button>}
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                            </tbody>
                                        </table>}
                                </span>
                            </div>
                            <a href="#">Đăng kí tài khoản lover</a>
                        </div>
                    </div>
                    <hr/>
                    <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: "gray"}}>
                        Phản hồi từ lover:
                    </div>
                </div>
            </div>
            <div className="modal fade" id="edit-info-profile-user" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <span style={{fontSize: 25}}>Cập nhật thông tin cá nhân:</span>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={profileUser}
                                enableReinitialize={true}
                                onSubmit={(profileUser) => {
                                    updateInfoProfileUser(profileUser)
                                }}
                            >
                                <Form>
                                    <Field name={"citizenNumber"} placeHolder={"Nhập số căn cước công dân"}
                                           className={"form-control"}></Field>
                                    <Field name={"lastName"} placeHolder={"Nhập họ của bạn"}
                                           className={"form-control"}></Field>
                                    <Field name={"firstName"} placeHolder={"Nhập tên của bạn"}
                                           className={"form-control"}></Field>
                                    <Field name={"phoneNumber"} placeHolder={"Nhập số điện thoại của bạn"}
                                           className={"form-control"}></Field>
                                    <div style={{textAlign: "center", marginTop: 10}}>
                                        <button className="btn btn-secondary" id={"button-update-info-profile-user"}
                                                type={"submit"} data-bs-dismiss="modal"
                                        >Cập nhật
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}