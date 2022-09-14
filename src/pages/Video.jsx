import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from './../components/Comments';
import Card from './../components/Card';


const Container = styled.div`
display: flex;
gap:24px;
`;
const Content = styled.div`
flex:5;

`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
font-weight:400;
font-size:18px;
margin-top:20px;
margin-bottom:10px;
color:${({ theme }) => theme.text};


`;
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;

const Info = styled.span`
color:${({ theme }) => theme.textSoft};

`;

const Buttons = styled.div`
display: flex;
gap:20px;
color:${({ theme }) => theme.text};

`;

const Button = styled.div`
display: flex;
align-items: center;
gap:5px;
cursor: pointer;

`;

const Hr = styled.hr`
border: 0.5px solid ${({ theme }) => theme.soft};
margin:15px 0px;
`;

const Recomendation = styled.div`
flex:2;

`;
const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap:15px;

`;
const Image = styled.img`
width:60px;
height:60px;
border-radius:50%;
`;
const ChannelDetail = styled.div`
display: flex;
flex-direction:column;
color:${({ theme }) => theme.text};

`;

const ChannelName = styled.span`
font-weight:700;


`;
const ChannelCounter = styled.span`
margin-top:5px;
margin-bottom:20px;
color:${({ theme }) => theme.textSoft};
font-size:12px;

`;
const Descrition = styled.p`
font-size:14px;
`;
const Subscribe = styled.button`
background-color:red;
font-weight:600;
color:white;
border:none;
height:max-content;
border-radius:15px;
cursor: pointer;
padding:10px 20px;
`;






const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe width="100%" height="520" src="https://www.youtube.com/embed/RH_V2rtFqYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://image.shutterstock.com/image-vector/vector-abstract-background-gradient-dynamic-260nw-1366407311.jpg' />
            <ChannelDetail>
              <ChannelName>Channel Name</ChannelName>
              <ChannelCounter>1 000 000 subscribers</ChannelCounter>
              <Descrition>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima eius provident aspernatur atque, fuga veritatis? Qui facilis fugiat sequi quo doloremque, accusantium numquam, ut officiis nobis quasi, et adipisci.</Descrition>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recomendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomendation>
    </Container>
  )
}

export default Video





















