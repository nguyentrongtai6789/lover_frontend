import React from 'react';
import '../css/login.css'; // Import tệp CSS
export function FormLogin() {
    return (
        <>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ textAlign: "center", display: "inline" }}>
                            <img src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo" style={{ width: "100px" }} />
                            <h1>PlayerDue</h1>
                        </div>
                        <div className="modal-body">
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Tên đăng nhập hoặc Email"} style={{ textAlign: "center" }} />
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Nhập mật khẩu"} style={{ textAlign: "center", marginTop: 10 }} />
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" >Đăng nhập</button>
                            <br />
                            <button type="button" className="btn btn-primary">Đăng nhập bằng FaceBook</button>
                        </div>
                        <div className="text-center">
                            <a href="" className="nav-link scrollto" data-bs-toggle={"modal"} data-bs-target={"#register"}>
                                <span className="register-link">Đăng ký tài khoản</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="register" tabIndex="-1" role="dialog" aria-labelledby="registerTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header" style={{ textAlign: "center", display: "inline" }}>
                            <img src="https://files.playerduo.net/production/static-files/logo.png" alt="Logo" style={{ width: "100px" }} />
                            <h1>PlayerDue</h1>
                        </div>
                        <div className="modal-body">
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Tên đăng nhập"} style={{ textAlign: "center" }} />
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Mật khẩu"} style={{ textAlign: "center", marginTop: 10 }} />
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Nhập lại mật khẩu"} style={{ textAlign: "center" }} />
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Xác thực Email"} style={{ textAlign: "center" }} />
                            <input type="text" className={"form-control"} id={"email-form-login"} placeholder={"Mã xác nhận"} style={{ textAlign: "center" }} />
                            <div className="modal-footer d-flex justify-content-center">
                                <button type="button" className="btn btn-secondary" >Đăn ký tài khoản</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}