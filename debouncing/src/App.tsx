import {useState} from 'react'
function debounce(func:any,wait:number)
{
  let timer:number|undefined=undefined;
  return function(...args:any)
  {//@ts-ignore
    const context:any=this;
    clearTimeout(timer);
    timer=setTimeout(() => {
      func.apply(context,args)
    }, wait);
  }
}
//@ts-ignore
function apicall(text:string){
  console.log("api is called",text);
}
const debouncefun=debounce(apicall,2000)
export default function App(){
  const [text,settext]=useState('');
  //@ts-ignore
  function handlechange(value:string){
    settext(value);
    debouncefun(value)
  }
  //@ts-ignore
  return <div>
    <div>{text}</div>
    <input onChange={(e)=>handlechange(e.target.value)} type="text" name="text" id="text" value={text}/>
  </div>
}