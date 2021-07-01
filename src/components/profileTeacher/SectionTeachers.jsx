import { useEffect } from 'react';
import '../../assets/components/SectionTeacher.css';
export const SectionTeachers = props =>{
    useEffect(() => {
        console.log(props.data)
        
    }, [])
    return(
        <>
            <div className="container">
                <section className="presentation">
                    <p>{props.data.description} </p>
                </section>
                <section className="teaches_profesional">
                    <div className="data">
                        <h4>Languages {props.data.firstName} teaches</h4>
                        {/* {props.data.flags.map((item,index)=>(
                        <div className="data_flag">
                            <img src={item.urlFlag} alt="flag" />
                            <h6>{item.nameFlag}</h6>
                        </div>

                        ))} */}
                    </div>
                    <div className="profesional_background" >
                        <span><h4>Profesional background</h4></span>
                        <p>{props.data.profesionalBackround}</p>
                    </div>
                </section>
                <section>
                    <h4>Hobbies  and interest</h4>
                </section>
            </div>
        </>
    )
}