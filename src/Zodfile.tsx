import React from 'react'
import {string, z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

const Zodfile = () => {
    const user=z.object({
        firstname:z.string(),
        email:z.string().email(),
        Profileurl:z.string().url(),
        age:z.number().min(18),
        friends:z.array(z.string()).max(4)
    })


    type userdata=z.infer<typeof user>
    // const userSchema ={
    //     firstname:"Muskan",
    //     email:'Muskankewlani123@gmail.com',
    //     Profileurl:"https://google.com",
    //     age:18,
    //     friends:["Muskan","harsh","Ghanju","ChotaGhanju"]
    // }
    // console.log(user.parse(userSchema));//parse will only show the erorr for the object 
    // console.log(user.safeParse(userSchema));//SafeParse will show the object having error in the object  
    const form=useForm<userdata>({
        resolver:zodResolver(user)
    })
  return (
   
    <div>
      
    </div>
  )
}

export default Zodfile
