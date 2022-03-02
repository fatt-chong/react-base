import {
    NavLink,
    Outlet,
    useSearchParams,
    useLocation
  } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Table} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const UsersLists = () =>{

    const [user, setUser] = useState([]);
    const [tamUser, setTamUser] = useState(0);

    useEffect(()=>{
        console.log("solo carga");
        
        getUsers();
    }, []);

 
    //listado de usuarios
    const getUsers = async () => {

        let usuarios = await axios.get("http://localhost:3001/usuarios");
        setUser(usuarios.data.rows);
        setTamUser(usuarios.data.length);
        console.log(usuarios.data.rows);
        //console.log(usuarios.data);
        
    }

    return(
        <>
        <div className="container">
            
            <h1>En listar usuarios</h1>
            
            {
                tamUser === 0 ?
                    <Skeleton count={20} />
                :
                <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
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
        
            }
        </div>    
            
        </>
    );
}
export default UsersLists;