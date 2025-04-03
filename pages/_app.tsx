import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Fira_Sans } from 'next/font/google'

const firaSans = Fira_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-fira-sans',
    display: 'swap',
  })

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <div
            className={`flex flex-col min-h-full md:p-12 ${firaSans.variable}`}
            style={{ background: 'rgb(38, 38, 41)' }}
            >
                <ToastContainer />
                <Component {...pageProps} />
            </div>
        </ChakraProvider>
      )
}
