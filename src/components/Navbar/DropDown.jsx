import styled  from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {MenuData} from '../../data/MenuData'
import {useDispatch, useSelector} from 'react-redux'
import {authData} from '../../data/AuthData';
import {Logout} from '../../redux/actions/authAction'
import {Link as LinkSmooth } from 'react-scroll';
import {Link}  from 'react-router-dom'

export const DropDown = ({isOpen, toggle })=>{

    const {isAuthenticated} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(Logout())
    }

    return(
        <>
            <DropDownContainer isOpen={isOpen} onClick={toggle} >
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon>
                 <DropdownWrapper>
                    <DropdownMenu>
                        {
                            MenuData.map((item,index)=>(
                                <LinkScroll to={item.Link} key={index} onClick={toggle} >
                                    {item.title}
                                </LinkScroll>
                            ))
                        }
                        {
                            isAuthenticated? <DropdownLink onClick={handleLogout}>Log Out</DropdownLink>: ''
                        }
                        {   
                            isAuthenticated ? <DropdownLink to='/profile'> Perfil </DropdownLink> : authData.map((item,index)=>(
                                <DropdownLink to={item.link} key={index} >
                                    {item.title}
                                </DropdownLink>
                            ))
                        }
                    </DropdownMenu>
                </DropdownWrapper> 
            </DropDownContainer>
        </>
    );
}

const DropDownContainer = styled.div`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:#ff3946;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({isOpen})=>(isOpen ? '1':'0')};
    top:${({isOpen})=>(isOpen ? '0':'-100%')};


    /* responsive */

    @media screen and(max-width: 480px){
        grid-tempalte-rows: repeat(4,60px);

    }
`

const  Icon  = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
const CloseIcon = styled(FaTimes)`
    color:#ffff;
`
const DropdownWrapper = styled.div`
 `
 const DropdownMenu = styled.div`
    display:grid;
    grid-template-colums:1fr;
    grid-template-rows: repeat(4,80px);
`

const DropdownLink = styled(Link)`
    text-align:center;
    margin-bottom:4rem;
    align-items:center;
    justify-contente:center;
    color:#fff;
    font-size:2rem;
    cursor:pointer;
    list-style:none;
    transition: 0.2s ease-in-out;
    &:hover{
        color:#314584;
    }
`

const LinkScroll = styled(LinkSmooth)`
    text-align:center;
    margin-bottom:4rem;
    align-items:center;
    justify-contente:center;
    color:#fff !important;
    font-size:2rem;
    cursor:pointer;
    list-style:none;
    transition: 0.2s ease-in-out;
    &:hover{
        color:#314584;
    }
`

