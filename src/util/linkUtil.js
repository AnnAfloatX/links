export function getDate(day, hour, min, startDate) {
  const date = new Date()

  // Check if class is in the future
  const classStartDate = new Date(startDate)
  if(classStartDate > date) {
    return `${classStartDate.getFullYear()}-${classStartDate.getMonth()+1}-${classStartDate.getDate()}`
  }

  // Ongoing classes
  const today = date.getDay()
  
  let diff
  if(today !== day) {
    diff = day - today
    if(diff < 0) {
      diff = diff + 7
    }
  } else {
    const currHour = date.getHours()
    const currMin = date.getMinutes()
    if(currHour > hour || (currHour === hour && currMin > min)) {
      diff = 7
    } else {
      diff = 0
    }
  }

  const nextDate = new Date(date.setDate(date.getDate() + diff))
  return `${nextDate.getFullYear()}-${nextDate.getMonth()+1}-${nextDate.getDate()}`
}