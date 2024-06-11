
import { useForm } from 'react-hook-form'
import {useAuth} from '../context/AuthContext';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const RegisterPage = () => {

    const {register, handleSubmit, formState:{errors} } = useForm()
    const{signup , isAuthenticated , errors: registerErrors} = useAuth()  
    const  navigate = useNavigate()

   useEffect( () =>{
    if(isAuthenticated) navigate('/tasks')
   }, [isAuthenticated] )

 const onSubmit=   handleSubmit ( async (values) => { 
    signup(values)
      
    })



  return (
    <div className="bg-black   
    flex flex-col h-[calc(100vh-100px)] items-center justify-center	 
     ">
        {
            registerErrors.map((error, i)=>(
            <div className='bg-rose-900 my-2 p-2 text-white' key={i}> {error} </div>))
        }

        <form onSubmit={ onSubmit
        } className=''>

            <input type='text' {...register('username', {required:true})}
            className="w-full bg-zinc-50	text-black  px-4 py-2 my-2 
             rounded-md" placeholder='username'
            />

            {
                errors.username && (
                    <p className='text-red-600	'>
                        Usuario requerido
                    </p>
                )
            }

            <input type='email' {...register('email' , { required:true})} 
             className="w-full bg-zinc-50	text-black  px-4 py-4 my-2
             rounded-md" placeholder='email'
             />

            {
                errors.email && (
                    <p className='text-red-600	'>
                        Email requerido
                    </p>
                )
            }

            <input type='password' {...register('password' , {required:true})} 
             className="w-full bg-zinc-50	text-black  px-4 py-4 my-2
             rounded-md" placeholder='password'
             />

            {
                errors.password && (
                    <p className='text-red-600	'>
                        Password requerido
                    </p>
                )
            }

            <button type='submit' className='text-neutral-50'>
                    REGISTRAR
            </button>

        </form>
        <div>  <button className=' text-neutral-50 font-bold
            text-2xl px-4 py-4 my-2 ' > <a href='/login'> INGRESAR </a>  </button> </div>


    </div>
  )
}

export default RegisterPage