'use client';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const AddCard = () => {
  const router = useRouter();
  const newPost = async (e: any) => {
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
  const heart = {
    hidden: { scale: 0 },
    hover: { scale: 1.4, transition: { duration: 0.3 } },
    tap: { scale: 1, transition: { duration: 0.6 } },
  };

  const button = {
    hidden: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.1, opacity: 1 },
    tap: { scale: 0.5, transition: { duration: 0.5 } },
  };

  return (
    <section className={styles.addCard}>
      <h3 className={styles.title}>
        Write a message <br />
        to <span className={styles.italic}>someone</span> who{' '}
        <span className={styles.italic}>needs</span> it.
      </h3>
      <form onSubmit={newPost} className={styles.form}>
        <label className={styles.label} htmlFor='author'>
          From
        </label>
        <input
          className={styles.input}
          name='author'
          type='text'
          placeholder='Anonymous'
        />
        <label className={styles.label} htmlFor='content'>
          Message
        </label>
        <textarea
          className={styles.content}
          name='content'
          required
          placeholder='I hope you achieve your dreams'></textarea>
        <motion.button
          className={styles.submit}
          type='submit'
          variants={button}
          initial='hidden'
          whileHover='hover'
          whileTap='tap'>
          <motion.div className={styles.heart} variants={heart}>
            ❤︎
          </motion.div>
          Send
          <motion.div className={styles.heart} variants={heart}>
            ❤︎
          </motion.div>
        </motion.button>
      </form>
    </section>
  );
};

export default AddCard;
