import {Comment} from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/86444560?v=4'/>
                    <div className={styles.authorInfor}>
                        <strong>Jonas</strong>
                        <span>Web Develop</span>
                    </div>
                </div>
                <time title="20 de maio de 2022 às 21:50" dateTime='2022-04-20'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href='#'>👉 jane.design/doctorcare</a></p>

                <p>
                    <a href='#'>#novoprojeto #nlw #rocketseat</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>{' '}
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Comentar</button>

                </footer>
            </form>

            <div className={styles.commantList}>
                <Comment />
                <Comment />
                <Comment />
            </div>


        </article>
    )
}
       



