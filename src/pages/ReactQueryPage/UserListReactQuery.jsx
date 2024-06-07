import {  useQuery } from '@tanstack/react-query'
import React from 'react'
import { GET_ALL_PRODUCT_API } from '../../util/ReactQuery/queryKey'
import axios from 'axios'
import { getAllProductApi } from '../../services/userApi'

const UserListReactQuery = () => {

    const {isPending,data,isLoading} = useQuery({
        queryKey:[GET_ALL_PRODUCT_API],
        queryFn: getAllProductApi,
        refetchOnWindowFocus: true,
        staleTime: 10 * 1000, //Dữ liệu bị cũ sẽ gọi lại queryFn 
        cacheTime:10 * 1000 //Dữ liệu quá thời gian sẽ xoá cache
    })
    console.log(data);
    console.log(isPending);

    return (
        <div className='container'>
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
                    {isPending  ? <tr><td colSpan={5}>Loading...</td></tr> : data?.map((user, index) => {
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

export default UserListReactQuery