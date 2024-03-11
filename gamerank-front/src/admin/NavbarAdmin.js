import React from "react";
import { Link } from "react-router-dom";

export function NavbarAdmin() {
    return (
        <nav class="navbar navbar-dark bg-dark justify-content-between p-3">
            <div className="container-fluid">
                <Link class="navbar-brand" to={"/"}>Adminpage</Link>
                <form class="form-inline">
                    <Link className="btn btn-outline-light my-2 my-sm-0" to = {"/add_game"}>Adicionar Jogo</Link>
                    <Link className="btn btn-outline-light my-2 my-sm-0 mx-3" to = {"/add_user"}>Adicionar Usuário</Link>
                </form>
            </div>
        </nav>
    )
}