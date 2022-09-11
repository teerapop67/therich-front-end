import React, { useState } from 'react'

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
// import axios from 'axios'

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

const itemsSlide = [{ value: 'DEV' }, { value: 'EATH' }, { value: 'JUPYTER' }, { value: 'RICH' }, { value: 'VENUS' }]
const bitcoinList = [0, 1, 2]

// <Img src="https://cdn-icons-png.flaticon.com/512/5149/5149086.png" width="400" height="400" alt="aave"></Img>
const Homepage = () => {
  const [animateState] = useState({ ourMission: true, education: true })

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

  // useEffect(() => {
  //   //"0x79F4A917dd4f8e93c19A0340C0868573F6914A15"
  //   axios
  //     .post('https://moonbase.api.subscan.io/api/scan/evm/transactions', {
  //       headers: {
  //         'content-type': 'application/json',
  //         'X-API-Key': '9dd98494f9fb43db87466f76bb92accb'
  //       },
  //       data: { blockNum: 2529171 }
  //     })
  //     .then((res: any) => {
  //       if (res.data.data) {
  //         res.data.data.list.map((items: any) => {
  //           console.log('here: ', items)
  //           if (items.from === '0x79F4A917dd4f8e93c19A0340C0868573F6914A15') {
  //             console.log('items: ', items)
  //           }
  //         })
  //       }
  //     })

  //   console.log('%555')
  // }, [])

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
      <OurMission key={1} item={item} animateState={animateState} />
      {/*FOOTER CONTENT*/}
      <FooterCommunity />
      {/*LAST PAGE*/}
      <LastPage key={2} item={item} animateState={animateState} />

      <MeetTeam />
    </>
  )
}

export default Homepage
