
import {createContext , useState , useContext , useEffect } from 'react';
import {registerRequest , loginRequest } from '../api/auth.js'
import Cookies from 'js-cookie';


 export  const AuthContext = createContext()

 export const useAuth =  () => {
   const context = useContext(AuthContext)
   if(!context){
    throw new Error('UseAuth debe estar dentro de un AuthProvider')
   }
   return context;
 }

 export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated , setIsAuthenticated] = useState(false)
    const [errors , setErrors] =  useState([])

    const signup = async (user) => {  
        try {
            const res = await  registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
            
        } catch (error) {
            setErrors(error.response.data)
        }
     }


     const signin = async (user) => {

        try {
             const res =  await loginRequest(user)
             console.log(res)
             setIsAuthenticated(true)
             setUser(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)) {
             return   setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }
        } 

       useEffect(()=>{
        const cookies  = Cookies.get()

        if(cookies.token){
            console.log(cookies.token)
        }
       },[])


        return <AuthContext.Provider value={{
        signup,
        signin,
        user,
        isAuthenticated,
        errors
        }}>
    
       {children}

        </AuthContext.Provider>
    
 }