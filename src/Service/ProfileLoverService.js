import axios from "axios";

export const fillAllLover = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/profileLoves").then((res) =>{
                return res.data
            }))
    })
}
export const findByIdLover = (id) =>{
    return new Promise( resolve => {
        resolve(
            axios.get("http://localhost:8080/api/profileLoves/" + id).then((res) =>{
                return res.data
            })
        )
    })
}
export const findAllImageByIdProfileLover = (id) =>{
    return new Promise(resolve => {
        resolve(
            axios.post("http://localhost:8080/api/image/search/" + id).then((res) =>{
                return res.data
            })
        )
    })
}