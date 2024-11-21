import React, { useState } from 'react'

const Dataform = () => {
    const [data,setData]=useState({
        firstname:"",
        email:""
    })
    const handlesubmit=(event:React.FormEvent<HTMLFormElement>)=>{
     event.preventDefault();
     console.log(data);
     
    }
    const handleInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input
      type='text'
      placeholder='Enter your name'
      name='firstname'
      value={data.firstname}
      onChange={handleInputchange}
      />
       <input
      type='text'
      placeholder='Enter your email'
      name='email'
      value={data.email}
      onChange={handleInputchange}
      />

        <button type='submit'>Click</button>
      </form>
    </div>
  )
}

export default Dataform
