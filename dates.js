module.exports = (bot) => {
  //
  // let startDate = new Date();
  // let endDate = new Date()
  //
  // addDays = (date, days) => {
  //
  //   let result = new Date(date);
  //   result.setDate(result.getDate() + days);
  //   return result;
  //
  // };
  //
  // difference = (date) => {
  //
  //   return 24 - date.getHours() - 1
  //
  // };
  //
  // //Desired output --> 2017-04-30T11:53:00Z
  //
  // dateFormatting = (date) => {
  //
  //   date = date.toISOString()
  //   date = date.substring(date.indexOf('Z')- 4, '')+'Z'
  //   return date
  //
  // };
  //
  // //Month is 1 based
  //
  // daysInMonth = (month, year) => {
  //
  //   return new Date(year, month, 0).getDate();
  //
  // };
  //
  // endOfDay = (date) => {
  //
  //   date.setHours(23)
  //   date.setMinutes(59)
  //   return date
  //
  // };
  //
  // finalDate = () => {
  //
  //   startDate = dateFormatting(startDate)
  //   endDate = dateFormatting(endDate)
  //
  //   return (startDate, endDate)
  //
  // };
  //
  // function userInputDate(dateInput) {
  //
  //   if (dateInput === 'today') {
  //       endDate = endOfDay(endDate)
  //       finalDate()
  //   }
  //   if (dateInput === 'tomorrow') {
  //       startDate = endOfDay(startDate);
  //       endDate = endOfDay(addDays(endDate, 1))
  //       finalDate()
  //
  //   }
  //   if (dateInput === 'this week') {
  //       const weekDay = new Date().getDay()
  //       const day2EndWeek = 7 - weekDay
  //       endDate = endOfDay(addDays(endDate, day2EndWeek))
  //       finalDate()
  //
  //   }
  //   if (dateInput === 'this month') {
  //       const currentMonth = new Date().getMonth() + 1
  //       const daysInThisMonth = daysInMonth(currentMonth, new Date().getYear())
  //       const monthDay = new Date().getDate()
  //       const day2EndMonth = daysInThisMonth - monthDay
  //       endDate = endOfDay(addDays(endDate, day2EndMonth))
  //       finalDate()
  //
  //   }
  //   if (dateInput === 'next month') {
  //       const nextMonth = new Date().getMonth() + 1
  //       endOfMonth = daysInMonth(nextMonth + 1, new Date().getYear())
  //       endDate.setMonth(nextMonth)
  //       endDate.setDate(endOfMonth)
  //       endDate = endOfDay(endDate)
  //       startDate.setMonth(nextMonth)
  //       startDate.setDate(1)
  //       startDate.setHours(0)
  //       finalDate()
  //
  //   };
  // };
  //
};
