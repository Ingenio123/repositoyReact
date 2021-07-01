import axios from 'axios';

async function  getIpClient(){
    return axios.get('https://api.ipify.org').then(res => console.log(res.data)).catch(err =>  console.log(err))
}

export const SendDataPayClient  = (shippingData,cardData)=>{
    console.log(shippingData ,cardData )
    const {City,Country,PostCode,firstName,lastName,numberCedula,numberCellPhone,secondName} = shippingData.shippingData;
    const {NameOnCard,Cvv,ExpiresCard,cardNumber} = cardData.card;
    const ip = getIpClient()
    
}