import {Demo} from "../Demo";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    findAllCityByIdCountry,
    findAllCountry, findAllFreeService,
    findAllGender,
    findAllImageByIdProfileLover, findAllService, findAllVipService,
    findByIdLover, updateListFreeService, updateListService, updateListVipService,
    updateProfileLover
} from "../../Service/ProfileLoverService";
import {findByIdAccount} from "../../Service/ProfileUserService";
import '../ProfileLover/HomProfileLover.css';
import {Field, Form, Formik} from "formik";
import {storage} from "../firebase/Firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";
import {updateAvatar} from "../../Service/InfoUserService";
import {RingLoader} from "react-spinners";

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
    let [country, setCountry] = useState([])
    let [idCountry, setIdCountry] = useState(String)
    let [city, setCity] = useState([])
    const token = localStorage.getItem("token")
    const [loading, setLoading] = useState(false)
    const [check, setCheck] = useState(true)
    let [serviceProfileLover, setServiceProfileLover] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [listFreeService, setListFreeService] = useState([])
    const [listVipService, setListVipService] = useState([])
    const idAccount = localStorage.getItem("idAccount")
    console.log(id)


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
            findAllCountry().then((res) => {
                setCountry(res)
            }).catch(() => {
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
            findAllCityByIdCountry(idCountry).then((res) => {
                setCity(res)
            }).catch(() => {
                return []
            })
            findAllService().then((res) => {
                setServiceProfileLover(res)
            }).catch(() => {
                return []
            })
            findAllFreeService().then((res) => {
                setListFreeService(res)
            }).catch(() => {
                return []
            })
            findAllVipService().then((res) => {
                setListVipService(res)
            }).catch(() => {
                return []
            })
        }, [idCountry, loading, check]
    )

    function updateAvtPlover(file) {
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

    function showImage() {
        const fileInput = document.getElementById('input-avatar-profile-user');
        fileInput.click();
    }

    const updatePriceProfileLover = (values) => {
        const updatedProfileLover = {
            ...profileLover,
            price: values.price,
        }
        updateProfileLover(updatedProfileLover, navigate, id).then(() => {
                setCheck(!check)
                return alert("update thanh cong !!!")
            }
        );
    }
    const updateProfileLover1 = (values) => {
        const updatedProfileLover = {
            ...profileLover,
            fullName: values.fullName,
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
        updateProfileLover(updatedProfileLover, navigate, id).then(() => {
                setCheck(!check)
                return alert("update thanh cong !!!")
            }
        );
    };
    if (loading) {
        return (
            <>
                <div style={{marginTop: 250, marginBottom: 300, display: "flex", justifyContent: "center"}}>
                    <RingLoader color="#f0564a" loading={loading} size={50}/>
                </div>
            </>
        )
    }
    const handleCheckboxChange = (serviceId) => {
        setSelectedServices((prevSelectedServices) => {
            if (prevSelectedServices.includes(serviceId)) {
                return prevSelectedServices.filter((id) => id !== serviceId);
            } else {
                return [...prevSelectedServices, serviceId];
            }
        });
        console.log(selectedServices)
    };

    const handleSubmit = () => {
        updateListService(profileLover.id, selectedServices).then(() => {
            setCheck(!check)
            return alert("cập nhập dịch vụ thành công")
        })
    };
    const updateFreeService = () => {
        updateListFreeService(profileLover.id, selectedServices).then(() => {
            setCheck(!check)
            return alert("cập nhập dịch vụ miễn phí thành công")
        })
    }
    const updateVipService = () => {
        updateListVipService(profileLover.id, selectedServices).then(() => {
            setCheck(!check)
            return alert("cập nhập dịch vụ Víp thành công")
        })
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
                            updateAvtPlover(event.target.files[0])
                        }} style={{display: "none"}}/>
                    </div>
                    <span style={{marginTop: 0, fontWeight: "bold", fontSize: 30}}>
                        {profileUser.accountDTO?.nickname}
                    </span>
                    <br/>
                    <span style={{marginTop: 0, fontWeight: "bold", color: "green"}}>
                       <input type="checkbox" className="checkbox"/>
                        <h5>trạng thái :</h5>
                        {profileLover.statusLover?.name}
                    </span>
                    <br/>
                    <span style={{marginTop: 0}}>
                                        Ngày tham gia: {profileLover.createdAt}
                            </span>

                </div>

                <div className="modal fade" id="updateLover" tabIndex="-1" role="dialog" aria-labelledby="updateTitle"
                     aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                                <h1 style={{fontFamily: "inherit"}}>Thông tin cá nhân</h1>
                            </div>
                            <Formik initialValues={profileLover} enableReinitialize={true}
                                    onSubmit={(e) => updateProfileLover1(e)}>
                                <Form>
                                    <div className="modal-body" style={{maxHeight: "400px", overflowY: "scroll"}}>
                                        <h5 style={{fontFamily: "inherit"}}>Họ và tên</h5>
                                        <Field type="text" className="form-control" name="fullName"
                                               style={{textAlign: "center"}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Năm Sinh</h5>
                                        <Field type="date" className="form-control" name="dateOfBirth"
                                               id="email-form-login" style={{textAlign: "center", marginTop: 10}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Số CMT/CCCD</h5>
                                        <Field type="text" className="form-control" name="citizenNumber"
                                               style={{textAlign: "center"}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Giới Tính</h5>
                                        <Field as="select" name="gender.id" className="form-control" id="gender">
                                            <option>------------</option>
                                            {gender.map((c) => (
                                                <option value={c.id}>{c.name}</option>
                                            ))}
                                        </Field>
                                        <h5 style={{fontFamily: "inherit"}}>Quốc Gia</h5>
                                        <select name={'address.wards.district.city.id'} onChange={(e) => {
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
                                        <h5 style={{fontFamily: "inherit"}}>Thanh Pho</h5>
                                        <Field as="select" name="city.id" className="form-control" id="gender">
                                            <option>------------</option>
                                            {city.map((c) => (
                                                <option value={c.id}>{c.name}</option>
                                            ))}
                                        </Field>
                                        <h5 style={{fontFamily: "inherit"}}>chiều cao</h5>
                                        <Field type="text" className="form-control" name="height" id="email-form-login"
                                               style={{textAlign: "center"}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Cân nặng</h5>
                                        <Field type="text" className="form-control" name="weight" id="email-form-login"
                                               style={{textAlign: "center"}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Sở thích</h5>
                                        <Field type="text" className="form-control" name="hobby" id="email-form-login"
                                               style={{textAlign: "center"}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Mô tả bản thân</h5>
                                        <Field type="text" className="form-control" name="description"
                                               id="email-form-login" style={{textAlign: "center"}}/>
                                        <h5 style={{fontFamily: "inherit"}}>Yêu cầu đối với người thuê</h5>
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
                                <i className="bi bi-gear-fill" id={"setting-nickname-profile-user"}
                                   data-bs-toggle={"modal"}
                                   data-bs-target={"#edit-price-profile-lover"}>
                                </i>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Dịch Vụ cơ bản:</span>
                                <i className="bi bi-gear-fill" id={"setting-nickname-profile-user"}
                                   data-bs-toggle={"modal"}
                                   data-bs-target={"#edit-info-profile-user"}>
                                </i>
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
                            <Link to={"/listBillOfProfileLover/" + idAccount}>Danh sách đơn thuê của bạn</Link>
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
                                <i className="bi bi-gear-fill" id={"setting-nickname-profile-user"}
                                   data-bs-toggle={"modal"}
                                   data-bs-target={"#updateLover"}>
                                </i>
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
                        <h4 style={{fontFamily: "inherit"}}>Dịch vụ Free
                            <i className="bi bi-gear-fill" id={"setting-nickname-profile-user"}
                               data-bs-toggle={"modal"}
                               data-bs-target={"#edit-freeService"}>
                            </i>
                        </h4>
                        {serviceFree.map((serviceFree) => {
                            return (
                                <>
                                    <div>- {serviceFree.name}</div>
                                    <hr/>
                                </>
                            );
                        })}
                        <h4 style={{fontFamily: "inherit"}}>Dịch vụ Vip
                            <i className="bi bi-gear-fill" id={"setting-nickname-profile-user"}
                               data-bs-toggle={"modal"}
                               data-bs-target={"#edit-vipService"}>
                            </i>
                        </h4>
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
            <div className="modal fade" id="edit-info-profile-user" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <span style={{fontSize: 25}}>Cập nhật Dịch vụ cơ bản:</span>
                        </div>
                        <div className="modal-body">
                            <div>
                                {serviceProfileLover.map((service) => (
                                    <div key={service.id}>
                                        <input
                                            type="checkbox"
                                            id={`service-${service.id}`}
                                            checked={selectedServices.includes(service.id)}
                                            onChange={() => handleCheckboxChange(service.id)}
                                        />
                                        <label htmlFor={`service-${service.id}`}>{service.name}</label>
                                    </div>
                                ))}
                                <button onClick={handleSubmit} class="btn btn-danger">Cập nhật</button>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="edit-price-profile-lover" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <span style={{fontSize: 25}}>Cập nhật giá dịch vụ:</span>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={profileLover}
                                enableReinitialize={true}
                                onSubmit={(values) => {
                                    updatePriceProfileLover(values)
                                }}
                            >
                                <Form>
                                    <Field name={"price"}
                                           className={"form-control"}></Field>
                                    <div style={{textAlign: "center", marginTop: 10}}>
                                        <button className="btn btn-secondary" id={"button-update-price-profile-user"}
                                                type={"submit"} data-bs-dismiss="modal" class="btn btn-danger"
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
            <div className="modal fade" id="edit-freeService" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <span style={{fontSize: 25}}>Cập nhật Dịch vụ Free:</span>
                        </div>
                        <div className="modal-body">
                            <div>
                                {listFreeService.map((service) => (
                                    <div key={service.id}>
                                        <input
                                            type="checkbox"
                                            id={`service-${service.id}`}
                                            checked={selectedServices.includes(service.id)}
                                            onChange={() => handleCheckboxChange(service.id)}
                                        />
                                        <label htmlFor={`service-${service.id}`}>{service.name}</label>
                                    </div>
                                ))}
                                <button onClick={updateFreeService} class="btn btn-danger">Cập nhật</button>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="edit-vipService" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <span style={{fontSize: 25}}>Cập nhật Dịch vụ Vip:</span>
                        </div>
                        <div className="modal-body">
                            <div>
                                {listVipService.map((service) => (
                                    <div key={service.id}>
                                        <input
                                            type="checkbox"
                                            id={`service-${service.id}`}
                                            checked={selectedServices.includes(service.id)}
                                            onChange={() => handleCheckboxChange(service.id)}
                                        />
                                        <label htmlFor={`service-${service.id}`}>{service.name}</label>
                                    </div>
                                ))}
                                <button onClick={updateVipService} class="btn btn-danger"> Cập nhật</button>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}