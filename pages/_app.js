import React from 'react'
import '../styles/App.scss'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Head>
    <title>Store by Olyamaii</title>
    <link rel="icon" href="logo.svg" />
  </Head>
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </div>
  
  
  )
}

export default MyApp
