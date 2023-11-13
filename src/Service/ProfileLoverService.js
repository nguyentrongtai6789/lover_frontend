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
                return navigate("/homeProfileLover/" + id)
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
export const findAllService = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/services").then((res) =>{
                return res.data
            })
        )
    })
}
export const updateListService = (profileLoverId, services) => {
    return axios
        .post(`http://localhost:8080/api/profileLoves/services/${profileLoverId}`, services)
        .then((res) => {
            return res.data; // Trả về dữ liệu phản hồi từ API nếu cần thiết
        })
        .catch((error) => {
            console.error("Lỗi khi cập nhật dịch vụ:", error);
            throw error;
        });
};
export const updateListFreeService = (profileLoverId, freeServices) => {
    return axios
        .post(`http://localhost:8080/api/profileLoves/freeServices/${profileLoverId}`, freeServices)
        .then((res) => {
            return res.data; // Trả về dữ liệu phản hồi từ API nếu cần thiết
        })
        .catch((error) => {
            console.error("Lỗi khi cập nhật dịch vụ:", error);
            throw error;
        });
};
export const findAllFreeService = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/freeService/findAll").then((res) =>{
                return res.data
            })
        )
    })
}
export const findAllVipService = () =>{
    return new Promise(resolve => {
        resolve(
            axios.get("http://localhost:8080/api/vipService/findAll").then((res) =>{
                return res.data
            })
        )
    })
}
export const updateListVipService = (profileLoverId, freeServices) => {
    return axios
        .post(`http://localhost:8080/api/profileLoves/freeServices/${profileLoverId}`, freeServices)
        .then((res) => {
            return res.data; // Trả về dữ liệu phản hồi từ API nếu cần thiết
        })
        .catch((error) => {
            console.error("Lỗi khi cập nhật dịch vụ:", error);
            throw error;
        });
};