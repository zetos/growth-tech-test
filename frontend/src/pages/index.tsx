import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/core'

import {useEffect, useState} from 'react';
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Wrapper } from '../components/Wrapper'
import { Post } from '../components/Post'
import axios from 'axios';


const Index = () => {
  const posts = [1,2,3];
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await axios.get('http://localhost:3001/', { headers: { Authorization: '*', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'crossdomain': true} });
  //     console.log('res:', response.data);
  //     setPosts(response.data)
  //   } 

  //   loadData();
  // })

  return (
  <Container>
    <Hero title={'Growth Tech test'} />
    <Main>
      {posts.map((e, index) => (
        <Wrapper>
          <Post userName={'John Doe'} companyName={'Netflix'} title={'NiceTitle'} body={'lorem ipsum...'} userId={333} id={32} />
        </Wrapper>
      ))}
    </Main>

    <DarkModeSwitch />
    <CTA />
  </Container>
)}

export default Index
