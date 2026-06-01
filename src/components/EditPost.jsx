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
                <form onSubmit={updatePost}>
                    <div style={{marginBottom: "1rem"}}>
                        <label>ID</label>
                        <input type="text"  value={post.id}  disabled />
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <label>Title</label>
                        <input type="text" name="title" onChange={handleChange} value={post.title} required />
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <label>Body</label>
                        <textarea value={post.body} onChange={handleChange} name="body"></textarea>

                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <label>User ID</label>
                        <input type="number" value={post.userId} name="userId"  onChange={handleChange}/>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <Button type='submit' value='Update Post' />
                    </div>
                </form>
            </section>
            
        </Container>
    


)
    
}
