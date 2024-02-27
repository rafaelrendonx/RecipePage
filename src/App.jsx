
import { Layout, Image, Container, Preparation, Ingredients, Instructions, Nutrition } from './components'

export default function App() {
  return (
    <Layout>
      <Image />
      <Container>
        <Preparation />
        <Ingredients />
        <hr className='m-8' />
        <Instructions />
        <hr className='m-8 mt-0 mb-6' />
        <Nutrition />
      </Container>
    </Layout>
  )
}

