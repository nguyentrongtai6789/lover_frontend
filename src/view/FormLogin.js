import React, {useState} from 'react';
import '../css/login.css';
import {FormRegisterContent} from "./FormRegisterContent";


export function FormLogin() {
    const [showFormRegister, setShowFormRegister] = useState(false);

    function showFormRegis() {
        document.getElementById("content-form-login").style.display = "none";
        document.getElementById("footer-form-register").style.display = "block";
        setShowFormRegister(true)
    }
    function hiddenFormRegis() {
        document.getElementById("content-form-login").style.display = "block";
        document.getElementById("footer-form-register").style.display = "none";
        setShowFormRegister(false)
    }
    return (
        <>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                            <img src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo"
                                 style={{width: "100px"}}/>
                            <h1>PlayerDue</h1>
                        </div>
                        <div id={"container-form"}>
                            <div id={"content-form-login"}>
                                <div className="modal-body">
                                    <input type="text" className={"form-control"} id={"email-form-login"}
                                           placeholder={"Tên đăng nhập hoặc Email"} style={{textAlign: "center"}}/>
                                    <input type="text" className={"form-control"} id={"email-form-login"}
                                           placeholder={"Nhập mật khẩu"} style={{textAlign: "center", marginTop: 10}}/>
                                </div>
                                <div className="modal-footer d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary">Đăng nhập</button>
                                    <br/>
                                    <button type="button" className="btn btn-primary">Đăng nhập bằng FaceBook</button>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="nav-link scrollto">
                                        <span className="register-link" onClick={showFormRegis} >Đăng ký tài khoản</span>
                                    </a>
                                </div>
                            </div>
                            <FormRegisterContent prop={showFormRegister}/>
                            <div id={"footer-form-register"} style={{marginBottom:5, display:"none"}}>
                                <div className="text-center" style={{display:"flex"}}>
                                    <a href="#" className="nav-link scrollto" style={{paddingLeft:10}}>
                                        <span className="register-link" onClick={hiddenFormRegis}>Đăng nhập</span>
                                    </a>
                                    <a href="#" className="nav-link scrollto" style={{paddingLeft:290}}>
                                        <span className="register-link" >Quên mật khẩu</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

