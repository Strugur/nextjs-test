import Head from 'next/head'
// import Wrapper from './Wrapper'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function MainLayout({ children, title = 'This is the default title' }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Header />
            </header>
            <nav>
                <NavBar />
            </nav>
            
    
            <main>
                { children }
            </main>
            <footer>
            <Footer />
            </footer>
            
        </>
    )
}

