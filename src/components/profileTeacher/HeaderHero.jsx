import '../../assets/components/SectionTeacher.css'
import {AiOutlineShoppingCart}  from 'react-icons/ai';
import styled from 'styled-components'
import  '../../assets/components/ResponsiveTeachers.css';

export const HeaderHero = ({data})=>{
    const Icon  = styled(AiOutlineShoppingCart)`
        height:30px;
        width:30px;
    `;

    return (
       <>
        <section className="about container">
            
           <div className="spaces">

                <figure className="about__image__teacher">
                        <img src={data.imageUrl} alt="nada" />
                </figure>

                <div className="text__teacher">
                    
                    <h2 className="name_teacher">{data.firstName} {data.lastName} </h2>
                </div>
           </div>

            <div className="bnt__teacher">
                <p><a data-scroll href="/" className="btn__buy"> <Icon></Icon> Buy a lesson Package</a></p>
                <div className="or">
                   Or
                </div>
                <p><a href="/" className="btn__demo">Reques a free demo  lesson </a></p>
            </div>

        </section>
        <div className="eslogan container">
            <p>"{data.eslogan}"</p>
        </div>
       </>
    );
}