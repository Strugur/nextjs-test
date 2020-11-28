import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';


export default function Home() {
  return (
    <div className={styles.container}>
        <h1>Home page</h1>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
    
  try {
      const res = await axios.get('/api/hello');
      console.log(typeof res.data);
      return { data: res.data }
      
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
  return {data:{}};
}
