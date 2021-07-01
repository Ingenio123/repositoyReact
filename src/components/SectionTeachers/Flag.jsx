import '../../assets/components/Flag.css'
export const  Flag = ({nameFlag,imgFlag})=>{
    return(
        <>
            
            <div className="CardImages">
                <div className="card_image_text">
                    <img  className="ImgFlag" src={imgFlag} alt="img" /> {nameFlag}
                </div>
            </div>
        </>
    )
}