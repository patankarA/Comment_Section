import React, { useState } from 'react'

const InputReply = ({ setReply, index, cdata, setCdata, inputRef }) => {
  const [replyval, setReplyval] = useState("")
  

  const handleChange = (e) => {
    setReplyval(e.target.value)
  }

  const handleClickReply = () => {
    setCdata(prevCdata => {
      return prevCdata.map((item, i) => 
      i === index ? { ...item, reply:[...item.reply, replyval]} : item
    )
    })
    setReply(false)
  }

  const handleClickCancel = () => {
    setReply(false);
  } 

  return (
    <>
      <div className='input_Container'>
        <input 
        ref={inputRef}
        type="text"
        value={replyval}
        onChange={(e) => { handleChange(e) }}
        className='inputContainer-input'
        />
        <button
        onClick={handleClickReply}
        >Reply</button>
        <button
        onClick={handleClickCancel}
        >Cancel</button>
      </div>
    </>
  )
}

export default InputReply;