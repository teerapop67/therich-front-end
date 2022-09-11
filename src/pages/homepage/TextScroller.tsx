import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { ContentBar } from './ContentBar'

const TextScroller: React.FC<any> = ({ children }) => {
  const [key, setKey] = useState(1)

  const scrolling = useSpring({
    from: { transform: 'translate(150%,0)' },
    to: { transform: 'translate(-100%,0)' },
    config: { duration: 13000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1)
    }
  })

  return (
    <ContentBar style={{ width: '100%' }}>
      <animated.div key={key} style={scrolling} className="slide">
        {children}
      </animated.div>
    </ContentBar>
  )
}

export default TextScroller
