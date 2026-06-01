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
    <div className="container mt-4">
      <h1 className="mb-4">Users</h1>

      <div className="row g-4">
        {users.map(user => (
          
          <div key={user.id} className="col-5">
            <div className="card p-3 h-100">
              <h5>{user.name}</h5>
              <p>{user.email}</p>
              
              <Link className="btn btn-primary btn-sm mt-auto" to={`/users/${user.id}/posts`}> Ver publicaciones</Link>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}