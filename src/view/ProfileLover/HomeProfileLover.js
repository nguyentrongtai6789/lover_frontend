import {Demo} from "../Demo";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {
    findAllCityByIdCountry,
    findAllCountry,
    findAllGender,
    findAllImageByIdProfileLover,
    findByIdLover,
    updateProfileLover
} from "../../Service/ProfileLoverService";
import {findByIdAccount} from "../../Service/ProfileUserService";
import '../ProfileLover/HomProfileLover.css';
import {Field, Form, Formik} from "formik";
import {storage} from "../firebase/Firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

export function HomeProfileLover() {
    let [profileLover, setProfileLove] = useState({})
    let {id} = useParams()
    let [images, setImage] = useState([])
    const limit = 5;
    let count = 0;
    const navigate = useNavigate();
    let [service, setService] = useState([]);
    let [serviceFree, setServiceFree] = useState([]);
    let [vipService, setVipService] = useState([]);
    let [profileUser, setProfileUser] = useState({})
    let [gender, setGender] = useState([])
    let [avatarUrl, setAvatarUrl] = useState(null)
    let[country,setCountry] = useState([])
    let [idCountry,setIdCountry] = useState(String)
    let [city,setCity] = useState([])

    useEffect(
        () => {
            findByIdLover(id).then((res) => {
                console.log(res)
                setProfileLove(res)
                setService(res.serviceLovers)
                setServiceFree(res.freeServices)
                setVipService(res.vipServices)
            }).catch(() => {
                return {}
            })
            findAllCountry().then((res) =>{
                setCountry(res)
            }).catch(()=>{
                return []
            })
            findAllImageByIdProfileLover(id).then((res) => {
                setImage(res)
            }).catch(() => {
                return []
            })
            findByIdAccount(id).then((res) => {
                setProfileUser(res)
            }).catch(() => {
                return {}
            })
            findAllGender().then((res) => {
                setGender(res)
            }).catch(() => {
                return []
            })
            findAllCityByIdCountry(idCountry).then((res) =>{
                setCity(res)
            }).catch(()=>{
                return []
            })
        }, [idCountry]
    )
    const handledImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (!file) return;

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Cập nhật trạng thái tải lên nếu cần thiết
            },
            (error) => {
                alert(error.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setAvatarUrl(downloadURL);
                });
            }
        );
    };
    const updateProfileLover1 = (values) => {
        const updatedProfileLover = {
            ...profileLover,
            fullName: values.fullName,
            avatarImage: avatarUrl,
            citizenNumber: values.citizenNumber,
            gender: {
                ...profileLover.gender,
                id: values.gender.id,
            },
            city: {
                ...profileLover.city,
                id: values.city.id,
            },
            dateOfBirth: values.dateOfBirth,
            height: values.height,
            weight: values.weight,
            hobby: values.hobby,
            description: values.description,
            requestToUser: values.requestToUser,
        };
        updateProfileLover(updatedProfileLover, navigate,id).then();
    };

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
                    <div className="text-center">
                        <button href="" className="nav-link scrollto" data-bs-toggle={"modal"}
                                data-bs-target={"#updateLover"}
                                style={{marginLeft: "10px"}} class="btn btn-primary">
                            Sửa thông tin cá nhân
                        </button>
                    </div>

                </div>

                <div className="modal fade" id="updateLover" tabIndex="-1" role="dialog" aria-labelledby="updateTitle"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                                <h1>Thông tin cá nhân</h1>
                            </div>
                            <Formik initialValues={profileLover} enableReinitialize={true}
                            onSubmit={(e) => updateProfileLover1(e)} >
                                <Form>
                                    <div className="modal-body" style={{maxHeight: "400px", overflowY: "scroll"}}>
                                        <h5>avatarImage</h5>
                                        <Field type={'file'} name={'avatarImage1'} className={'form-control'}
                                               id="{'avatarImage'}"
                                               onChange={handledImage}/>
                                        <h5>Họ và tên</h5>
                                        <Field type="text" className="form-control" name="fullName"
                                               style={{textAlign: "center"}}/>
                                        <h5>Năm Sinh</h5>
                                        <Field type="date" className="form-control" name="dateOfBirth"
                                               id="email-form-login" style={{textAlign: "center", marginTop: 10}}/>
                                        <h5>Số CMT/CCCD</h5>
                                        <Field type="text" className="form-control" name="citizenNumber"
                                               style={{textAlign: "center"}}/>
                                        <h5>Giới Tính</h5>
                                        <Field as="select" name="gender.id" className="form-control" id="gender">
                                            <option>------------</option>
                                            {gender.map((c) => (
                                                <option value={c.id}>{c.name}</option>
                                            ))}
                                        </Field>
                                        <h5>Quốc Gia</h5>
                                            <select name={'address.wards.district.city.id'}  onChange={(e) => {
                                                const textCountry = e.target.value;
                                                setIdCountry(textCountry)
                                            }} className={"form-select"}>
                                                <option>--Chọn Quốc Gia--</option>
                                                {country.map((c) => {
                                                    return (
                                                        <option value={c.id}>{c.name}</option>
                                                    )
                                                })}
                                            </select>
                                        <h5>Thanh Pho</h5>
                                        <Field as="select" name="city.id" className="form-control" id="gender">
                                            <option>------------</option>
                                            {city.map((c) => (
                                                <option value={c.id}>{c.name}</option>
                                            ))}
                                        </Field>
                                        <h5>chiều cao</h5>
                                        <Field type="text" className="form-control" name="height" id="email-form-login"
                                               style={{textAlign: "center"}}/>
                                        <h5>Cân nặng</h5>
                                        <Field type="text" className="form-control" name="weight" id="email-form-login"
                                               style={{textAlign: "center"}}/>
                                        <h5>Sở thích</h5>
                                        <Field type="text" className="form-control" name="hobby" id="email-form-login"
                                               style={{textAlign: "center"}}/>
                                        <h5>Mô tả bản thân</h5>
                                        <Field type="text" className="form-control" name="description"
                                               id="email-form-login" style={{textAlign: "center"}}/>
                                        <h5>Yêu cầu đối với người thuê</h5>
                                        <Field type="text" className="form-control" name="requestToUser"
                                               id="email-form-login" style={{textAlign: "center"}}/>
                                        <div className="modal-footer d-flex justify-content-center">
                                            <button type="submit" className="btn btn-secondary">Cập nhập thông tin
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
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
                                <span style={{fontWeight: "bold", color: "grey"}}>Tổng thu nhập:</span>
                                <span style={{
                                    fontWeight: "bold",
                                    color: "#d81a1a",
                                    marginLeft: 5
                                }}>{profileLover.totalMoneyRented} vnd</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Giá thuê:</span>
                                <span style={{
                                    fontWeight: "bold",
                                    color: "#d81a1a",
                                    marginLeft: 5
                                }}>{profileLover.price} vnd</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch Vụ cơ bản:</span>

                            </div>
                            {service.map((service) => {
                                return (
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
                                         alt=""/> Họ Và Tên : {profileLover.fullName}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Năm Sinh : {profileLover.dateOfBirth}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Giới tính : {profileLover.gender?.name}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Quốc gia : {profileLover.city?.country?.name}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Thành Phố : {profileLover.city?.name}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> chiều cao : {profileLover.height} / cm - Cân nặng
                                    : {profileLover.weight} /kg
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Sở Thích : {profileLover.hobby}
                                </div>
                                <div style={{marginBottom: 15}}>
                                    <img className={"info-info-image"} style={{marginLeft: 3}}
                                         src="/assets/img/game-icon/valorant-logo.png"
                                         alt=""/> Số CMT/CCCD : {profileLover.citizenNumber}
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
                        {images.map((image) => {
                            if (count < limit) {
                                count++;
                                return (
                                    <>
                                        <img src={image.urlImage} className="img-info-list-image" alt=""/>

                                    </>
                                )
                            }
                        })}
                        <div style={{display: "inline-block", position: "relative"}}>
                            <img src={profileLover.avatarImage} className="img-info-list-image" alt=""/>
                            <div className={"img-info-list-image-fade-dive"}>+5</div>
                        </div>
                    </div>
                    <br/>
                    <div style={{textAlign: "justify", marginRight: 13}}>
                        <h4 style={{fontFamily: "inherit"}}>Dịch vụ Free</h4>
                        {serviceFree.map((serviceFree) => {
                            return (
                                <>
                                    <div>- {serviceFree.name}</div>
                                    <hr/>
                                </>
                            );
                        })}
                        <h4 style={{fontFamily: "inherit"}}>Dịch vụ Vip</h4>
                        {vipService.map((vipService) => {
                            return (
                                <>
                                    <div>- {vipService.name}</div>
                                    <hr/>
                                </>
                            );
                        })}
                        <h4 style={{fontFamily: "inherit"}}>Yêu cầu :</h4>
                        <div>{profileLover.requestToUser}</div>
                        <h4 style={{fontFamily: "inherit"}}>Mô tả chi tiết:</h4>
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