import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserPosts() {
const { id } = useParams()
const [posts, setPosts] = useState([])
const [error, setError] = useState("")

        useEffect(() => {const getPosts = async () => {
        try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        const data = await res.json()
        setPosts(data)
        } 

        catch (err) {
            setError("Error al cargar publicaciones")
        }

   } 

        getPosts()
}, [id])

        if (error) return <p>{error}</p>

        return (
            <div className="container mt-4">
            <h1 className="mb-4">Publicaciones del usuario {id}</h1>

            {posts.length === 0 ? (<p className="text-muted">Este usuario no tiene publicaciones</p>) : (

                <div className="row justify-content-center">
                <div className="col-12 col-lg-8">

            {posts.map(post => (
                <div key={post.id} className="card p-4 mb-4 shadow-sm">
                    <h3 className="card-title text-capitalize h5 text-primary mb-2">
                    {post.title}
                    </h3>
                    <p className="card-text text-muted">
                    {post.body}
                    </p>
                </div>
        ))}

            </div>
        </div>
    )}
        </div>
    )
}