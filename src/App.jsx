import { Post } from './Post'
import { Header } from './components/Header'
import './styles.css'

export function App() {
  return (
    <div>
      <Header/>

      <Post 
        author="Traveler Cat"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur voluptatibus, laboriosam nisi aliquid dignissimos iusto, et dolorem fugit praesentium libero ullam iste veniam sit quas incidunt. Nam, expedita inventore!"/>
      <Post 
        author="Cheff Cat"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur voluptatibus, laboriosam nisi aliquid dignissimos iusto, et dolorem fugit praesentium libero ullam iste veniam sit quas incidunt. Nam, expedita inventore!"/>
    </div>
  )
}
