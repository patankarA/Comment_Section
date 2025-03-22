import React, { useState } from 'react'

const InputComment = ({ cdata, setCdata, inputRef} ) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleClick = (e) => {

    if(comment != "") {
      
      const newComment =  {
        id: Date.now(),
        text: comment,
        reply: [],
      }
  
      setCdata([newComment, ...cdata]);
      setComment("");
    }
     
      
  }

  return (
    <>
      <div className='comment_Container'>
        <input 
        ref={inputRef}
        type="text"
        value={comment}
        placeholder='Add a Comment'
        onChange={(e) => { handleChange(e) }}
        className='comment-input'
        />
        <button
        onClick={handleClick}
        >Comment</button>
      </div>
    </>
  )
}

export default InputComment;