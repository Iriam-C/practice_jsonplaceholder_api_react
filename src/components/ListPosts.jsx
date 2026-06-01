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
            <Title>List of Post</Title>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum!</p>
            
            {listPosts.map ((posteo) => { 
            return <section key={posteo.id}>
                <div style={{margin: "1rem 0", paddingBottom: ".5rem", borderBottom: "1px solid #f0f2f5"}}>
                    <Subtitle>{posteo.title}</Subtitle>
                    <p style={{margin: "0"}}>User ID: {posteo.userId} </p>
                    <p style={{margin: "0"}}>{posteo.body}</p>
                    <Link to={`/posts/edit/${posteo.id}`}>Editar</Link>
                    <button onClick={() => deletePost(posteo.id)} style={{ marginLeft: "10px" }}>Eliminar</button>
                </div>
            </section>
        } ) }
        </Container>
    )
}
