import React from 'react'
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

export default function ListPosts() {
    return (
        <Container>
            <Title>Latest Posts</Title>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum!</p>
            <section>
                <div style={{margin: "1rem 0", paddingBottom: ".5rem", borderBottom: "1px solid #f0f2f5"}}>
                    <h4 style={{margin: "0"}}>titulo</h4>
                    <p style={{margin: "0"}}>User ID: </p>
                    <p style={{margin: "0"}}>body...</p>
                    <Link to="/">Editar</Link>
                </div>
            </section>
        </Container>
    )
}
