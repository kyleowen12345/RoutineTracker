import Head from 'next/head'
import { useState } from 'react'
import { useAuth } from '../lib/auth'
import { useRouter } from 'next/router'

export default function Home() {
    const {createUser,user}=useAuth()
    const router = useRouter()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            await createUser(email,password)
            setEmail('')
            setPassword('')
            router.push('/login')
        } catch (error) {
            console.log(error)
        }
      
    }

  return (
    <div >
      <Head>
        <title>Create your Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
   <form onSubmit={handleSubmit}>
       <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
       <input placeholder="Password" onChange={e=>setPassword(e.target.value)} type="password"/>
       <button>Create</button>
   </form>
      
    </div>
  )
}