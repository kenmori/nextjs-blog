import { AppProps } from 'next/app'
import '../base.css'

const App = ({ Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />
}

export default App