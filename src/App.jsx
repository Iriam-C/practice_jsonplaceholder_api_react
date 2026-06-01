import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled from "styled-components"
import Welcome from "./components/Welcome"
import ListPosts from "./components/ListPosts"
import RegisterPost from "./components/RegisterPost"
import EditPost from "./components/EditPost"
import Users from "./components/Users";
import UserPosts from "./components/UserPosts";


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    border-bottom: 1px solid #f0f2f5;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
`

const TitileHeader = styled.h2`
    font-weight: bold;
`

const ItemNav = styled.li`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.2rem;
    font-weight: bold;
`

function App() {

  return (
    <BrowserRouter>
    
    <HeaderContainer>
        <TitileHeader>API Placeholder</TitileHeader>
        <nav>
            <ul>
                <ItemNav>
                    <Link to='/' style={{color: "#000", textDecoration: "none", marginTop: "3px"}}>Home</Link>
                </ItemNav>
                <ItemNav>
                    <Link to='/posts' style={{color: "#000", textDecoration: "none"}}>Posts</Link>
                </ItemNav>
                <ItemNav>
                    <Link to='/posts/create' style={{color: "#000", textDecoration: "none"}}>New Post</Link>
                </ItemNav>
                <ItemNav>
                    <Link to='/users' style={{color: "#000", textDecoration: "none"}}>Users</Link>
                </ItemNav>
            </ul>
        </nav>
      </HeaderContainer>
      
    <Routes>
       
        <Route path="/" element={<Welcome />} />
        <Route path="/posts" element={<ListPosts />} />
        <Route path="/posts/create" element={<RegisterPost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id/posts" element={<UserPosts />} />   
    </Routes>
    </BrowserRouter>
  )
}

export default App
