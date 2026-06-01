import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserPosts() {

    const { id } = useParams()
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {

        const getPosts = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                const data = await res.json()
                setPosts(data)
            } catch (err) {
                setError("Error al cargar publicaciones")
            }
        }

        getPosts()

    }, [id])

    if (error) return <p>{error}</p>

    return (
        <div style={{ margin: "2rem" }}>
        <h1>Publicaciones del usuario {id}</h1>

        {posts.length === 0 ? (<p>Este usuario no tiene publicaciones</p>) 
        :(
           posts.map(post => (
              <div key={post.id} style={{ marginBottom: "1rem" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              
              </div>
                ))
        )}
        </div>
    )
}