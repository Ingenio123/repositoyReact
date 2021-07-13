import { useEffect,useState } from "react"
import {useLocation}  from 'react-router-dom'
import queryString  from 'query-string'
import axios from "axios";
import styled,{css} from 'styled-components'
import Success from '../../assets/images/Success.svg'

const  Reload  = () => {
    window.localStorage.setItem('Reload','true');
}

export default function PageResultDatafast(props) {
    const {search} = useLocation();
    const [Datas, setDatas] = useState({
        valorProducto:'00.00',
        valIva: '00.00',
        total: '00.00'
    })  
    
    useEffect(async () => {
        if(window.localStorage.getItem('Reload')){
            return props.history.push('/')
        }

        const {id} = queryString.parse(search);
        console.log('este el id del action',id)
        const data = {id}
        const res = await  axios.post('http://localhost:4000/data/datafastresults',data);
        console.log('este son los datos de result de la tarjeta de datafast',res.data);
        
        if(res.data){
            Reload();
        }

        setDatas({
            ...Datas,
            valorProducto: res.data.resultado.customParameters.SHOPPER_VAL_BASEIMP,
            valIva: res.data.resultado.customParameters.SHOPPER_VAL_IVA,
            total: res.data.resultado.amount
        })

        console.log(Datas)
    }, [])
    
    return (
        <Container >  
                <BoxPresentacion>
                    <ContainerImage><img src={Success}  /></ContainerImage>
                    <Span>Tododo salio correctamente</Span>
                    <BoxDetails>
                        <span>Details 1: </span>
                        <span>R Details 1</span>
                        <span>Details 2: </span>
                        <span>R Details 2</span>
                        <span>Valor</span>
                        <span>${Datas.valorProducto}</span>
                        <span>Val Iva</span>
                        <span>${Datas.valIva}</span>
                    </BoxDetails>
                    <Line/>
                    <DesTotal>Total: </DesTotal>
                    <ValorTotal><Dollar>$ </Dollar>{Datas.total} <Ctvs>ctvs</Ctvs></ValorTotal>
                </BoxPresentacion>     
        </Container>
    )
}

const Container = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 0 113px;
    padding: 0 15px;
    @media screen and (max-width: 768px){
        margin: 0 30px;
    }
`


const  BoxPresentacion = styled.div `
    width:50%;
    padding:20px 0;
    border:1px solid rgba(0,0,0,0.1);
    display:grid;
    border-radius:20px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: minmax(100px , auto);
    grid-template-areas:"headerImage headerImage"
                        "Resultado Resultado"
                        "Details Details"
                        "line line"
                        "destotal total";
    @media screen and (max-width: 768px){
        width:100%;
        padding:20px;
        grid-template-columns: repeat(1,1fr);
        grid-template-rows: minmax(100px , auto);
        grid-template-areas:"headerImage"
                            "Resultado"
                            "Details Details"
                            "line line"
                            "destotal total";
    }
    box-shadow: 0px 1px 10px 2px rgba(0,0,0,0.1);
`
const ContainerImage = styled.div `
    display: flex;
    justify-content: center;
    width:100%;
    grid-area: headerImage;
    & > img {
        width: 100px;
        padding: 5px 0;
    }
`
const Span = styled.span `
    font-size: 20px;
    text-align: center;
    color:#57606f;
    grid-area: Resultado;
`
const BoxDetails = styled.div `
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: minmax(auto,auto);
    grid-area: Details;
    padding:none;
    margin:none;
    
    & > span {
        align-self: center;
        justify-self: center;
        font-size: 16px;
        color:#95a5a6;
        padding:4px 0;
    }
`

const  VarTotal =  css `
    font-size: 24px;
    color: #57606f;
`
const  DesTotal = styled.span `
    ${VarTotal};
    grid-area:destotal;
    justify-self: center;
`
const ValorTotal  = styled.span `
    ${VarTotal};
    grid-area: total;
    justify-self: center;
    display: flex;
    align-items: center;
`
const Line = styled.hr `
    width: 70%;
    grid-area: line;
    margin: 10px auto;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const Dollar =  styled.span `
    color: #95a5a6;
    font-size: 20px;
    position: relative;
    left: -2px;
`
const Ctvs  = styled.span `
    font-size:16px;
    color: #95a5a6;
    bottom:0px;
    right: -2px;
    position: relative;
`