import dayjs from 'dayjs'

export function getRemainingTimeUntilMsTimestamp(timestampMs){
    const timestampDayjs = dayjs(timestampMs)
    const nowDayjs = dayjs()

    return { 
    seconds :getRemaingSeconds(nowDayjs,timestampDayjs),
    minutes:getRemaingMinutes(nowDayjs,timestampDayjs),
    hours:getRemaingHours(nowDayjs,timestampDayjs),
    days:getRemaingDays(nowDayjs,timestampDayjs),

 }
 }

 function getRemaingSeconds(nowDayjs , timestampDaysjs){
       const seconds = timestampDaysjs.diff(nowDayjs,'seconds') % 60
        return padZero(seconds,2)
 }
 function getRemaingMinutes(nowDayjs , timestampDaysjs){
    const minutes = timestampDaysjs.diff(nowDayjs,'minutes') % 24
    return padZero(minutes,2)
    
}
function getRemaingHours(nowDayjs , timestampDaysjs){
    const hours = timestampDaysjs.diff(nowDayjs,'hours') % 60
    return padZero(hours,2)
     
}
function getRemaingDays(nowDayjs , timestampDaysjs){
    const days = timestampDaysjs.diff(nowDayjs,'days') 
    return days.toString()
     
}
function padZero(number,minLength ){
    const numString = number.toString();

    if(numString.length >= minLength)  return numString
      return "0".repeat(minLength - numString.length) + numString

}
