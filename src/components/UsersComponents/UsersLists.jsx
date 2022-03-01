import {
    NavLink,
    Outlet,
    useSearchParams,
    useLocation
  } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from 'axios';

const UsersLists = () =>{
    
    useEffect(()=>{
        console.log("solo carga");
        getUsers();
    }, []);

    //listado de usuarios
    const getUsers = async () => {

        let x = await axios.get("http://localhost:3001/usuarios");
        console.log(x);
    }

    return(
        <>
            <h1>En listar usuarios</h1>
        </>
    );
}
export default UsersLists;