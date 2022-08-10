import React, { useState } from "react";
import "./Login.css";
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import "./components/Label/Label.css";


const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    function handleChange(name, value){
        if(name === 'user'){
            setUser(value)
        } else{
            if(value.length < 6 && value.length != 0){
                setPasswordError(true);               
            }else{
                setPasswordError(false);
                setPassword(value);
            }            
        }
    }

    function ifmatch(param){
        
        if(param.user.length > 0 && param.password.length > 0){                   
            if(param.user === 'alan' && param.password === "123456"){        
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }
    
    function handleSubmit(){
        let account = { user, password }
        if(account){
            ifmatch(account);
        }    
    }



    return (
        <div className="login-container">
            { isLogin ?  
            <p>Cualquier cosa</p> :
            <div id="login">
                <Title text='¡Bienvenido!'/>              
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
                param={passwordError}
                />
                { passwordError &&
                    <label className="label-error">
                        Contraseña muy corta 
                    </label>
                }
                <button onClick={handleSubmit}>
                    Ingresar
                </button>
                { hasError &&
                    <label className="label-alert">
                        Usuario o contraseña incorrectos
                    </label>
                }
            </div>
            }
        </div>
    )
};

export default Login;