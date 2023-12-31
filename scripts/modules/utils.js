const addZero = (n) => {
  if (n < 10) {
    n = `0${n}`
  }
  return n
}
export const getCurrentDateTime = () => {
const months = [
  'янв', 
  'фев', 
  'мар', 
  'апр', 
  'май', 
  'июн', 
  'июл', 
  'авг', 
  'сен', 
  'окт', 
  'ноя', 
  'дек',
]

const weekDays = [
  'воскресенье', 
  'понедельник', 
  'вторник', 
  'среда', 
  'четверг', 
  'пятница', 
  'суббота', 
]

const date = new Date()
const dayOfMonth = date.getDate()
const month = months[date.getMonth()]
const year = date.getFullYear()
const dayOfWeek = weekDays[date.getDay()]

const hours = addZero(date.getHours())
const minutes = addZero(date.getMinutes())

return {dayOfMonth, month, year, hours, minutes, dayOfWeek}

}