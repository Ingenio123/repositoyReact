import styled ,{css} from 'styled-components'
import {MenuData} from '../../data/MenuData'
import {Button} from './Button'
import Bars from '../../assets/images/Bars.svg'
import ingenio  from  '../../assets/images/IngenioLanguages.svg';
import {useSelector} from 'react-redux'
import gravatar from '../../utils/gravatar'
import { authData } from '../../data/AuthData';
import {useDispatch} from 'react-redux'
import  {Logout} from '../../redux/actions/authAction'
import {withRouter} from 'react-router-dom'
import { Link as LinkID } from 'react-scroll';
import {Link} from 'react-router-dom';
import {useGoogleLogin} from 'react-use-googlelogin'

 

const Navbar = ({toggle,history})=>{
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const { signOut } = useGoogleLogin({
      clientId: '669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com',
    })

    const  handleLogout = () => {
      signOut()
      dispatch(Logout())
      history.push('/')
    }
    const profileUser = ()=>{ 
      history.push('/Private')
    }
    return (
      <div id="home" >
      <Nav>
        <LogoImage onClick={() => history.push('/') } > <img src={ ingenio } alt="" />  </LogoImage>
        <MenuBars onClick={toggle} />
        
        <Espacio>
        <NavMenu>

          { MenuData.map((item,index)=>(
            <NavMenuLinks to={item.Link} key={index} smooth={true}  duration={500} spy={true} >
                {item.title}
            </NavMenuLinks>
            ))}
            {
              auth.isAuthenticated ? <NavMenuLinks onClick={handleLogout} > Logo Ut </NavMenuLinks>: ''
            }

            { auth.isAuthenticated ? <ImgPerfil onClick={profileUser} src={ gravatar( auth.email ) } alt={auth.email } /> : authData.map((item,index)=>(
              <ItemAuth to={item.link} key={index}>
                {item.title}
              </ItemAuth>
            )) }
           
        </NavMenu>
        </Espacio>
            {
              auth.isAuthenticated ? '' : <NaVBtn><Button to="/buyNow"  primary="true" big="true">Buy Now</Button> </NaVBtn>}
      </Nav>
    </div>
    );

}
export default withRouter(Navbar) ;


const Nav =  styled.nav`
  height: 60px;
  display:flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index:100;
  position:realtive;
  width:100%;

`


const MenuBars = styled.i`
  display:none;
  @media screen and (max-width: 768px){
    display:block;
    background-image:url(${Bars});
    background-size:contain;
    height:40px;
    width:40px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%, 25%);
  }

`



const NavMenu = styled.div`
  display:flex;
  align-items:center;
  @media screen and (max-width: 768px){
    display:none;
  }
`

const NavLink = css`
  padding:0 1rem;
  height:100%;
  cursor:pointer;
  font-weight:700;
  font-size:1rem;
`

const NavMenuLinks = styled(LinkID)`
  ${NavLink}
`
const ItemAuth = styled(Link) `
  ${NavLink}
`

const NaVBtn = styled.div`
  display:flex;
  margin: 0 24px 0 0;

  @media screen and (max-width: 768px){
    display:none;
  }
`
const Espacio  = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items:center;
  width:80%;
  margin-right:20px;
`
const  LogoImage = styled(Link)`
  width:8rem;
`
const ImgPerfil = styled.img `
  width:35px;
  height:35px;
  border-radius:50%;
  &:hover{
    cursor:pointer;
  }
`