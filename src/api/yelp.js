import axios from "axios";

export default axios.create({ 
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {  //use to authorize and gain access to the yelp api
        Authorization: 'KYa0WJPuoVaE1XNx5pClnHPalw7NPWWgClaUkWG6_2r5nj5CK2bvEeSLlUteebd_ODDrFnqhppSGx0ZUICWEEa663gqcPY7p_KX3evAq0r7BVnlm7r9vHqbhZoKKZ3Yx'
}});