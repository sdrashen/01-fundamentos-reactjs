import { Post } from './Post'
import { Header } from './components/Header'
import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          side bar
        </aside>
        <main>
          <Post 
          author="Traveler Cat"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur voluptatibus, laboriosam nisi aliquid dignissimos iusto, et dolorem fugit praesentium libero ullam iste veniam sit quas incidunt. Nam, expedita inventore!"/>
          <Post 
          author="Cheff Cat"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur voluptatibus, laboriosam nisi aliquid dignissimos iusto, et dolorem fugit praesentium libero ullam iste veniam sit quas incidunt. Nam, expedita inventore!"/>
        </main>
      </div>
     
    </div>
  )
}
