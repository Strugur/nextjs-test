import '../styles/globals.css';
import MainLayout from '../components/MainLayout'
import App, { AppProps, AppContext } from 'next/app'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  // const req = appContext.ctx.req
  // console.log(req.url);
  return {
    pageProps: {...appProps},
  }
}

export default MyApp
