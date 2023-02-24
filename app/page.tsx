import styles from './page.module.css';
import Masonry from '../components/Masonry';
import AddCard from 'components/AddCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <AddCard />
      <Masonry />
    </main>
  );
}
