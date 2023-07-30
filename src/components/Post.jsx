import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
  
  return (
     <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Sabrina Drashen</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time dataTime="2023-07-21 15:00:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}></div>

      <form className={styles.commentForm}>
        <strong>
          Deixe seu feedback
        </strong>
          <textarea 
          placeholder='Deixe um comentário'/>
          <footer>
            <button type="submit">Publicar</button>
          </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
     </article> 
  )
}