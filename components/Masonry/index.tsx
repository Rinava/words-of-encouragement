import styles from './styles.module.css'
import Card from '../Card'
import { Post } from '@prisma/client'

const Masonry = ({posts} : {posts: Post[]}) => {
    return (
        <section className={styles.masonry}>
            {posts.map((post) => (
                <Card key={post.id} content={post.content} author={post.author} date={post.date} />
            ))}
        </section>

    );
}



export default Masonry;
