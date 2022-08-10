import React, { useState } from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";


const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    function handleChange(name, value){
        if(name === 'user'){
            setUser(value)
        } else{
            setPassword(value)
        }
    }
    
    function handleSubmit(){
        let account = { user, password }
        if(account){
            console.log('account:', account);
        }    
    }



    return (
        <div className="login-container">
            <div id="login">
                <Title text='Bienvenido'/>

                <img src="https://pbs.twimg.com/profile_images/999420356585705472/9Q7akHEo_400x400.jpg" title="avatar" alt="" />
                
                <Input 
                attribute={{
                    id: 'user',
                    name: 'user',
                    type: 'text',
                    placeholder: 'Usuario'
                }}
                handleChange={handleChange}
                />                
                <Input 
                attribute={{
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Contraseña'
                }}
                handleChange={handleChange}
                />
                <button onClick={handleSubmit}>
                    Ingresar
                </button>

            </div>
        </div>
    )
};

export default Login;