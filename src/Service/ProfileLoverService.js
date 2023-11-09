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
export const SortProfileLoversByMoneyDescending = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/profileLoves/sortProfileLoversByMoneyDescending").then((res) =>{
                return res.data
            })
        )
    })
}
export const findAllGender = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/genders").then((res) =>{
                return res.data
            })
        )
    })
}
export const updateProfileLover = (profileLover,navigate,id) =>{
    return new Promise(resolve => {
        resolve(
            axios.post("http://localhost:8080/api/profileLoves",profileLover).then(() =>{
                return navigate("/homeProfileLover/" + id),
                alert("sửa thông tin thành công")
                }
            )
        )
    })
}
export const findAllCountry = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/countrys").then((res) =>{
                return res.data
            })
        )
    })
}
export const findAllCityByIdCountry =(id) =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/citys/" + id).then((res) =>{
                return res.data
            })
        )
    })
}