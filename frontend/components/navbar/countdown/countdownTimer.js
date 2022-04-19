import React from 'react'
import { useState, useEffect } from 'react'
import { getRemainingTimeUntilMsTimestamp } from './countdownUtils'




const cover = {
  // border: "1px solid red",
  // height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  zIndex: "10"
}
const span = {
  margin: "0 5px"
}
const timeChar = {
  width: "2 ch",
  color: "#f4f4f4",
  fontSize: "22px"
}



const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
}

const CountdownTimer = ({ CountdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(CountdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }




  return (
    <div style={cover}>
      <span style={span}>

        <h2 style={timeChar}>
          {remainingTime.days}

        </h2>


      </span>
      <span style={span}>
        <h2 style={{ color: "yellow", margin: "0",fontSize:"20px" }}>D</h2>
      </span>

      <span style={span}>
        <h2 style={timeChar}>
          {remainingTime.hours}

        </h2>

      </span>
      <span style={span}>
        <h2 style={{ color: "yellow", margin: "0",fontSize:"20px" }}>H</h2>
      </span>

      <span style={span}>
        <h2 style={timeChar}>
          {remainingTime.minutes}

        </h2>

      </span>
      <span style={span}>
        <h2 style={{ color: "yellow", margin: "0",fontSize:"20px" }}>M</h2>
      </span>

      <span style={span}>
        <h2 style={timeChar}>
          {remainingTime.seconds}

        </h2>
      </span>
      <span style={span}>
        <h2 style={{ color: "yellow", margin: "0",fontSize:"20px" }}>S</h2>
      </span>


    </div>
  )
}

export default CountdownTimer