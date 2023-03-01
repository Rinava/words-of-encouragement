'use client'
import styles from './styles.module.css';

const AddCard = () => {

  const newPost = (e) => {
    e.preventDefault();
    fetch ('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content : e.target.content.value,
        author : e.target.author.value,
      }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
  };

  return (
    <section className={styles.addCard}>
      <h3>Write a message to someone who needs it.</h3>
      <form  onSubmit={newPost}>
        <label htmlFor='name'>From</label>
        <input name="author" type='text' placeholder='Your name' />
        <label htmlFor='name'>To</label>
      <textarea placeholder='I hope you achieve your dreams'  name="content"></textarea>
      <input type='submit' value='Submit' />
        </form>
    </section>
  );
};

export default AddCard;
