import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError("Error al cargar usuarios");
            }
        };

        getUsers();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <div style={{ margin: "2rem" }}>
            <h1>Usuarios</h1>

            {users.map(user => ( 
            <div key={user.id} style={{ marginBottom: "1rem" }}>
            <p><b>{user.name}</b></p>
            <p>{user.email}</p>
            <Link to={`/users/${user.id}/posts`}>Ver publicaciones</Link>
            </div>
            
            ))}
        </div>
    );
}