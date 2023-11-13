import {useEffect, useState} from "react";
import {findFirstImage} from "../Service/InfoLoverService"


export function Demo(props) {
    const [image, setImage] = useState("")
    useEffect(() => {
        findFirstImage(props.id)
            .then((res) => {
                console.log(res)
                setImage(res)
            })
    },[props.id])

    function showDemo() {
        let imgFeature = document.querySelector(".image-main")
        let listImg = document.querySelectorAll(".list-img img")
        let prevBtn = document.querySelector(".prev")
        let nextBtn = document.querySelector(".next")
        let currentIndex = 0;
        updateImageByIndex(0)

        function updateImageByIndex(index) {
            document.querySelectorAll('.list-img div').forEach(item => {
                item.classList.remove("active")
            })
            currentIndex = index
            imgFeature.src = listImg[index].getAttribute('src')
            listImg[index].parentElement.classList.add('active')
        }

        listImg.forEach((imgElement, index) => {
            imgElement.addEventListener('click', e => {
                updateImageByIndex(index)
            })
        })
        prevBtn.addEventListener("click", e => {
            if (currentIndex === 0) {
                currentIndex = listImg.length - 1
            } else {
                currentIndex--
            }
            updateImageByIndex(currentIndex)
        })
        nextBtn.addEventListener("click", e => {
            if (currentIndex === listImg.length - 1) {
                currentIndex = 0
            } else {
                currentIndex++
            }
            updateImageByIndex(currentIndex)
        })
    }

    return (
        <>
            <div className="modal fade" id="list-image-info" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="main">
                            <img src={image.urlImage} className="image-main" alt=""/>
                            <div className={"control prev"}><i className="bi bi-chevron-left"></i></div>
                            <div className={"control next"}><i className="bi bi-chevron-right"></i></div>
                        </div>
                        <div className="list-img">
                            {props.img.map((image) => {
                                return (
                                    <div style={{margin: 5}}><img onClick={showDemo} src={image.urlImage}
                                                                  className="image-in-list" alt=""/></div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}