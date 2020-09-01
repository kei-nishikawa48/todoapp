import React,{useState} from 'react';

const Form = ({addTodo}) => {
  const [value,setValue]=useState("")
  const handleSubmiterr=e =>{
    window.alert("空白です。")
  }

  const handleSubmit = e =>{
      e.preventDefault()
      addTodo(value)    
      const textareaform=document.getElementById("tuika")
      textareaform.value=""
    }
      
    

  return (
    <form onSubmit={value===""?handleSubmiterr:handleSubmit}>
      <input type="text" id="tuika"
      onChange={e=>{
        setValue(e.target.value)
      }}
      />
    </form>
   );
}

export default Form;

