import styles from './styles.module.css';

const Card = ({message,author,date}) => {
  return (
    <article className={styles.card}>
        <p>{message}</p>
        <div className={styles.authorDate}>
        <p className={styles.author}>-{author}</p>
        <time className={styles.date}>{date}</time>
        </div>
    </article>
    );
};
export default Card;
