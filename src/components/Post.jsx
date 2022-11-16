import { format } from "date-fns";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "11 de junho às 17:57h");

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="" dateTime="2022-11-15">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>
          Acabei de subir mais um projeto no meu portfólio. Faz parte do curso
          de React da Rocketseat
        </p>
        <p>
          👉 <a href=""> ederdaniel22/IgniteFeed</a>
        </p>
        <p>
          <a href=""> #novoprojeto </a> <a href=""> #ignite</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
