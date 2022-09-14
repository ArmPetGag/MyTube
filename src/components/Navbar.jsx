import React from 'react'
import styled from 'styled-components';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom'

const Container = styled.div`
 position:sticky;
 top:0;
 background-color:${({ theme }) => theme.bgLighter};
 height:56px;
`;
const Wrapper = styled.div`
 display:flex;
 align-items:center;
 height:100%;
 padding:0px 20px;
 justify-content:flex-end;
 position:relative;

`;
const Search = styled.div`
width:50%;
position:absolute;
left:0;
right:0;
margin:auto;
display: flex;
align-items: center;
justify-content: space-between;
padding:5px;
border:1px solid #ccc;
border-radius:5px;


`;
const Input = styled.input`
 border:none;
 background-color:transparent;
`;

const Button = styled.button`
padding:5px 15px;
background-color: transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:5px;
font-weight:500;

display: flex;
cursor:pointer;
align-items:center;
gap:5px;

`  ;



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
        <Button>
          <AccountCircleOutlinedIcon />
          SING IN
        </Button>
          </Link >
      </Wrapper>
    </Container>
  )
}

export default Navbar