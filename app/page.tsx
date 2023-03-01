import styles from './page.module.css';
import Masonry from '../components/Masonry';
import AddCard from 'components/AddCard';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const revalidate = 30;

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}


export default async function Home() {
  const posts = await getPosts();
  
  return (
    <main className={styles.main}>
      <AddCard />
      <Masonry posts={posts} />
    </main>
  );
}
