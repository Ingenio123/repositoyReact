import styled from 'styled-components'
export const FormCheck = styled.div `
    display:grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows:1fr 1fr;
    grid-template-areas: "formulario itemsOrder" "formularioCards nada";
    @media screen  and (max-width: 768px){
        grid-template-rows:1fr 275px 1fr;
        grid-template-areas: "formulario formulario"
                            "formularioCards formularioCards"
                            "itemsOrder itemsOrder";
    }
`
export const BoxForm = styled.form`
    width:100%;
    padding:10px 30px;
    grid-area: formulario;
    
`
export const BoxFormCard = styled.form`
    display: ${(props)=>(props.display? 'none':'')}; 
    grid-area: formularioCards;
    width:100%;
    padding:10px 30px;
`
export const FormCheckOut = styled.div `
    display:grid;
    width:100%; 
    grid-template-columns:1fr 1fr;
    grid-template-rows:repeat( ${(props)=>( props.cardCredit? '3,1fr' : '4,1fr')} );
    grid-template-areas:  "n n" "n2 n2 " "n3 n3" ;
    @media screen and (max-width: 768px){
        grid-template-areas:  "n n" "n2 n2 " "n3 n3" "n4 n4" "n5 n5" ;
    }
    border:2px solid #314584;
    padding:15px;
    border-radius:4px;
`
export const Box_input = styled.div `
    padding:0px 8px;
    align-self:center;
    label{
        cursor:pointer;
        font-size:1rem;
        color:#314584;
    }
    @media screen and (max-width: 768px){
        grid-column:span 2;
    }
`
export const Box_input_submit = styled.div  `
    @media screen and (max-width: 768px){
        grid-area:n5 ;
        margin-top:10px;
    }
    grid-area: n3;
    margin:10px 5px;
    padding:4px 8px;
    align-self:center;
    label{
        cursor:pointer;
        font-size:1rem;
        color:#6763D1;
    }
`
export const Input = styled.input `
    color:gray;
    width:100%;
    font-size:18px;
    border:2px solid silver;
    border-radius:5px;
    padding:3px;
    &:focus{
        border:2px solid rgb(49, 69, 132,.5);
        box-shadow: 0 0 0 .2rem rgba(49,69,132,.25);
    }
`
export const Input_send = styled.input`
    cursor:pointer;
    background: ${(props)=>(props.disabled? '#fff' : '#314584')};
    padding:2px 1rem;
    border:${(props)=>(props.disabled? '2px solid #BEC0CB':'none')};
    color:${(props)=> (props.disabled? '#535966': '#fff')};
    border-radius:5px;
    font-size:18px;

    height:35px;
    margin:0 10px 0 -4px;
`
