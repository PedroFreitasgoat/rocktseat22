import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

import styles from "./App.module.css"
import { Sidebar } from "./components/Siderbr"


export function App() {
  return (
  <div> 
    <Header />
        <div className={styles.wrapper}>
          <Sidebar />
            sidebar
          <main>
          <Post 
    author="Pedro Freitas"
    content="
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ex est voluptas nostrum fugiat suscipit eligendi omnis repellat sunt quos iure quasi consequuntur aliquid nobis, mollitia repudiandae et architecto labore!"
    />
      <Post 
      author="Pedrokass"
      content="hihihihhhihhhih"/>
          </main>
        </div>
     </div>
  )
}
