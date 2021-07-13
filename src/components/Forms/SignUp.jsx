import styled from 'styled-components'
import {useDispatch, useSelector}  from 'react-redux'
import {useForm} from 'react-hook-form';
import {Register}  from '../../redux/actions/authAction'
import { isAuth } from '../../helpers/Auth';
import {withRouter,Redirect,Link} from 'react-router-dom';

const SignUp = props =>{

    const auth = useSelector(state => state.auth)
    const {register,handleSubmit,formState:{errors} }   = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data)=>{

        dispatch(Register(data));
        isAuth() && isAuth().role === 'admin' ? props.history.push('/admin') : props.history.push('/private');
    }
    return(
        <>
            <div className="container">
                {isAuth() ? <Redirect to='/' /> : null}
                <h1 className="title text-center">Bienvenido</h1>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="row mt-4">
                                <div className="col-12 col-md-6">
                                    <div className="form-group">
                                        <label>User name</label>

                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="User Name"
                                        {...register("username", {
                                            required:"UserName is required",
                                            pattern: {
                                                value : /^[A-Za-z]+$/i,
                                                message: "Character no permitidos/ no debe tener espacios"
                                            }
                                            })}
                                        />
                                        <span className="text-samall text-danger"> {errors.username?.message } </span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6"> 
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Age"
                                        {...register(
                                            "age",
                                            {
                                                required:"Age is required",
                                                maxLength: {
                                                    value:2,
                                                    message:"Age max NN"
                                                },
                                                min:{
                                                    value:6,
                                                    message:'Age min 6 to 80'
                                                },
                                                max:{
                                                    value:80,
                                                    message:'Age max 80'
                                                }
                                            }
                                        )}   
                                        />
                                        <span className="text-small text-danger"> {errors.age?.message} </span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email@example.com"
                                        {...register('email',{required:"Email is required"})}
                                        />
                                        <span className="text-small text-danger">{errors.email?.message} </span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        {...register("password",{
                                            required: 'password required',
                                            maxLength:{
                                                value:20,
                                                message: 'max length character is 8'
                                            },
                                            minLength:{
                                                value: 8,
                                                message: 'min lingth character is 4'
                                            }
                                        })}
                                        />
                                        <span className="text-small text-danger">{errors.password?.message } </span>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input 
                                        type="password" 
                                        className="form-control"    
                                        {...register("confirmPassword",{
                                            required: 'Confirm password  is required',
                                            maxLength:{
                                                value:20,
                                                message: 'max length character is 20'
                                            },
                                            minLength:{
                                                value: 8,
                                                message: 'min lingth character is 8'
                                            }
                                        })}
                                        />
                                        { errors.ConfirmPassword&&( <span className="text-small text-danger"> {errors.ConfirmPassword.message} </span>)}

                                    </div>
                                </div>
                                <div className="col col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Your Language</label>
                                        <select 
                                        className="form-control" 
                                        id="exampleFormControlSelect1" 
                                        {...register("your_lenguage")}
                                        >
                                            <option>Spanish</option>
                                            <option>English</option>
                                            <option>French </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <BtnSubmit disabled={false} type="submit" >Send</BtnSubmit>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-6 text-center">
                         <ButtonSignIn to="/SignIn" >Sign In</ButtonSignIn>
                    </div>
                </div>
            </div>
        </>
    );
}
export default withRouter(SignUp);
const BtnSubmit =  styled.button `
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 10px auto;
    width:80%;
    background-color: ${props => (props.disabled ? 'rgba(49, 68, 132, 0.7)' :'#314584') }; 
    color:white;
    font-size: 20px;
    padding:8px 0;
    border:none;
    border-radius:10px;
`
const ButtonSignIn =  styled(Link)`
    font-size:20px;
    font-weight: 700;
    &:hover{
        text-decoration:underline;
    }
`