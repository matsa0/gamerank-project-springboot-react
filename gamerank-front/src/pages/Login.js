/* eslint-disable eqeqeq */
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    
    let navigate = useNavigate()

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    //onVarChange atualiza os estados criados em cima, enquanto o usuário digita(evento onChange()), ou seja, captura informações dos inputs
    const onUsernameChange=(e) => {
        setUsername(e.target.value)
    }
    const onPasswordChange=(e) => {
        setPassword(e.target.value)
    }

    
    const onSubmit= async(e) => {
        e.preventDefault()
        let valid_login = false

        const user_data = {
            username: username,
            password: password
        }

        try {
            const response = await axios.get("http://localhost:8080/users", user_data)
            
            if(response.status == 200) {
                const users = response.data
    
                users.forEach(user => {
                    if(username == user.username && password == user.password) {
                        valid_login = true
                    }
                });
                
                if(valid_login == true) {
                    if(username == "admin" && password == "admin") {
                        navigate("/admin_games")
                        return;
                    }
                    alert("Login realizado com sucesso!")
                    navigate("/categories")
                }
                else {
                    alert("Credenciais incorretas! Tente novamente.")
                }
            } 
            else {
                console.log("Erro ao obter resposta de usuários: ", response.statusText)
            }
        } 
        catch(error) {
            console.log("Erro ao tentar logar: ", error)
        }

    }


    return (
        <div className="login-background">
            <div className="container d-flex justify-content-center">
                <div className="login-scope">
                    <h2 className="mb-4">Entre no <label>Gamerank!</label></h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="login-input-box form-group mb-2">
                            <label for="exampleInputUsername" className='mb-1 text-left'>Username</label>
                            <input type="text" className="form-control" placeholder="Username" 
                            onChange={(e)=>onUsernameChange(e)} value={username} required/>
                        </div>
                        <div className="login-input-box form-group mb-2">
                            <label for="exampleInputPassword" className='mb-1'>Senha</label>
                            <input type="password" className="form-control" placeholder="Senha" 
                            onChange={(e)=>onPasswordChange(e)} value={password} required/>
                        </div>

                        <div className="btn-section">
                            <button type="submit" className="login-btn btn btn-success mt-4">Entre!</button>
                            <p className="mt-2">Não tem uma conta? <label className="register-link"><Link to={"/register"}>Cadastrar agora!</Link></label></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}