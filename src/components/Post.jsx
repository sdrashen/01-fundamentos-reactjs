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
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href=""> jane.design/doctorcare</a></p>

        <p><a href=""> #novoprojeto #nlw #rocketseat</a></p>
      </div>
     </article> 
  )
}