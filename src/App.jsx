import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Eder Daniel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quia quidem nesciunt dicta. Corrupti inventore rem nulla exercitationem ad fuga nesciunt corporis qui. Ratione eius est temporibus fugit labore ad! "
          />
          <Post
            author="Karoline Dambros Domingues"
            content="Filha maravilhosa"
          />
        </main>
      </div>
    </div>
  );
}
