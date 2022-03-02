import {
    NavLink,
    Outlet,
    useSearchParams,
    useLocation
  } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Table} from 'react-bootstrap';

const UsersLists = () =>{

    const [user, setUser] = useState([]);
    
    useEffect(()=>{
        console.log("solo carga");
        getUsers();
    }, []);

 
    //listado de usuarios
    const getUsers = async () => {

        let usuarios = await axios.get("http://localhost:3001/usuarios");
        setUser(usuarios.data);
        //console.log(usuarios.data);
        
    }

    return(
        <>
        <div className="container">
            <h1>En listar usuarios</h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
                </tr>
            </thead>
            <tbody>
            {user.map((data)=>(
                <tr>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                </tr>
            ))}

            </tbody>
            </Table>
        </div>
        </>
    );
}
export default UsersLists;