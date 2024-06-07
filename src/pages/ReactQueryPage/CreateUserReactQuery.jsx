import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import React from 'react'
import { GET_ALL_PRODUCT_API, SIGN_UP_USER_API } from '../../util/ReactQuery/queryKey'
import { signUpUserApi } from '../../services/userApi'
import UserListReactQuery from './UserListReactQuery'

const CreateUserReactQuery = () => {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [SIGN_UP_USER_API],
    mutationFn: signUpUserApi,
    onSuccess: (res) => {
      console.log('onsuccess', res);
      //Code gọi api getAll để nạp dữ liệu...
      //Thực thi lại query function dựa trên query key này
      queryClient.invalidateQueries(GET_ALL_PRODUCT_API)
    }

  })

  const frmRegister = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
      gender: true
    },
    onSubmit: (userRegister) => {
      //Sau khi lấy dữ liệu từ form thì gọi api
      mutation.mutateAsync(userRegister);
    }
  })
  return <>
    <form className='w-50 mx-auto container' onSubmit={frmRegister.handleSubmit}>
      <h3>Signup</h3>
      <div className='form-group'>
        <label htmlFor="email">email</label>
        <input className='form-control' id="email" name="email" onChange={frmRegister.handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor="password">password</label>
        <input className='form-control' id="password" name="password" type="password" onChange={frmRegister.handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor="name">name</label>
        <input className='form-control' id="name" name="name" onChange={frmRegister.handleChange} />
      </div>
      <div className='form-group'>
        <label htmlFor="phone">phone</label>
        <input className='form-control' id="phone" name="phone" onChange={frmRegister.handleChange} />
      </div>
      <div className='form-group mt-2'>
        <label htmlFor="gender" className='me-2'>Gender:</label>
        <label htmlFor='Male'>Male</label>
        <input className='form-check-input mx-2' type="radio" id="Male" defaultChecked name="gender" value={true} onChange={frmRegister.handleChange} />

        <label htmlFor='Female'>Female</label>
        <input className='form-check-input mx-2' type="radio" id="Female" name="gender" value={false} onChange={frmRegister.handleChange} />
      </div>
      <div className='mt-2 form-group'>
        <button className='btn btn-primary' type="submit">Signup</button>
      </div>
    </form>
    <hr />
    <div className='container'>
    <h3>UserList</h3>
    <UserListReactQuery />
    </div>
 
  </>
}

export default CreateUserReactQuery