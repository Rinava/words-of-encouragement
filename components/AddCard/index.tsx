'use client';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';

const AddCard = () => {
  const router = useRouter();
  const newPost = async (e) => {
    e.preventDefault();
    await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: e.target.content.value,
        author: e.target.author.value,
      }),
    });

    router.refresh();
  };

  return (
    <section className={styles.addCard}>
      <h3>Write a message to someone who needs it.</h3>
      <form onSubmit={newPost}>
        <label htmlFor='name'>From</label>
        <input name='author' type='text' placeholder='Your name' />
        <label htmlFor='name'>To</label>
        <textarea
          name='content'
          placeholder='I hope you achieve your dreams'></textarea>
        <input type='submit' value='Submit' />
      </form>
    </section>
  );
};

export default AddCard;
