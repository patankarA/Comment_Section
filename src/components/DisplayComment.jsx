import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import InputReply from './InputReply'


const DisplayComment = ( { index, cdata, setCdata} ) => {
  const [reply, setReply] = useState(false);
  const [disreply, setDisreply] = useState(false);
  const [disreSym, setDisreSym] = useState("🔽");
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);

  
  // Create a reference for the input field
  const inputRef = useRef(null);

  // Focus on the input field after updating state
  useEffect(()=>{
    if(reply && inputRef.current) {
        inputRef.current.focus();
    }
  }, [reply])


  const handleClickReply = () => {
    setReply(true);
  }

  const handleClickShowReply = () => {
        if(disreSym === "🔽") {
            setDisreply(true)
            setDisreSym("🔼")
        } else {
            setDisreply(!disreply);
            setDisreSym("🔽")
        }
  }

  return (
    <div className='display_Comment_box'>
        <div className='display_Comment'>
            <div>{cdata[index].text}</div>

                <div>
                    <span onClick={()=>setCountLike(countLike+1)}>{countLike}👍</span>
                    <span onClick={()=>setCountDislike(countDislike+1)}>{countDislike}👎</span>
                    <button onClick={handleClickReply}>Reply</button>
                </div>

                {/* show replies */}
                {cdata[index].reply.length > 0 && 
                <button
                onClick={handleClickShowReply}
                >
                {disreSym} {cdata[index].reply.length} replies
                </button>
                }


            {disreply && 
                cdata[index].reply.map((item) => {
                    return <div className='display-relies'>{item}</div>
                })
            }
        </div>

        {reply && 
            <div>
               <InputReply 
               setReply={setReply} 
               index = {index} 
               cdata={cdata} 
               setCdata= {setCdata}
               inputRef={inputRef}  // Pass ref to InputReply
               />
            </div>
        }
    </div>
  )
}

export default DisplayComment