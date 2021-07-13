import styled from 'styled-components';
import '../../assets/components/SectionPrices.css';
import {DropdownsItems} from './Dropdowns'
import {DropdownsItemsSpanish} from './DropdownSpanish'
import { DropdownsItemsFrench } from './DropdownsFrench';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {FaTrashAlt} from 'react-icons/fa'
import {Delete_Package} from '../../redux/actions/packageAction'

export const PriceSection = ()=>{
    const dispatch = useDispatch();
    const {items} = useSelector(state => state.package)
    

    let priceEnglish  = false;
    let priceFrench = false;
    let priceSpanish = false;

    let lessonEnglish = ''
    let lessonFrench = ''
    let lessonSpanish = ''
    let data1 = ''
    let data2 = ''
    let data3 = ''

    if(items){

        const English = items.find(x => x.idiom === 'English')
        const French =  items.find(x => x.idiom === 'French')
        const Spanish =  items.find(x => x.idiom === 'Spanish')

        if(English){
            priceEnglish = English.price;
            lessonEnglish = English.lesson;
            data1 = English.idiom
        }
        if(French) {
            priceFrench = French.price
            lessonFrench = French.lesson
            data2 = French.idiom
        }
        if(Spanish){ 
            priceSpanish =  Spanish.price 
            lessonSpanish = Spanish.lesson
            data3 = Spanish.idiom
        }
    }else{
        console.log('else')
    }
    const ClickDelete = (idiom)=>{
        dispatch(Delete_Package(idiom))
    }

    return(
        <>
            <section className="container" >
                <div className="row" id="/Prices">
                    <PartBotonPay>
                        <ItemsCart>{items.length}</ItemsCart>
                        <Link to='/payClient' ><ButtonPay>Pay</ButtonPay> </Link> 
                    </PartBotonPay>
                    <div className="col-md-4">
                        <div className="card mb-2" >
                        <div className="image_card english "> <h4 className="text-center">English</h4> </div>
                            <DropdownsItems idiom={'English'} />
                            {
                                priceEnglish && (
                                    <BoxPackageLesson>
                                        <p className="text-center"> haz elejido el paquete de {lessonEnglish} a un precio de USD {priceEnglish} </p>
                                    </BoxPackageLesson>
                                )
                            }
                            <Box_Buttons>
                                { priceEnglish &&  <Delete onClick={()=> ClickDelete(data1) } > <IconTrash/> </Delete> } 
                            </Box_Buttons>
                            <Security> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg> PAGOS TOTALMENTE SEGUROS </Security> 
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2" >
                        <div className="image_card france "> <h4 className="text-center">French </h4> </div>
                            <DropdownsItemsFrench idiom={'French'}/>
                            {
                                priceFrench && (
                                    <BoxPackageLesson>
                                        <p className="text-center"> haz elejido el paquete de {lessonFrench} a un precio de USD {priceFrench} </p>
                                    </BoxPackageLesson>
                                )
                            }
                            <Box_Buttons>
                                 {priceFrench &&  <Delete onClick={()=> ClickDelete(data2) } ><IconTrash/></Delete> }
                            </Box_Buttons>
                            <Security> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg> PAGOS TOTALMENTE SEGUROS </Security>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2" >
                        
                        <div className="image_card spanish "> <h4 className="text-center">Spanish</h4> </div>
                                <DropdownsItemsSpanish idiom={'Spanish'}  />

                                {
                                    priceSpanish && (
                                        <BoxPackageLesson>
                                            <p className="text-center"> haz elejido el paquete de {lessonSpanish} a un precio de USD {priceSpanish} </p>
                                        </BoxPackageLesson>
                                    )
                                }
                                <Box_Buttons>
                                    {priceSpanish  && <Delete onClick={()=> ClickDelete(data3) } > <IconTrash/> </Delete> }
                                </Box_Buttons>
                                <Security> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></svg> <span>PAGOS TOTALMENTE SEGUROS</span> </Security>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const ButtonPrices  =  styled.button `
    background: #314584;
    color:#fff;
    border:none;
    border-radius:4px;
    line-height:1.2;
    padding:10px 12px;
    font-size:16px;
    &:hover{
        background: rgba(49,69,132,.9)
    }
`
const  Security = styled.div `
    margin:0 auto;
    padding:10px;
    line-height:none;
`

const PartBotonPay = styled.div `
    width:100%;
    display:flex;
    justify-content:flex-end;
    margin-bottom:20px;
    position:relative;
`

const ButtonPay = styled.button  `
    border:none;
    border-radius: 40px;
    padding:4px 10px;
    font-size:18px;
    background: #314584;
    color:white;
    width:100px;
    margin-right:15px;
    position:relative;
    margin-right:30px;
`
const ItemsCart = styled.div `
    position:absolute;
    width:25px;
    height:25px;
    border-radius:50%;
    background:#ff3946;
    z-index:99999;
    right:20px;
    top:-10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:18px;
    font-weight:700;
    color:white;
    box-shadow:0px 0px 8px 6px rgba(0,0,0,0.08);
    margin-right:10px;
`
const Delete  = styled.button `
    background:#F8646D;
    border:none;
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    font-size:16px;
    line-height: 1.2;
    transition:all .2s ease-out;
    &:hover {
        background: #FF3946;
    }
`
const Box_Buttons =  styled.div `
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin-top:10px;
`

const IconTrash =  styled(FaTrashAlt) `
`
const BoxPackageLesson = styled.div `
    display:flex;
    align-items:center;
    width:80%;
    background: rgba(68,189,50,.3);
    margin:0 auto;
    padding:6px 8px;
    margin-top:5px;
    border-radius:5px; 
    p{  
        color:#314584;
        text-align: justify !important;
        vertical-align:middle !important;
        word-spacing:-1.9px !important;
        line-height:.9;
        letter-spacing:0px;
        padding:0;
        font-size:20px;
        margin-bottom:0px;
    }
`