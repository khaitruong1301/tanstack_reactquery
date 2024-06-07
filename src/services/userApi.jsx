import axios from "axios"

export const getAllProductApi = async () => {
    const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Users/getAll')
    return res.data.content
}


export const signUpUserApi = async (registerUserForm) => {
    console.log('resgisterUser',registerUserForm)
    const res  = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signup',registerUserForm);
    return res.data.content;
}