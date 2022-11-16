import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ederdaniel22.png",
      name: "Eder Daniel Domingues",
      role: "Web Development Student",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é octorCare🚀",
      },

      { type: "link", content: "eder.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-16 17:22:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/KarolineDD.png",
      name: "Karoline Dambros Domingues",
      role: "Web Development Student",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é octorCare🚀",
      },

      { type: "link", content: "karoline.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-15 17:22:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
