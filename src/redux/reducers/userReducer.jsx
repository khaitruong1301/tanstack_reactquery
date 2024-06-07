import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    arrUser: [
        {
            "key": 1,
            "id": 1,
            "email": "admin",
            "name": "admin",
            "password": 123,
            "gender": true,
            "phone": "",
            "facebookId": "",
            "userTypeId": 'ADMIN',
            "deleted": false,
            "avatar": "user-icon.png",
            "favoriteProducts": null
        }],
    isLoading: false

}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setArrUserAction: (state, action) => {
            state.arrUser = action.payload;
        }
    },
    extraReducers:(builder) =>{
        //api gọi thành công
        builder.addCase(getAllUserAsyncThunk.fulfilled,(state,action)=>{
            state.arrUser = action.payload;
        })
        builder.addCase(getAllUserAsyncThunk.rejected,(state,action)=>{
            state.arrUser = [
                {
                    "key": 1,
                    "id": 1,
                    "email": "admin",
                    "name": "admin",
                    "password": 123,
                    "gender": true,
                    "phone": "",
                    "facebookId": "",
                    "userTypeId": 'ADMIN',
                    "deleted": false,
                    "avatar": "user-icon.png",
                    "favoriteProducts": null
                }];
        });
        builder.addCase(getAllUserAsyncThunk.pending,(state,action)=>{
        });
        
    }
});

export const { setArrUserAction } = userReducer.actions

export default userReducer.reducer

//---------------- action async ---------------
export const getAllUserActionAsync = (keywork = '') => {
    return async (dispatch, getState) => {
        // console.log(getState())
        //Xử lý call api
        const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Users/getAll');
        //Sau khi có được dữ liệu thì dùng actionPayload đưa dữ liệu lên state redux
        const action = setArrUserAction(res.data.content);
        dispatch(action)
    }
}
// ------ action async cách 2 ----------------
export const getAllUserAsyncThunk = createAsyncThunk(
    'userReducer/getAllUserApi',
    async (keywork = '', { dispatch, getState }) => {

        console.log('run code',{ dispatch, getState },{keywork})
        console.log(getState())
        const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Users/getAll');
        return res.data.content;
    },
)




export const signupActionAsync = (usRegis) => {
    return async (dispatch) => {
        const res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signup', usRegis);
        console.log(res.data.content)
        //load lại user
        //axios.get(....)
        const actionAsyncGetAllUser = getAllUserActionAsync();
        dispatch(actionAsyncGetAllUser);
    }
}


