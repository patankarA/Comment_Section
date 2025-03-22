import { useEffect, useRef, useState } from 'react'
import InputComment from './components/InputComment'
import DisplayComment from './components/DisplayComment';

function App() {
  const [cdata, setCdata] = useState([]);

  const inputRef = useRef(null);

  useEffect(()=>{
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  // console.log(cdata);
 
  return (
    <>
    <div>
      <InputComment cdata={cdata} setCdata= {setCdata} inputRef={inputRef}/>

      { cdata && cdata.map((item, index)=>{
        return (
          <DisplayComment key={item.id} index = {index} cdata={cdata} setCdata= {setCdata}/>
        )
      })}

    </div>
    </>
  )
}

export default App
