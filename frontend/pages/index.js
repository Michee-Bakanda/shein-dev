import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer/Footer'
import CountdownTimer from '../components/navbar/countdown/countdownTimer'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'
import Category from '../components/category'
import Deals from '../components/deals'
import { Brands } from '../components/brandstaff/Brands'




export default function Home() {
  return (
      <>
      <Brands />
      </>
    )

}
