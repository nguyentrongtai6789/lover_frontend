import {useState} from "react";

export function TopRichMan() {
    const [state, setState] = useState(1);

    function changeBXH(value) {
        setState(value)
    }

    if (state === 1) {
        return (
            <>
                <div className="modal fade" id="top-rich-man" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                                <span style={{fontSize: 25, fontWeight: "bold"}}>TOP ĐẠI GIA</span>
                                <br/>
                                <span style={{fontSize: 20}}>HÔM NAY</span>
                            </div>
                            <div className="modal-body">
                                <div style={{textAlign: "center"}} className={"container-top1"}>
                                    <br/>
                                    <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top1-player"}/>
                                    <img src="assets/img/game-icon/no1_top_list.jpg" alt=""
                                         id={"img-top1-player-frame"}/>
                                    <br/>
                                    <br/>
                                    <span style={{fontWeight: "bold"}}>TOP 1: Thuỳ link kute</span>
                                    <br/>
                                    <span style={{fontWeight: "bold"}}>1234 lượt thuê</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/2.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>1,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/3.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>1,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/4.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>1,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/5.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>1,000,000 vnđ</span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(1)}>
                                    hôm nay
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(2)}>
                                    7 ngày qua
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(3)}>
                                    30 ngày qua
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (state === 2) {
        return (
            <>
                <div className="modal fade" id="top-rich-man" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                                <span style={{fontSize: 25, fontWeight: "bold"}}>TOP ĐẠI GIA</span>
                                <br/>
                                <span style={{fontSize: 20}}>7 NGÀY QUA</span>
                            </div>
                            <div className="modal-body">
                                <div style={{textAlign: "center"}} className={"container-top1"}>
                                    <br/>
                                    <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top1-player"}/>
                                    <img src="assets/img/game-icon/no1_top_list.jpg" alt=""
                                         id={"img-top1-player-frame"}/>
                                    <br/>
                                    <br/>
                                    <span style={{fontWeight: "bold"}}>TOP 1: Thuỳ link kute</span>
                                    <br/>
                                    <span style={{fontWeight: "bold"}}>1234 lượt thuê</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/2.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>7,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/3.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>7,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/4.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>7,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/5.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>7,000,000 vnđ</span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(1)}>
                                    hôm nay
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(2)}>
                                    7 ngày qua
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(3)}>
                                    30 ngày qua
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    if (state === 3) {
        return (
            <>
                <div className="modal fade" id="top-rich-man" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign: "center", display: "inline"}}>
                                <span style={{fontSize: 25, fontWeight: "bold"}}>TOP ĐẠI GIA</span>
                                <br/>
                                <span style={{fontSize: 20}}>30 NGÀY QUA</span>
                            </div>
                            <div className="modal-body">
                                <div style={{textAlign: "center"}} className={"container-top1"}>
                                    <br/>
                                    <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top1-player"}/>
                                    <img src="assets/img/game-icon/no1_top_list.jpg" alt=""
                                         id={"img-top1-player-frame"}/>
                                    <br/>
                                    <br/>
                                    <span style={{fontWeight: "bold"}}>TOP 1: Thuỳ link kute</span>
                                    <br/>
                                    <span style={{fontWeight: "bold"}}>1234 lượt thuê</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/2.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>30,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/3.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>30,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/4.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>30,000,000 vnđ</span>
                                </div>
                                <div style={{position: "relative", marginTop: 10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/5.png" alt=""
                                               id={"img-top-player-frame"}/></span>
                                    <span>Nguyễn Trọng Tài</span>
                                    <span style={{position: "absolute", top: 18, right: 0}}>30,000,000 vnđ</span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(1)}>
                                    hôm nay
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(2)}>
                                    7 ngày qua
                                </button>
                                <button type="button" className="btn btn-primary" onClick={() => changeBXH(3)}>
                                    30 ngày qua
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}