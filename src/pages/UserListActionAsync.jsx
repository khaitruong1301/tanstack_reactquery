import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserActionAsync, getAllUserAsyncThunk } from '../redux/reducers/userReducer';
import CreateUser from './CreateUser';


/*
    action = {
        type:'type_action',
        payload (arr,object,string,....)
    }
*/

const UserListActionAsync = () => {
    const { arrUser } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        const actionThunk = getAllUserAsyncThunk();
        dispatch(actionThunk);
    },[])
    

    console.log(arrUser)
    return (
        <div className='container'>
            <CreateUser />
            <h3>UserList</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>key</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrUser?.map((user, index) => {
                        return <tr key={index}>
                            <td>{user.key}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className='btn btn-danger'>Del</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserListActionAsync