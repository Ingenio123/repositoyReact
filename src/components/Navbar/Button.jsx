import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background-color: ${({ primary })=> ( primary ? '#ff3946': 'blue')};;
    white-sapce:nowrap;
    otline: none;
    border:none;
    min-width:150px;
    max-width:200px;
    cursor:pointer;
    text-decoration:none;
    transition: 0.3s;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: ${({ big }) => ( big ? '16px 40px ': '14px 2px')};
    color:${({primary}) => (primary ? '#fff':'black')};
    &:hover{
        color:white;
        transform:translateY(-5px)
    }

`

