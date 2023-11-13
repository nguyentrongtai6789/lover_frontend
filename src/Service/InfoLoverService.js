import axios from "axios";

export const findByIdLover = (id) =>{
    return new Promise( resolve => {
        resolve(
            axios.get("http://localhost:8080/api/profileLover/findById/" + id).then((res) =>{
                return res.data
            })
        )
    })
}
export const findImagesByIdLover = (id) =>{
    return new Promise( resolve => {
        resolve(
            axios.get("http://localhost:8080/api/image/findAllByIdProfileLover/" + id).then((res) =>{
                return res.data
            })
        )
    })
}
export const findFirstImage = (id) => {
    return new Promise( resolve => {
        resolve(
            axios.get("http://localhost:8080/api/image/findAllByIdProfileLover/" + id).then((res) =>{
                return res.data[0]
            })
        )
    })
}