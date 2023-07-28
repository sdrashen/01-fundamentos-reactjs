import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
     <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/sdrashen.png" />
          <div className={styles.authorInfo}>
            <strong>Sabrina Drashen</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time dataTime="2023-07-21 15:00:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala, gente boa e bonita!</p>

        <p>Acabei de subir mais um projeto no meu portifolio.</p>
        <p>👉{' '}<a href="">link aqui futuramente</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#frontend</a>{' '}
          <a href="">#desenvolvimento</a>
        </p>
      </div>

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