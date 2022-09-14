import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap:10px;
margin:30px 5px;

`;
const Avatar = styled.img`
  width:60px;
  height:60px;
  border-radius:50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction:column;
  gap:10px;
  color: ${({ theme }) => theme.text}
`;


const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;


const Comment = () => {
  return (
    <Container>
      <Avatar src='https://image.shutterstock.com/image-vector/vector-abstract-background-gradient-dynamic-260nw-1366407311.jpg' />
      <Details>
        <Name>John Jonson <Date>3 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quo ducimus pariatur sunt voluptate sequi nemo quia illo sapiente labore officia odit harum nam unde facere deleniti, quisquam ea. Illo?</Text>
      </Details>
    </Container>
  )
}

export default Comment