import { useForm } from "react-hook-form"
import {registerRequest} from '../api/auth';

function RegisterPage() {

  const { register, handleSubmit} = useForm()

  return (
    <div className="bg-black   
    flex flex-col h-[calc(100vh-100px)] items-center justify-center	 
     ">

    <form onSubmit={ handleSubmit ( async (values)=>{
      console.log(values)
      const res  = await  registerRequest(values)  
      console.log(res)

          })} 
           
          >

      <input type='text'  {...register('username' , {required: true})} className="w-full bg-zinc-50	text-black  px-4 py-4 my-2
             rounded-md"  placeholder='username'/>

      <input type='email'  {...register('email' , {required: true})} className="w-full bg-zinc-50	text-black  px-4 py-4 my-2
             rounded-md"  placeholder='email' />

      <input type='password'  {...register('password' , {required: true})} className="w-full bg-zinc-50	text-black  px-4 py-4 my-2
             rounded-md"  placeholder='password'/>

      <button type="submit" className='text-neutral-50' > REGISTRE </button>

    </form>

    </div>
  )
}

export default RegisterPage