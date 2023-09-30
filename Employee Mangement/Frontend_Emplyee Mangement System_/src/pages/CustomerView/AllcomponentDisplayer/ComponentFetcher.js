import React from 'react'
import Headers from '../Components/Header'
import MainScreen from '../Components/MainScreen'
import Features from '../Components/Features'
import Location from '../Components/Location'
import Footer from '../Components/Footer'

export default function ComponentFetcher() {
  return (
    <>
        <Headers />
        <MainScreen />
        <Features />
        <Location />
        <Footer />
        
    </>
  )
}
