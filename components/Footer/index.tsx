'use client';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Made with{' '}
        <span role='img' aria-label='effort'>
          🥵
        </span>{' '}
        by <span className={styles.italic}>Lara Mateo</span>
      </p>
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <p>
          Check my other projects on{' '}
          <a href='https://www.laramateo.com/' className={styles.link}>
            www.laramateo.com
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
