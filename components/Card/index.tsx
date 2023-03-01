import styles from './styles.module.css';

const Card = ({content,author,date}) => {
  return (
    <article className={styles.card}>
        <p>{content}</p>
        <div className={styles.authorDate}>
        <p className={styles.author}>-{author}</p>
        <time className={styles.date}>{date}</time>
        </div>
    </article>
    );
};
export default Card;
