import React, { useState } from 'react'

const DynamicForm = () => {
    const [formFields , setFormFields] = useState([{id : Date.now()}]);

    const handleAddField = ()=>{
        setFormFields([...formFields , {id : Date.now()}]);
    }

    const handleRemoveField = (i)=>{
        let copyArray = [...formFields];
        copyArray.splice(i,1);
        setFormFields(copyArray);
    }

    const handleChange = ( e , index)=>{
        let copyFormFields = [...formFields];
        copyFormFields[index][e.target.name]  = e.target.value;
        setFormFields(copyFormFields);
    }

    const handleSubmit = ()=>{
        console.log(formFields)
    }

  return (
    <div>
        <div style={{display : "flex" , justifyContent : "end"}}>
            <button style={{padding : "10px" , background : "blue" , color : "white"}} onClick={handleAddField}>Add Field</button>
        </div>
        <div>
            {
                formFields.map((item , index)=>{
                    return (
                        <div style={{margin : "20px"}}>
                            {item.id}
                            <input type="text" placeholder='Enter Name' onChange={(e)=>{handleChange(e , index)}} name='name' />
                            <input type="email" placeholder='Enter Email' onChange={(e)=>{handleChange(e , index)}}  name='email' />
                            <input type="number" placeholder='Enter Age' onChange={(e)=>{handleChange(e , index)}} name='age' />
                            <select name="role" id="" onChange={(e)=>{handleChange(e , index)}}>
                                <option value="">Select Value</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="student">Student</option>
                            </select>
                            {index !== 0 && <button onClick={()=>{handleRemoveField(index)}}>X</button>}
                        </div>
                    )
                })
            }
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default DynamicForm