
import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';



import style from "./App.module.css";
import './global.css';



export function App() {
  return(
    <>
      
      <Header />

      <div className={style.wrapper}>
        {/* Menu lateral */}
        <aside>
          <Sidebar />
        </aside>

        {/* Menu principal */}
        <main>

          <Post
            author="Jonas"
            content='Eu sou um comentario sobre seu trabalho.' 
          />

        </main>

      </div>



    </>
  )
}

