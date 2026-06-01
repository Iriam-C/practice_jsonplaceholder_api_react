import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

const Container = styled.section`
    margin: 2.5rem 5rem;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: .2rem;
`

const Button = styled.input`
    border: none;
    padding: .8rem;
    margin: 1rem .5rem;
    border-radius: 10px;
    font-weight: bold;
`

export default function EditPost() {

    const { id } = useParams();
    console.log(id);


    const [post, setPost] = useState({
        id: '',
        title: '',
        body: '',
        userId: ''
    });


    useEffect(() => {

    const getPost = async () => {

        const respuesta = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        const data = await respuesta.json();

        setPost(data);
    };

    getPost();

    }, [id]);


     const handleChange = (evento) => {

         setPost ({...post,[evento.target.name]: evento.target.value});

            }
            
        const updatePost = async (e) => {e.preventDefault();

            if (post.title === "" || post.body === "" || post.userId === "") {
                alert("Todos los campos son obligatorios");

            return;

            }

            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post)
            });

            const data = await respuesta.json();

            alert(`Post actualizado correctamente\n\nTítulo: ${data.title}\nUsuario: ${data.userId}`);
        };


    return (

   

        <Container>
        
            <Title>Edit Post</Title>
            <section>
            <form onSubmit={updatePost} className="p-3 border rounded shadow-sm">

                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input className="form-control" value={post.id} disabled />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" name="title" value={post.title} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea className="form-control" name="body" value={post.body} onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">User ID</label>
                    <input className="form-control" name="userId" value={post.userId} onChange={handleChange} />
                </div>

                <button className="btn btn-success">Update Post</button>

            </form>
            </section>
            
        </Container>
    


)
    
}
