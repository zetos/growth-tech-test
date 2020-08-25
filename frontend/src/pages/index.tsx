import {
  Heading,
} from '@chakra-ui/core'

import {useEffect, useState} from 'react';
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Wrapper } from '../components/Wrapper'
import { Post, UserPost } from '../components/Post'
import axios from 'axios';


const Index = () => {
  const [posts, setPosts] = useState<UserPost[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get<UserPost[]>('http://localhost:3001/posts');
      console.log('res:', response.data);
      setPosts(response.data)
    } 

    loadData();
  }, []);

  return (
  <Container>
      <Heading>Growth Tech test</Heading>
      {posts.map((post, _) => (
        <Wrapper key={post.id}>
          <Post userName={post.userName} companyName={post.companyName} title={post.title} body={post.body} userId={post.userId} id={post.id} />
        </Wrapper>
      ))}
    <DarkModeSwitch />
    <CTA />
  </Container>
)}

export default Index
