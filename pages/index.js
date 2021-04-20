import Head from 'next/head'
import ProductCard from '../components/product-card.component';
import IndexLayout from '../components/layouts/index-layout/index-layout.component';
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexLayout>
        {products.map(product => 
          <ProductCard
            key={product.id}
            product={product}
          />)}
      </IndexLayout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/');
  const products = await res.json();

  return {
    props: {
      products,
    }
  }
}