import styles from './styles.module.css'
import Card from '../Card'


const Masonry = ({posts}) => {
    return (
        <section className={styles.masonry}>
            {posts.map((post) => (
                <Card key={post.id} message={post.message} author={post.author} date={post.date} />
            ))}
        </section>

    );
}



export default Masonry;
