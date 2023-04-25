import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';


export function Comment() {
    return(
        <div className={style.comment}>

            <img src='https://avatars.githubusercontent.com/u/86444560?v=4' />
            <div className={style.commentBox}>

                {/* Topo com o comentarios */}
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Jonas Franco</strong>
                            <time title="20 de maio de 2022 às 21:50" dateTime='2022-04-20'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                {/* Footer quer dizer rodapé e topo é head */}
                <footer>
                    
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>30</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}