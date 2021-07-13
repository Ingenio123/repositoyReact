import '../../assets/components/ImageForm.css';
import {FcGoogle} from 'react-icons/fc'
import styled from 'styled-components';
import { useState } from 'react';
import {Login} from '../../redux/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'
import { withRouter,Redirect,Link}  from 'react-router-dom'
import {SignInGoogle} from '../../redux/actions/authAction';
import {GoogleLogin} from 'react-google-login'
import axios from 'axios'
import {authenticate,isAuth} from '../../helpers/Auth'

const SignIn =  props =>{
        // ##########  estados ############ 
        const [form, setValue] = useState({
            email: ''
        })
        //#################h################
        const dispatch = useDispatch()

        const auth = useSelector(state => state.auth)


        const handleInput = e =>{
            setValue({
                ...form,
                [e.target.name]:e.target.value
            })

        }

        const handleOnSubmit = (e)=>{
            e.preventDefault();
            

            SubmitLogin(form.email,form.password)
            // ###### IMPORTANT ######## 
//          --> SIEMPRE UTILILIZAR EL DISPATCH PARA LLAMAR EL ACTION <-- 
            dispatch(Login(form))
            // ########################
            props.history.push('/')
            e.target.reset();
        }  
        




        const SubmitLogin = async (email,password)=>{
            // Headers
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            
            const response = await axios.post('http://localhost:4000/data/userSignIn',{email,password},config)

            console.log(response)
            informParent(response)
        }
        



        const responseGoogle = (res)=>{
            sendGoogleToken(res.tokenId)
        }

        const sendGoogleToken = (tokenId)=>{

            // axios.post('https://www.ingenioapi.com/data/authGoogle',{
            axios.post('http://localhost:4000/data/authGoogle',{
            
                idToken:tokenId
            })
            .then(res => {
                informParent(res)
                dispatch(SignInGoogle())
            })
            .catch(err=> console.log('GOOGLE SIGNIN ERROR',err))
        }

        

        const informParent = response => {
            authenticate(response, () => {

                if(isAuth()){
                    if(isAuth().rol === 'admin') return props.history.push('/admin');
                    if(isAuth().rol === 'teacher') return props.history.push('/teacherPage');
                    return props.history.push('/private')
                }
            });
        };
        




    return(
        <>
            <div className="container ">
                    {isAuth() ? <Redirect to='/' /> : null}
                    <h1 className="text-center mt-5">Bienvenido</h1>
                    <div className="row ">
                        <div className="col-md-6   ">
                            <form  onSubmit={handleOnSubmit}>
                                <div className="row mt-4">
                                    <div className="col-12 col-md-12 ">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email@example.com"
                                                onChange={handleInput}    
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                onChange={handleInput}   
                                                />
                                        </div>
                                    </div>
                                    <ButtonSubmit >Submit</ButtonSubmit>
                                </div>
                                
                            </form>
                            <Linea></Linea>
                            <Or>Or</Or>
                            <Centrar>
                               {/* <GoogleButton onClick={signIn} >G Sign In</GoogleButton> */}
                               <GoogleLogin
                                    clientId="669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com"
                                    render={renderProps => (
                                    <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}> <FcGoogle></FcGoogle>  Sing In</GoogleButton>
                                    )}
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            
                            </Centrar>
                            <SingUpCenter>
                                <ButtonSignUp to="/SignUp">Sing Up</ButtonSignUp>
                            </SingUpCenter>
                        </div>

                        <div className="col-md-6 ">
                            <div className="card" >
                                
                            </div>
                        </div>
                </div>
                
            </div>
        </>
    );
}

export default withRouter(SignIn);

const ButtonSubmit = styled.button`
    border-radius:10px;
    border:2px solid #314584 ; 
    padding:8px  24px 4px 24px;
    font-size:20px;
    background:transparent;
    color:#314584;
    transition:.2s ease-in-out;
    margin:0 auto;
    &:hover{
        color:white;
        padding:8px  30px 4px 30px;
        background:#314584;
    }
`
const Linea = styled.hr `
    margin-top:30px;
    width:100%;
`
const Or = styled.span `
    color: #6c757d;
    font-size:18px;
    font-weight:600;
    display:flex;
    justify-content:center;
`

const Centrar = styled.div `
    display:flex;
    justify-content:center;
    margin: 10px 0;
`
const GoogleButton = styled.button `
    color:#ff3946;
    border:2px solid #ff3946;
    background:none;
    padding:8px 1rem;
    font-size:20px;
    font-weight:600;
    border-radius:10px;
    transition:all .3s ease-in-out;
    &:hover{
        background:#ff3946;
        color:white;
        border:none;
        padding:8px 2rem;
    }
`


const  SingUpCenter = styled.div `
    width:100%;
    display:flex;
    justify-content:center;

`

const ButtonSignUp = styled(Link) `
    font-size:20px;
`