import styles from './page.module.css';
import Masonry from '../components/Masonry';
import AddCard from '../components/AddCard';
import Footer from '../components/Footer';
import  IPost  from './../Interfaces/IPost';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const revalidate = 10;

async function getPosts() {
  const data = await prisma.post.findMany({ orderBy: { date: 'desc' } });
  const posts = data.map((post) => {
    return {
      ...post,
      date: post.date.toLocaleString('en-GB', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      }),
    };
  });

  return posts as IPost[];
}

export default async function Home() {
  const posts = await getPosts() ;

  return (
    <main className={styles.main}>
      <AddCard />
      <Masonry posts={posts} />
      <Footer />
    </main>
  );
}
