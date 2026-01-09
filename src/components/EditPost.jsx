import React from 'react'
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

const Button = styled.input`
    border: none;
    padding: .8rem;
    margin: 1rem .5rem;
    border-radius: 10px;
    font-weight: bold;
`

export default function EditPost() {
    return (
        <Container>
            <Title>Edit Post</Title>
            <section>
                <form>
                    <div style={{marginBottom: "1rem"}}>
                        <label>ID</label>
                        <input type="text" disabled />
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <label>Title</label>
                        <input type="text" required />
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <label>Body</label>
                        <textarea required ></textarea>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <label>User ID</label>
                        <input type="number"  />
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <Button type='submit' value='Update Post' />
                    </div>
                </form>
            </section>
        </Container>
    )
}
