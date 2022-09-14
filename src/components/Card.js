import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width:${(props) => props.type !== "sm" && "360px"};
  margin-bottom:${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display:${(props) => props.type === "sm" && "flex"};
  gap:10px;

`;

const Image = styled.img`
  width:100%;
  height:${(props) => props.type === "sm" ? "140px" : "202px"};
  background-color:#999;
  flex:1;



`;

const Detals = styled.div`
  display: flex;
  margin-top:${(props) => props.type !== "sm" && "16px"};
  gap:12px;
  flex:1;
`;

const ChannelImage = styled.img`
  width:36px;
  height:36px;
  background-color:#999;
  border-radius:60%;
  display:${(props) => props.type === "sm" && "none"}
`;

const Texts = styled.div`

`;

const Title = styled.h1`
 font-size:16px;
 font-weight:700;
 color:${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
font-size:14px;
color:${({ theme }) => theme.textSoft};
margin:8px 0px;

`;

const Info = styled.div`
font-size:14xp;
color:${({ theme }) => theme.textSoft};

`;




const Card = ({ type }) => {
  return (
    <Link to='/video/test' style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type}
          src="https://image.shutterstock.com/image-vector/vector-abstract-background-gradient-dynamic-260nw-1366407311.jpg" />
        <Detals type={type}>
          <ChannelImage type={type} src='https://image.shutterstock.com/image-vector/vector-abstract-background-gradient-dynamic-260nw-1366407311.jpg' />
          <Texts>
            <Title Title > Test Video</Title >
            <ChannelName>Unknow channel</ChannelName>
            <Info>555 505 views  1day ago</Info>
          </Texts >

        </Detals>
      </Container>
    </Link>
  )
}

export default Card

