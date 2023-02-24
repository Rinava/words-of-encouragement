import styles from './styles.module.css';

const AddCard = () => {
  return (
    <section className={styles.addCard}>
      <h3>Write a message to someone who needs it.</h3>
      <form action=''>
        <label htmlFor='name'>From</label>
        <input type='text' placeholder='Your name' />
        <label htmlFor='name'>To</label>
      <textarea placeholder='I hope you achieve your dreams'></textarea>
      <input type='submit' value='Submit' />
        </form>
    </section>
  );
};

export default AddCard;
