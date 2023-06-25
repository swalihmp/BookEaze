import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import login, { getLocal } from '../../helpers/auth'
import { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { toast, Toaster } from 'react-hot-toast'
import Travel from '../../images/travel-login.png'
import Background from '../../images/trylogin.jpg'
import './account.css'
import { useLocation } from 'react-router-dom'

function Login() {
    // const {count} = useSelector((state)=>state.auth)
    // const dispatch = useDispatch()
    const response = getLocal()
    const history = useNavigate()
    const location = useLocation()

    let state = location.state

    useEffect(() => {
        if (response) {
            history('/')
        }
        if (state?.msg){
          toast.success(state?.msg)
          history(state=>({...state,msg:null}))
        }
        if (state?.msgerror){
          toast.error(state?.msgerror)
        }
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const login_response = await login(e);
        console.log(login_response, 'log response');
        // history('/') 
        // let data = login_response.json()
        // console.log('data in login page',data);
        const local_response = getLocal('authToken');
        // console.log(local_response, 'from local storage');
        if (local_response) {
            const location = localStorage.getItem('location')
            const decoded = jwt_decode(local_response)
            console.log(decoded, 'decoded in login page');
            if (decoded.is_admin) {
                history('/ahome')
            } else if (location) {
                history(location, { replace: true })
                localStorage.removeItem('location')
            } else {
                history('/', { replace: true })
            }
        } else {
            toast.error('Invalid User Credentials')
        }
    }

    return (
        <div className='main-div'>
            <Toaster position='top-center' reverseOrder='false' ></Toaster>
            <div className="login-background-contain">
                <img src={Background} alt="" />
            </div>
            <div className='absolute top-16 left-16 flex flex-col w-3/4 p-0 pt-10 pb-10 lg:top-1/4 lg:left-1/4 lg:w-1/2 lg:flex-row h-30 lg:40 items-center bg-white bg-opacity-50 rounded-3xl'>
                <img src={Travel} alt="" className="travel-login" />
                <div className='login-content'>
                    <h1 className='font-bold text-3xl mb-1 login-text'>Login</h1>
                    <p>Please Enter Your Login Details</p>
                    <form className='login-input' onSubmit={handleSubmit} >
                        <div className="login-input-contain">
                            <input className='input-field' type="email" name='username' placeholder='email' />
                        </div>
                        <div className="login-input-contain">
                            <input className='input-field rmv-mb' type="password" name='password' placeholder='password' />
                            <p><Link className='lo-sign' to='/forgot-password'>Forgot Password..?</Link></p>
                        </div>
                        
                        <input className='login-btn-login' type="submit" value='LOGIN' />


                      {/* <p className='px-3 text-primaryViolet'>Don't have an account ?</p>
          
                      <Link to="/register"><button className='px-3 py-2 text-white bg-red-600'>Register</button></Link> */}
                      
                      <Link className='lo-sign' to='/register'>
                        <div className='signup-navi'>
                            <p>Not yet registered..?</p>
                            <p>SignUp</p>
                        </div>
                      </Link>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Login