import axios from 'axios';

async function  getIpClient(){
    const res = await axios.get('https://api.ipify.org')
    return res.data;
}

export const SendDataPayClient  = async (shippingData,Cobrar,SumaPrices,items,id,email)=>{
    const {City,Country,PostCode,firstName,lastName,numberCedula,numberCellPhone,secondName} = shippingData;
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
        ipClient,
        Cobrar,
        SumaPrices,
        items,
        id,
        email
    }
    
    const res = await  axios.post('http://localhost:4000/payIngenioLanguages',data)    
    return  res.data;
}