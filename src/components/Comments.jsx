import React from 'react'
import styled from '@emotion/styled'
import Comment from './Comment';

const Container = styled.div`
  
`;
const NewCommens = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
`;
const Avatar = styled.img`
  width:60px;
  height:60px;
  border-radius:50%;
`;
const Input = styled.input`
  border:none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color:transparent;
  outline:none;
  width:100%;
  padding:5px;
  
`;

const Comments = () => {
  return (
    <Container>
      <NewCommens>
        <Avatar src='https://image.shutterstock.com/image-vector/vector-abstract-background-gradient-dynamic-260nw-1366407311.jpg' />
        <Input placeholder='Add comment...' />
      </NewCommens>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments