import { useState } from "react";
import styled , {css} from "styled-components";
import { IoSearch,IoCheckmarkSharp} from "react-icons/io5";
import { BsFillUnlockFill,BsLockFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from 'axios';
import { getCookie } from '../../../helpers/Auth';

const initialForm = {
  student: "",
};

function SearchStudent({ handleSearch }) {

  const [form, setForm] = useState(initialForm);
  const [DataStudents, setDataStudents] = useState([])
  const [text, setText] = useState('')
  const [suggestion, setSuggestion] = useState([])
  const token = getCookie('token');
  const [checkClick, setCheckClick ] = useState(false);
  const [checkClick2, setCheckClick2 ] = useState(false);
  const [checkClick3, setCheckClick3 ] = useState(false);
  const [checkClick4, setCheckClick4 ] = useState(false);
  const [checkClick5, setCheckClick5 ] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleSearch(form);
    setForm(initialForm);
  };

  const loadStudents =  () =>{
    axios.get('http://localhost:4000/data/getAllStudents',{
        headers:{
            Authorization: `Bearer ${token}`
        } 
    })
    .then(res => setDataStudents(res.data.students))
    .catch(err => console.log(err))
  }

  const onChangeHandler = (text)=>{
    let matches = [];
    
    if(text.length > 0){
        matches = DataStudents.filter(student=>{
          const regex = new RegExp(`${text}`, "gi");
          return student.username.match(regex)
        })
    }
    setSuggestion(matches)
    setText(text)
  }

  const  onSuggestHandler = (text)=>{
    setText(text);
    setSuggestion([])
  }


  useEffect(() => {
    loadStudents();

  }, [])

  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <SearchBox>
          <Input
            type="text"
            placeholder="Student's Name"
            name="student"
            onChange={e => onChangeHandler( e.target.value )}
            value={text}
          />
          <Button type="submit ">
            <IconSearch />
          </Button>
        </SearchBox>
      </Form>
      <br/>
        {
          suggestion && suggestion.map((suggestion, i)=> 
            <BoxFatter>
              <BoxSearch>
                <ItemsSearch key={i} onClick={ ()=> onSuggestHandler( suggestion.username ) } > {suggestion.username} </ItemsSearch>
              </BoxSearch>
            </BoxFatter>
          )
        }
        <BoxExample>
          <BoxCardStudent>
            <ItemsCard end={true}>  <ItemText>Date</ItemText> <InputFecha  placeholder="7/10/2021" /></ItemsCard>
            <ItemsCard block={true} > <ResumenLabel htmlFor="resumen">Class summary</ResumenLabel> <br/> <TextLarge id="resumen" cols="45"></TextLarge></ItemsCard>
            <ItemsCard block={true} > <ResumenLabel htmlFor="observacion">Comments</ResumenLabel> <br/> <TextLarge id="observacion" cols="45"></TextLarge></ItemsCard>
            <ItemsCard block={true} > 
                  <BoxLevels>
                      <ItemLevels active={true} ><NameLevel active={true} > Level A1 </NameLevel> <ButtonRevised active={true}> <IconRevised active={true} /> </ButtonRevised></ItemLevels>


                      <ItemLevels active={true} ><NameLevel active={true} > Level A2 </NameLevel> <ButtonRevisedYellow active={true}  > <IconUnLock active={true} /> </ButtonRevisedYellow ></ItemLevels>


                      <ItemLevels><NameLevel> Level B1 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      <ItemLevels><NameLevel> Level B2 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      <ItemLevels><NameLevel> Level C1 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      <ItemLevels><NameLevel> Level C2 </NameLevel> <ButtonRevised> <IconLock/> </ButtonRevised></ItemLevels>
                      
                    
                  </BoxLevels>

            </ItemsCard>
            <h6 className="text-center">Calificacion</h6>
            <BoxTimeLine>
            <CircleTimeLine check={checkClick} onClick={ ()=> setCheckClick(!checkClick)} ></CircleTimeLine>
            <CircleTimeLine check={checkClick2} onClick={ ()=>setCheckClick2(!checkClick2)} ></CircleTimeLine>
            <CircleTimeLine check={checkClick3} onClick={()=> setCheckClick3(!checkClick3)} ></CircleTimeLine>
            <CircleTimeLine check={checkClick4} onClick={()=> setCheckClick4(!checkClick4)} ></CircleTimeLine>
            <CircleTimeLine check={checkClick5} onClick={()=> setCheckClick5(!checkClick5)} ></CircleTimeLine>
            </BoxTimeLine>
            
          </BoxCardStudent>
        </BoxExample>
    </div>
  );
}

export default SearchStudent;

// ##########################

const BoxLevels = styled.div `
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows: repeat(1,1fr);
  margin: 10px 0 40px;
  gap:5px;
`

const ItemLevels = styled.div `
  display:flex;
  ${'' /* justify-content:space-around; */}
  justify-content:space-between;
  align-items:center;
  width:100%;
  border-radius:10px;
  padding:4px 8px;
  background:${(props)=>(props.active ? "#314584" : "rgba(0,0,0,.4)")};
`
const NameLevel = styled.span `
  font-size:1rem;
  color:${(props)=>(props.active ? "white" : "rgba(0,0,0,.6)")};
`
const ButtonRevised = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
  width:23px;
  height:23px;
  border-radius:50%;
  border:2px solid white;
  background:${(props)=>(props.active ? "#44bd32":"white")};
`
const ButtonRevisedYellow = styled.div `
  display:flex;
  align-items:center;
  justify-content:center;
  width:23px;
  height:23px;
  border-radius:50%;
  border:2px solid white;
  background:${(props)=>(props.active ? "white":"white")};
`
const IconRevised =  styled(IoCheckmarkSharp) `
  font-size:12px;
  color: ${(props)=>(props.active ? "white" : "rgba(0,0,0,.3)")};
`

const IconUnLock = styled(BsFillUnlockFill) `
  font-size:12px;
  color: ${(props)=>(props.active ? "rgba(0,0,0,.6)" : "rgba(0,0,0,1)")};
`

const IconLock = styled(BsLockFill)`
  font-size:12px;
  color: ${(props)=>(props.active ? "rgba(0,0,0,.6)" : "rgba(0,0,0,.6)")} ;
`
// #####  TIME LINE ##########

const BoxTimeLine = styled.div `
  display:grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: repeat(1,1fr);
  margin:10px;
`
const CircleTimeLine = styled.div `
  ${'' /* justify-self:center; */}
  width:20px;
  height:20px;
  background: ${(props)=> (props.check?  "#66C958" : "#919191" )} ;
  border:2px  solid white;
  border-radius:50%;
  z-index:99999;
  cursor:pointer;
  position:relative;
  &::before {
    display:block;
    position:absolute;
    content: '';
    background:rgba(145,145,1145,.4);
    width:50px;
    height:4px;
    left:14px;
    top:6px;
  }
`
// const Line = styled.hr  `
//   position:relative;
//   top:-19px;
//   z-index:0;
//   background:rgba(49,69,132,.5);
//   width:75%;
//   height:2px;
//   margin: 0 auto ;
// `

// ##########################


const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SearchBox = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 250px;
  background: #314584;
  padding:4px;
  padding-right: 0;
  border-radius: 30px;
`;

const Input = styled.input`
  background: transparent;
  width:200px;
  color: white;
  border: none;
  padding-left: 10px;
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-right:10px;
`;
const IconSearch = styled(IoSearch)`

  margin: 0 auto;
  color: #314584;
`;

const BoxFatter = styled.div `
  display:flex;
  justify-content:flex-end;
  position:relative;
  width:100%;
`

const BoxSearch = styled.div `
  position:absolute;
  display:flex;
  width: 250px;
  max-height:120px;
  background: #fff;
  overflow: auto;
  &::-webkit-scrollbar{
    background:rgba(0,0,0,.3);
    width:3px;
  }
  &::-webkit-scrollbar-thumb{
    background: #314584;
  } 
`

const  ItemsSearch = styled.p `
  width:100%;
  padding-left:16px;
  color:black;
  &:hover {
    background: rgba(0,0,0,.3);
    cursor:pointer;
    
  }
  
`

const BoxExample = styled.div `
  ${'' /* background:green; */}
  width:100%;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
`

const BoxCardStudent = styled.div `
  ${'' /* display:none; */}
  width:60%;
  background:#f2f2f2;
  grid-row: 1/2;
  grid-column: 2/3;
  border-radius:8px;
  justify-self:end;
`

const ItemsCard = styled.div `
  width:100%;
  display:${(props)=> (props.block ? "block": "flex")};
  justify-content:${(props)=> (props.end ? "flex-end" : "")};
  align-items:center;
  padding:10px;
  padding-bottom:0;
`

const ItemText =  styled.span  `
  font-size:1rem;
  font-weight:700;
`
const InputFecha = styled.input `
  color: #314584;
  width:100px;
  background:none;
  border:none;
  padding:5px;
  margin-left:5px;
`
const ResumenLabel = styled.label `
  font-size:1rem;
`
const TextLarge = styled.textarea `
  background:transparent;
  color:#314584;
  border:1px solid rgba(49,69,132,.6);
  outline:none;
  resize: none;
  padding:5px;
  width:100%;
  &:focus {
    border:1px solid #00A1F1;
  }

  &::-webkit-scrollbar{
    width:3px;
  }

  &::-webkit-scrollbar-track{
    box-shadow: inset 0 0 10px gray;
  }

  &::-webkit-scrollbar-thumb{
    background-color: #314584;
  }
`

