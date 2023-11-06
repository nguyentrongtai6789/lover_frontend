import {useState} from "react";
export function TopPlayer() {
    const [state, setState] = useState(true);
    function changeBXH(boolean) {
        setState(boolean)
    }
    if (state === true) {
        return(
            <>
                <div className="modal fade" id="top-player" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign:"center", display:"inline"}}>
                                <span style={{fontSize:25, fontWeight:"bold"}}>TOP PLAYER</span>
                                <br/>
                                <span style={{fontSize:20}}>ĐƯỢC THUÊ NHIỀU NHẤT</span>
                            </div>
                            <div className="modal-body">
                                <div  style={{textAlign:"center"}} className={"container-top1"}>
                                    <br/>
                                    <img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top1-player"}/>
                                    <img src="assets/img/game-icon/no1_top_list.jpg" alt="" id={"img-top1-player-frame"}/>
                                    <br/>
                                    <br/>
                                    <span style={{fontWeight:"bold"}}>TOP 1: Thuỳ link kute</span>
                                    <br/>
                                    <span style={{fontWeight:"bold"}}>1234 lượt thuê</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/2.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>1000 giờ</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/3.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>1000 giờ</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/4.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>1000 giờ</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/5.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>1000 giờ</span>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary" onClick={()=>changeBXH(true)} style={{ backgroundColor: '#CCCCCC', color:'black'  }}>Top được thuê nhiều nhất</button>
                                <br/>
                                <button type="button" className="btn btn-primary" style={{ backgroundColor: '#f0564a' }} onClick={() => changeBXH(false)}>
                                    Top được donate nhiều nhất
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return(
            <>
                <div className="modal fade" id="top-player" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header" style={{textAlign:"center", display:"inline"}}>
                                <span style={{fontSize:25, fontWeight:"bold"}}>TOP PLAYER</span>
                                <br/>
                                <span style={{fontSize:20}}>ĐƯỢC DONATE NHIỀU NHẤT</span>
                            </div>
                            <div className="modal-body">
                                <div  style={{textAlign:"center"}} className={"container-top1"}>
                                    <br/>
                                    <img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top1-player"}/>
                                    <img src="assets/img/game-icon/no1_top_list.jpg" alt="" id={"img-top1-player-frame"}/>
                                    <br/>
                                    <br/>
                                    <span style={{fontWeight:"bold"}}>TOP 1: Thuỳ link kute</span>
                                    <br/>
                                    <span style={{fontWeight:"bold"}}>1234 lượt thuê</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/2.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>34,000,000 vnđ</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/3.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>20,000,000 vnđ</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/4.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>10,000,000 vnđ</span>
                                </div>
                                <div style={{position:"relative", marginTop:10}} className={"container-top-player"}>
                                    <span><i className="bi bi-check2-all"></i></span>
                                    <span><img src="assets/img/chefs/girl3.jpg" alt="" id={"img-top-player"}/></span>
                                    <span><img src="assets/img/game-icon/5.png" alt="" id={"img-top-player-frame"}/></span>
                                    <span>Thuỳ link kute</span>
                                    <span style={{position:"absolute", top:18, right:0}}>5,000,000 vnđ</span>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <button type="button" className="btn btn-secondary" onClick={()=>changeBXH(true)}>Top được thuê nhiều nhất</button>
                                <br/>
                                <button type="button" className="btn btn-primary" style={{   backgroundColor: '#CCCCCC', color:'black'   }} onClick={() => changeBXH(false)}>
                                    Top được donate nhiều nhất
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}