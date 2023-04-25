
import { Post } from './components/Post'
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';



import style from "./App.module.css";
import './global.css';



export function App() {
  return(
    <>
      {/* Barra do web site */}
      <Header />

      <div className={style.wrapper}>
        {/* Menu lateral */}
        <aside>
          <Sidebar />
        </aside>

        {/* Menu principal */}
        <main>

          <Post />
          <Post />

        </main>

      </div>



    </>
  )
}

