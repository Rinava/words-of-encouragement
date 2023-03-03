import styles from './styles.module.css';
import { Post } from '@prisma/client';

const Card = ({ content, author, date }: Post) => {
  return (
    <article className={styles.card}>
      <p className={styles.content}>{content}</p>
      <div className={styles.authorDate}>
        <p className={styles.author}>-{author}</p>
        <time className={styles.date}>{date}</time>
      </div>
    </article>
  );
};
export default Card;
