import {PencilLine} from 'phosphor-react';

import style from './Sidebar.module.css';


export function Sidebar() {
    return(
        <aside className={style.sidebar}>
            
            <img 
                className={style.cover}
                src='https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=50' 
            />
           
           
           <div className={style.profile}>

                <img 
                    className={style.avatar}
                    src='https://avatars.githubusercontent.com/u/86444560?v=4'
                />
                <strong>
                    Jonas Franco
                </strong>
                <span>
                    Web Developer
                </span>
           
           </div>
           <footer>
            <a href='#'>
                <PencilLine size={20}/>
                Editar seu Perfil
            </a>
           </footer>
           
        </aside>
    )
}