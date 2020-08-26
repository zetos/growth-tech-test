import {
  Heading,
} from '@chakra-ui/core'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Wrapper } from '../components/Wrapper'
import { Post, UserPost } from '../components/Post'
import axios from 'axios';


const Index = ({ postsList }: {postsList: UserPost[]}) => {
  // fetch on client
  // const [posts, setPosts] = useState<UserPost[]>([]);
  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await axios.get<UserPost[]>('http://localhost:3001/posts');
  //     setPosts(response.data)
  //   } 

  //   loadData();
  // }, []);

  return (
    <Container>
      <Heading>Growth Tech test</Heading>
      {postsList.map((post, _) => (
        <Wrapper key={post.id}>
          <Post userName={post.userName} companyName={post.companyName} title={post.title} body={post.body} userId={post.userId} id={post.id} />
        </Wrapper>
      ))}
      <DarkModeSwitch />
      <CTA />
    </Container>
  )
}

Index.getInitialProps = async () => {
  // fetch on server
  const response = await axios.get<UserPost[]>('http://localhost:3001/posts');
  return { postsList: response.data }
}

export default Index
