import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.section`
    margin: 2.5rem 5rem;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: .2rem;
`
const Subtitle = styled.h4`
    color: red;
    margin: 0;
`

export default function ListPosts() {

    const [post, setPost] = useState({})
    const [listPosts, setListPosts] = useState([]);

    useEffect (() => {

    const getPost = async () => {
            let busqueda = await fetch("https://jsonplaceholder.typicode.com/posts/1")
            let data = await busqueda.json() 
            setPost(data)
        }

    const getPosts = async () => {
            let busqueda = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await busqueda.json() 
            setListPosts(data);
        }

   getPost();
   getPosts();

},[] )

        const deletePost = async (id) => {

            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: "DELETE"
            });

            alert("Post eliminado correctamente");

            setListPosts(
                listPosts.filter((post) => post.id !== id)
            );
        };



    return (
        <Container>
         <div className="container mt-4">

    <h1 className="mb-3">List of Posts</h1>

    {listPosts.map(posteo => (
        <div key={posteo.id} className="card mb-3 p-3 shadow-sm">

            <h5 className="text-primary">{posteo.title}</h5>

            <p className="mb-1"><b>User ID:</b> {posteo.userId}</p>

            <p>{posteo.body}</p>

            <div className="d-flex gap-2">
                <Link className="btn btn-warning btn-sm" to={`/posts/edit/${posteo.id}`}>Editar</Link>
                <button className="btn btn-danger btn-sm"onClick={() => deletePost(posteo.id)}> Eliminar</button>
                
                        
                   
            </div>

        </div>
    ))}
</div>
        </Container>
    )
}
