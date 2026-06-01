import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components'

const Container = styled.section`
    margin: 2.5rem 5rem;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: .2rem;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`;

const FormField  = styled.input`
    width: 30%;
    padding: .8rem;
    margin: .5rem 0;
    border-radius: 10px;
    border: 1px solid #497bad;
    background-color: #fff;
`

const Button = styled.input`
    border: none;
    padding: .8rem;
    border-radius: 10px;
    font-weight: bold;
    background-color: #3D98F4;
    color: #fff;
`

export default function RegisterPost() {

    const{
        register,
        handleSubmit
    } = useForm()

    const verDatos = async (respuesta)=>{
        console.log("Datos del formulario: ", respuesta);
        console.log(respuesta)
    }

//ver datos
    const getPost = async () => {
            let busqueda = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
                method:"POST",
                body: JON.stringify(respuesta),
                userID: respuesta.uderId
            })
            let respuesta = await busqueda.json() 
            setPost(respuesta)
        }


        //
    return (
        <Container>
            <Title>Create a New Post</Title>
            <section>
                <form>
                    <FormGroup>
                        <label>Title</label>
                        <FormField type="text" placeholder ='Enter post title' required{...register ("title")} />
                    </FormGroup>
                    <FormGroup>
                        <label>Body</label>
                        <FormField placeholder='Write your post content here' required {...register ("body")} />
                    </FormGroup>
                    <FormGroup>
                        <label>User ID</label>
                        <FormField type="number" placeholder='Enter user ID' />
                    </FormGroup>
                    <div>
                        <Button type='submit' value='Save Post' />
                    </div>
                </form>
            </section>
        </Container>
    )
}
