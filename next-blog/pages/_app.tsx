import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <>
       <div className="container mx-auto font-sans">

            <Component {...pageProps} />
        </div>
    </>
}

export default MyApp
