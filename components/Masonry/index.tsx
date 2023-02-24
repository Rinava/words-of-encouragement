import styles from './styles.module.css'
import Card from '../Card'

const Masonry = ({}) => {
    return (
        <section className={styles.masonry}>
            <Card message='I hope you achieve your dreams' author='John Doe' date='2021-01-01' />
            <Card message='I hope you achieve your dreams' author='John Doe' date='2021-01-01' />
            <Card message='I hope you achieve your dreams' author='John Doe' date='2021-01-01' />
            <Card message='I hope you achieve your dreams' author='John Doe' date='2021-01-01' />
            <Card message='I hope you achieve your dreams' author='John Doe' date='2021-01-01' />
            <Card message='I hope you achieve your dreams' author='John Doe' date='2021-01-01' />
        </section>
    );
}


export default Masonry;
