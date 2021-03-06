import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import CountdownTimer from '../components/navbar/countdown/countdownTimer'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Category from '../components/category'
import Deals from '../components/deals'
import { Brands } from '../components/brandstaff/Brands'
import { Newbanner } from '../components/newbanner/Newbanner'
import DailyDrops from '../components/daildrops/DailyDrops'
import PrimarySearchAppBar from '../components/navbar/AppBar'
// import { Dailydrops } from '../components/daildrops/Dailydrops'




export default function Home() {
  return (
      <>
      <PrimarySearchAppBar/>
      <Newbanner />
      <Brands />
      <DailyDrops/>
      <Category/>
      <Deals/>
      </>
    )

}
