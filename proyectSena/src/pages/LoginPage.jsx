
import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext.jsx';
import {Link} from 'react-dom';

const LoginPage = () => {

  const {register, handleSubmit , formState:{errors}} = useForm()

  const {signin , errors: signinErrors } = useAuth()
 
  const onSubmit = handleSubmit( (data) => { signin(data) })


  return (
    <div className="bg-black   
    flex flex-col h-[calc(100vh-100px)] items-center justify-center" >

      <div>  <h1 className=' text-neutral-50 font-bold
            text-4xl px-4 py-4 my-2 ' >LOGIN</h1> </div>

        {
            signinErrors.map((error, i)=>(
            <div className='bg-rose-900	 p-2 text-white my-2' key={i}> {error} </div>))
        }


      <form onSubmit={ onSubmit} className=''>


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

            <button type='submit' className='text-neutral-50 font-bold
            text-2xl '>
                    INGRESAR
            </button>

        </form>

        <div>  <button className=' text-neutral-50 font-bold
            text-2xl px-4 py-4 my-2 ' > <a href='/register'> CREAR </a>  </button> </div>

{/* 
        <p className='flex gap-x-2 justify-between'>
            Crear Cuenta <Link to='/register' className='text-white' > CREAR </Link>
        </p> */}

    </div>
  )
}

export default LoginPage