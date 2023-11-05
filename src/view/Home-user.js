import Header from "./Header";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";
import {FormLogin} from "./FormLogin";

export function HomeUser() {
    return (
        <>
            <div id="overlay" className="overlay"></div>
            <div className="container-home-user" id={"container-home-user"}>
                <div className="row">
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl1.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>60,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                        </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl2.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>70,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl3.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>80,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl4.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>90,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl4.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>90,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl4.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>90,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl4.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>90,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                    <div className={"info-lover-home"}>
                        <Link to={"/info-lover"}>
                            <img src="assets/img/chefs/girl4.jpg"
                                 className="img-fluid" alt=""
                                 style={{width: 200, height: 280}}/>
                        </Link>
                        <div style={{width: 200}}>
                            <h6 style={{letterSpacing: 2}}>90,000/h</h6>
                            <span style={{marginTop: 0, fontWeight: "bold"}}>
                                        Thuỳ Link Kute
                                </span>
                            <div className={"like-comment-rate-home"}>
                                    <span style={{marginRight: 5}}>13<i className={"bi bi-heart-fill"}
                                                                        style={{color: "red"}}></i></span>
                                <span style={{marginRight: 5}}>22<i className={"bi bi-chat-dots"}
                                                                    style={{color: "blue"}}></i></span>
                                <span style={{marginRight: 5}}>4.9<i className={"bi bi-star-fill"}
                                                                     style={{color: "orange"}}></i></span>
                            </div>
                            <div className={"container-game-icon"}>
                                <img src="assets/img/game-icon/lol-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/pubg-mobile-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/toc-chien-logo.jpg" alt="" className={"game-icon"}/>
                                <img src="assets/img/game-icon/valorant-logo.png" alt="" className={"game-icon"}/>
                                <span className={"game-of-player-plus"}>+5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}