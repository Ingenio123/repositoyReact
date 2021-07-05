import axios from 'axios';

async function  getIpClient(){
    const res = await axios.get('https://api.ipify.org')
    console.log(res.data)
    return res.data;
}

export const SendDataPayClient  = async (shippingData,cardData,valorPagar)=>{
    console.log(valorPagar);

    const {City,Country,PostCode,firstName,lastName,numberCedula,numberCellPhone,secondName} = shippingData.shippingData;
    const {NameOnCard,Cvv,ExpiresCard,cardNumber} = cardData.card;
    const ipClient = await getIpClient()

    const data = {
        City,
        Country,
        PostCode,
        firstName,
        lastName,
        numberCedula,
        numberCellPhone,
        secondName,
        NameOnCard,
        Cvv,
        ExpiresCard,
        cardNumber,
        ipClient
    }

    const res = await  axios.post('http://192.168.1.3:4000/payIngenioLanguages',data)
    
    return  res.data;
}