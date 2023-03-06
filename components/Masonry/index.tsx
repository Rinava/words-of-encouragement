import styles from './styles.module.css';
import Card from '../Card';
import Post from '../../Interfaces/IPost';

const Masonry = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={styles.masonry}>
      {posts.map((post) => (
        <Card
          id={post.id}
          content={post.content}
          author={post.author}
          date={post.date}
          key={post.id}
        />
      ))}
    </section>
  );
};

export default Masonry;
