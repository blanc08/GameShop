import { useEffect } from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Navbar from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionSteps from '../components/organisms/TransactionSteps'
import FeaturedGames from '../components/organisms/FeaturedGames'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Head>
        <title>GameStore - purchare experience</title>
        <meta name="description" content="Top up = Tambah pengalaman" />
      </Head>
      <Navbar />

      <MainBanner />

      <TransactionSteps />

      <FeaturedGames />

      <Reached />

      <Story />

      <Footer />
    </>
  )
}
