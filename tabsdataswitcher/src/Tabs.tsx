import "./App.css"
import {useState,useEffect} from "react"
const data=[{
 id:"html",
 text:" The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
},
{id:"css",
text:"Cascading Style Sheets is a style sheet language used for describingthe presentation of a document written in a markup language such as HTML or XML."
},
{id:"js",
text:"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
}
]

export default function Tabs() {
  const [filter,setfilter] =useState("html");
  const [filtereddata,setfiltereddata]=useState([]);
  const [activetab,setactivetab]=useState("html");
  useEffect(()=>{
    const d=data.filter((d)=>{return d.id===filter});
    //@ts-ignore
    setfiltereddata([...d]);
    setactivetab(filter)
  },[filter])
  //@ts-ignore
 function filterchange(val:string){
  setfilter(val);
}
  return (
    <div>
      <div>
        <button className={activetab=="html"?"active":""} value="html" onClick={(e)=>{filterchange(e.currentTarget.value)}} >HTML</button>
        <button className={activetab=="css"?"active":""} value="css" onClick={(e)=>{filterchange(e.currentTarget.value)}}>CSS</button>
        <button className={activetab=="js"?"active":""} value="js"  onClick={(e)=>{filterchange(e.currentTarget.value)}}>JavaScript</button>
      </div>
      {
       filtereddata.map((f:any)=>{
        return <div>
          <p>{f.text}</p>
        </div>
       })
      }
    </div>
  );
}
