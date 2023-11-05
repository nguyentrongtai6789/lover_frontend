import Header from "./Header";
import {Footer} from "./Footer";
import {Demo} from "./Demo";
import {Link} from "react-router-dom";

export function InfoUser() {
    return (
        <>
            <Header/>
            <div className="container-info">
                <div className={"image-info"}>
                    <img src="assets/img/chefs/girl4.jpg"
                         className="img-info" alt=""/><span><Link to={"/"}>Sửa</Link></span>
                    <br/>
                    <span style={{marginTop: 0, fontWeight: "bold", fontSize: 30}}>
                                        Thuỳ Link Kute
                    </span>
                    <span><Link to={"/"}>Sửa</Link></span>
                    <br/>
                    <span style={{marginTop: 0, fontWeight: "bold", color: "green"}}>
                                        Đang sẵn sàng
                            </span>
                    <br/>
                    <span style={{marginTop: 0}}>
                                        Ngày tham gia: 10/10/2020
                            </span>
                    <div className={"image-info-action"}>
                        <button className={"btn-info-action"}>
                            <i className="bi bi-currency-dollar">THUÊ</i>
                        </button>
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
                                <span style={{fontWeight: "bold", color: "grey"}}>Số người theo dõi:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>800</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Đã được thuê:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>1302 giờ</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Tỉ lệ hoàn thành:</span>
                                <span style={{fontWeight: "bold", color: "#d81a1a", marginLeft: 5}}>97,55%</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-check-all" style={{color: "#d81a1a"}}/>
                                <span style={{fontWeight: "bold", color: "grey"}}>Game dual:</span>
                                <span><Link to={"/"}>Sửa</Link></span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="assets/img/game-icon/cf-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Đột kích</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="assets/img/game-icon/lol-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Liên minh huyền thoại</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="assets/img/game-icon/pubg-mobile-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>PUBG mobile</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="assets/img/game-icon/toc-chien-logo.jpg" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Tốc chiến</span>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <i className="bi bi-forward"></i>
                                <img className={"info-info-image"} style={{marginLeft: 3}}
                                     src="assets/img/game-icon/valorant-logo.png" alt=""/>
                                <span style={{marginLeft: 3, fontStyle: "italic"}}>Valorant</span>
                            </div>
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
                                           src="assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginBottom: 15}}>
                                    #2<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginBottom: 15}}>
                                    #3<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginBottom: 15}}>
                                    #4<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="assets/img/game-icon/valorant-logo.png"
                                           alt=""/> Nguyễn Trọng Tài - 1,300,000đ
                                </div>
                                <div style={{marginTop: 5}}>
                                    #5<img className={"info-info-image"} style={{marginLeft: 3}}
                                           src="assets/img/game-icon/valorant-logo.png"
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
                    <div className={"container-list-image-info"} data-bs-toggle={"modal"}
                         data-bs-target={"#list-image-info"}>
                        <span><Link to={"/"}>Sửa</Link></span>
                        <img src="assets/img/chefs/girl1.jpg" className="img-info-list-image" alt=""/>
                        <img src="assets/img/chefs/girl2.jpg" className="img-info-list-image" alt=""/>
                        <img src="assets/img/chefs/girl3.jpg" className="img-info-list-image" alt=""/>
                        <img src="assets/img/chefs/girl4.jpg" className="img-info-list-image" alt=""/>
                        <img src="assets/img/chefs/girl1.jpg" className="img-info-list-image" alt=""/>
                        <div style={{display: "inline-block", position: "relative"}}>
                            <img src="assets/img/chefs/girl2.jpg" className="img-info-list-image" alt=""/>
                            <div className={"img-info-list-image-fade-dive"}>+5</div>
                        </div>
                    </div>
                    <br/>
                    <div style={{textAlign: "justify", marginRight: 13}}>
                        <span><Link to={"/"}>Sửa</Link></span>
                        Hi! Mình là Dâu ♥

                        Giọng con nít!! Đọc Kỹ Trước Khi Rent ạ.

                        sn: 11/05 hhihiih mừn 20 tủi rưỡi..

                        🌸 Nhận hát: có beat, chuyên nhạc buồn, hát dc bolero, trữ tình, một số nhạc hoa,v.v... (1h
                        mình hát 5-6 bài thôi ạ).

                        + Đêm từ 23h mình nhận hát 100k/h ạ.

                        + Hát liên tục cùng lắm là 2h thui ạ... 300k/h ạ.

                        + Hát + game : x2/h ạ.

                        🌸 MC 100/h

                        🌸 call video: x3/h. Kèm hát x4-x5 tùy cảm xúc của mừn ạ hihi ♥

                        🌸 Mở phim: các nền tảng live fim netfix, galaxy play....

                        🌸 Đọc sách, radio

                        🌺Game:

                        +Liên minh: rank KC2 (sever: VN + Na)

                        +Liên quân: rank tinh anh, cao thủ ạ.

                        +Trên steam: Proop and Seek, ARK, Deceit, black Desert, Among Us, Agrou, Business tour, GTA
                        V, Farm together, human fall flat, don't starve together, party animal..

                        🌺 Lắng nghe, tâm sự... tự tin đủ thấu hiểu để lắng nghe và chia sẻ, thật tâm nhất có thể..
                        Nghiêm túc nên khi cần hãy rent.. ( ko xàm, nói không với 18+).

                        🌺 Có míc, míc không ồn, giọng hơi con ít, hơi ít nói với người lạ, quẩy hết sức với người
                        quen.
                    </div>
                    <hr/>
                    <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center", color: "gray"}}>
                        Đánh giá:
                    </div>
                </div>
            </div>
            <Footer/>
            <Demo/>
        </>
    )
}