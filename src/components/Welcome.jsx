import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.5rem 0;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
`;

const Title = styled.h1`
    font-size: 2.3rem;
    font-weight: bold;
`

const Button = styled.button`
    border: none;
    padding: .8rem;
    margin: 1rem .5rem;
    border-radius: 10px;
    font-weight: bold;
`

export default function Welcome() {
    return (
        <Container>
            <section>
                <Title>Welcome to API Placeholder</Title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deleniti accusamus? Fugit nemo quidem aut repudiandae ratione? Iusto, eaque incidunt.</p>

                <div>
                    <Button style={{backgroundColor: "#3D98F4", color: "#fff"}}>View Posts</Button>
                    <Button>Create Post</Button>
                </div>
            </section>
        </Container>
    )
}
