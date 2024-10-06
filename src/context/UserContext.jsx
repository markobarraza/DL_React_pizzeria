import { createContext, useState, useEffect } from "react";
import useInput from "../components/UseInput";

export const UserContext = createContext();


const UserProvider = ( {children}) => {
    const [userMail, setUserMail] = useState(null)
    const [user, setUser] = useState(true)
    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState ("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmarPassword, setConfirmarPassword] = useState("")

    const email = useInput("");
    const password = useInput("");
    const confirmarPassword = useInput("");
    
    

    const logout = ()=>{
        localStorage.clear()
        setUser(false)
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
    
        const response = await fetch( "http://localhost:5000/api/auth/login", {  
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          })
        });
    
        const data = await response.json();
        // alert(data?.error || "Authentication successful!" ); 
        localStorage.setItem("token", data.token);


        if (!email.value.trim() || !password.value.trim()) {
            setMensaje("Debe llenar todos los campos")
            setError("mensaje_error")
            return
            
        }else if (password.value.length < 6){
            setMensaje("la contraseña debe contener minimo 6 caracteres")
            setError("mensaje_error")
            return
        }
            setMensaje("Felicitaciones")
            setError("mensaje_exito")
            
            // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
            setEmail ("")
            setPassword ("")

      }


    const validador = async (e)=> {
    e.preventDefault()
    console.log(email.value, password.value, confirmarPassword.value)

    await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value,

        }),
    })

    if  (!email.value.trim() || !password.value.trim() || !confirmarPassword.value.trim()){            
        setMensaje("Debe llenar todos los campos")
        setError("mensaje_error")
        return

    }else if (password.value != confirmarPassword.value){
        setMensaje("las contraseñas deben ser iguales")
        setError("mensaje_error")
        return

    }else if (password.value.length < 6){
        setMensaje("la contraseña debe contener minimo 6 caracteres")
        setError("mensaje_error")
        return
    
    }
        setMensaje("Felicitaciones")
        setError("mensaje_exito")
        
        // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
        // setEmail ("")
        // setPassword ("")
        // setConfirmarPassword ("")
    }  


    useEffect(() => {
        const token_jwt = localStorage.getItem("token")
        if (token_jwt) {
          fetch("http://localhost:5000/api/auth/me", {
            headers: {
              Authorization: `Bearer ${token_jwt}`,
            },
          })
          .then((response) => response.json())
          .then((data) => setUserMail(data));
        }
      }, []);








    return(
        <UserContext.Provider value= {{
            user,
            setUser,
            logout,
            handleSubmit,
            mensaje,
            error,
            email,
            password,
            validador,
            confirmarPassword,
            userMail,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;