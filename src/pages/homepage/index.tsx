import React, { useState, useEffect } from 'react'

import { Items } from './ContentBar'
import MeetTeam from './MeetTeam/index'
import TextScroller from './TextScroller'
import './bitcoin.css'
import { motion } from 'framer-motion'
import Landing from './landing'
import OurMission from './ourMission'
import FooterCommunity from './FooterCommunity'
import LastPage from './LastPage'
import { Header, HeaderInfo2 } from './landing/Header'
import Footer from './Footer'
import axios from 'axios'

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 }
}

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 100,
    transition: {
      delay: i * 0.3,
      yoyo: Infinity,
      duration: 1
    }
  }),
  hidden: { opacity: 0, y: -50 }
}

const itemsSlide = [{ value: 'DEV' }, { value: 'EATH' }, { value: 'JUPYTER' }, { value: 'TR' }, { value: 'WDEV' }]
const bitcoinList = [0, 1, 2]

// <Img src="https://cdn-icons-png.flaticon.com/512/5149/5149086.png" width="400" height="400" alt="aave"></Img>
const Homepage = () => {
  const [animateState] = useState({ ourMission: true, education: true })
  const [allTransactions, setAllTransactions] = useState([])
  const [totalUser, setTotalUser] = useState<number>(0)

  // const handleAnimate = () => {
  //   if (window.scrollY >= 300) {
  //     setAnimateState(prvAnimate => ({
  //       ...prvAnimate,
  //       ourMission: true
  //     }))
  //   }
  //   if (window.scrollY >= 1300) {
  //     setAnimateState(prvAnimate => ({
  //       ...prvAnimate,
  //       education: true
  //     }))
  //   }
  // }

  // useEffect(() => {
  //   console.log(window.scrollY)
  //   if (animateState.ourMission && animateState.education) return
  //   window.addEventListener('scroll', handleAnimate, false)

  //   return () => {
  //     window.removeEventListener('scroll', handleAnimate, false)
  //   }
  // }, [])

  // 'X-API-Key': '9dd98494f9fb43db87466f76bb92accb'

  useEffect(() => {
    //"0x79F4A917dd4f8e93c19A0340C0868573F6914A15"
    axios
      .get(
        'https://api-moonbase.moonscan.io/api?module=account&action=txlist&address=0xc671686E97A7fFCb1CD93b51057fE333a14128Ff&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken'
      )
      .then((res: any) => {
        if (res.data) {
          let totalUserForSet: any = []

          setAllTransactions(res.data.result)
          res.data.result.map((user: any) => {
            if (!totalUserForSet.includes(user.from) && user.from !== '0xebbe075d5089d0097d168563dc7adf015e5b2520') {
              totalUserForSet.push(user.from)
              console.log('555asdasd: ', user.from)

              setTotalUser((prv: any) => prv + 1)
            }
          })
        }
      })
  }, [])

  console.log('%555: ', allTransactions)

  return (
    <>
      <Header>
        {/* landing */}
        <Landing />

        <HeaderInfo2>
          {bitcoinList.map((items, index) => (
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={variants}
              key={index}
              style={{ width: '80%', height: '100%', zIndex: 1 }}
            >
              <div className="bitcoin"></div>
            </motion.div>
          ))}
        </HeaderInfo2>
      </Header>

      {/*Slider Text*/}
      <TextScroller>
        {itemsSlide.map((items, index) => (
          <Items key={index}>
            <h3>{items.value}</h3>
            <p></p>
          </Items>
        ))}
      </TextScroller>

      {/*OUR MISSION*/}
      <OurMission
        allTransactions={allTransactions}
        totalUser={totalUser}
        key={1}
        item={item}
        animateState={animateState}
      />
      {/*FOOTER CONTENT*/}
      <FooterCommunity />
      {/*LAST PAGE*/}
      <LastPage key={2} item={item} animateState={animateState} />

      <MeetTeam />
      <Footer />
    </>
  )
}

export default Homepage
