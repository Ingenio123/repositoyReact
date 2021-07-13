import {useEffect,useState} from 'react'

export default function FormPayDatafast(props) {
    const [LoaderForm, setLoaderForm] = useState(false)
    

    useEffect(()=>{
        console.log('estoy en la tarjeta de datafast', props.id)
        const scriptTag = document.createElement('script')
        scriptTag.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${props.id}`
        scriptTag.addEventListener('load',() => setLoaderForm(true))
        document.body.appendChild(scriptTag);

    },[])

    useEffect(() => {
        if(!LoaderForm) return ;
    }, [LoaderForm])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('pay now form')
    }
    return (
        <div className="container" >
            <form action="http://localhost:4000/data/actions" onSubmit={e=> handleSubmit(e)} className="paymentWidgets" data-brands="VISA MASTER DINERS DISCOVER AMEX" ></form>
        </div>
    )
}
