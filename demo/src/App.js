import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"

function App() {
  useEffect(() => {
    document.querySelector('.App').style.color='#111';
    
  }, [])
  const [first, setfirst] = useState()
  const colors=['red','pink','yellow','orange','blue','grey','green']
  console.log("%c We are Hiring ","color:red;font-size:55px;font-family:serif;")
  return (
    <div className="App"
    style={{margin:"auto",fontSize:"2rem",
    maxWidth:'401px'
  
   
  }}
    >



{
  colors.map((el,index)=>(
    <BoxShadowContainer key={index} color={el}/>
  ))
}


    


    </div>
  );
}




export default App;




const BoxShadowContainer=({color})=>{
 
 
 
 return <h1 
 style={{margin:'12px'}}
 onMouseEnter={(e)=>{
e.target.style.transition="all 500ms"
e.target.style.color=`${color}`;
e.target.style.position='relative';
e.target.style.zIndex=100;
e.target.style.borderRadius='12px';
e.target.style.boxShadow=`1px 2px 23px 14px ${color}`

}}
onMouseLeave={(e)=>{
e.target.style.color="#111"
e.target.style.zIndex=0;

e.target.style.boxShadow="none"

}}
>
 Glow Button
</h1>


}
