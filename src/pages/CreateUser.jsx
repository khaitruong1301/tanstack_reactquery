import React from 'react'
import {useFormik} from 'formik'
import { signupActionAsync } from '../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
const CreateUser = () => {
    const dispatch = useDispatch();
    const frmRegister = useFormik({
        initialValues:{
            email:'',
            password:'',
            name:'',
            phone:'',
            gender:true
        },
        onSubmit: (userRegister) => {
            console.log(userRegister);
            const actionAsync = signupActionAsync(userRegister);
            dispatch(actionAsync);
        }
    })
  return (
    <form className='w-50 mx-auto container' onSubmit={frmRegister.handleSubmit}>
        <h3>Signup</h3>
        <div className='form-group'>
            <label htmlFor="email">email</label>
            <input className='form-control' id="email" name="email" onChange={frmRegister.handleChange} />
        </div>
        <div className='form-group'>
            <label htmlFor="password">password</label>
            <input className='form-control' id="password" name="password" type="password"  onChange={frmRegister.handleChange}/>
        </div>
        <div className='form-group'>
            <label htmlFor="name">name</label>
            <input className='form-control' id="name" name="name"  onChange={frmRegister.handleChange}/>
        </div>
        <div className='form-group'>
            <label htmlFor="phone">phone</label>
            <input className='form-control' id="phone" name="phone"  onChange={frmRegister.handleChange}/>
        </div>
        <div className='form-group mt-2'>
            <label htmlFor="gender" className='me-2'>Gender:</label>
            <label htmlFor='Male'>Male</label>
            <input className='form-check-input mx-2' type="radio" id="Male" defaultChecked name="gender" value={true}  onChange={frmRegister.handleChange}/>

            <label htmlFor='Female'>Female</label>
            <input className='form-check-input mx-2' type="radio" id="Female" name="gender" value={false}  onChange={frmRegister.handleChange}/> 
        </div>
        <div className='mt-2 form-group'>
                <button className='btn btn-success' type="submit">Signup</button>
        </div>
    </form>
  )
}

export default CreateUser