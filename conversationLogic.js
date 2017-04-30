module.exports = (bot) => {

  //set startDate and endDate as date variables
  let startDate = new Date(); //
  let endDate = new Date() //

  //function to add dates to any given date
  addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  //function to figure out how many hours we have till the end of the day
  difference = (date) => {
    return 24 - date.getHours() - 1
  };

  //Format to ZULU time - Desired output --> 2017-04-30T11:53:00Z
  dateFormatting = (date) => {
    date = date.toISOString()
    date = date.substring(date.indexOf('Z')- 4, '')+'Z'
    return date
  };

  //Month is 1 based
  daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // function to convert time to end of day
  endOfDay = (date) => {
    date.setHours(23)
    date.setMinutes(59)
    return date
  };

  //function to convert the date into a string in ZULU format
  finalDate = () => {
    startDate = dateFormatting(startDate)
    endDate = dateFormatting(endDate)
    return (startDate, endDate)
  };

  //user input date options
  function userInputDate(dateInput) {

    if (dateInput === 'today') {
        endDate = endOfDay(endDate)
        finalDate()
    }
    if (dateInput == 'tomorrow') {
        startDate = endOfDay(startDate);
        endDate = endOfDay(addDays(endDate, 1))
        finalDate() // does not work
    }
    if (dateInput == 'this week'){
        const weekDay = new Date().getDay()
        const day2EndWeek = 7 - weekDay
        endDate = endOfDay(addDays(endDate, day2EndWeek))
        finalDate()
    }
    if (dateInput === 'next week') {
        const day2EndWeek = 7 - startDate.getDay()
        startDate = endOfDay(addDays(startDate, day2EndWeek))
        endDate = endOfDay(addDays(startDate, day2EndWeek))
        finalDate()
    }
    if (dateInput === 'this month') {
        const currentMonth = new Date().getMonth() + 1
        const daysInThisMonth = daysInMonth(currentMonth, new Date().getYear())
        const monthDay = new Date().getDate()
        const day2EndMonth = daysInThisMonth - monthDay
        endDate = endOfDay(addDays(endDate, day2EndMonth))
        finalDate()
    }
    if (dateInput === 'next month') {
        const nextMonth = new Date().getMonth() + 1
        endOfMonth = daysInMonth(nextMonth + 1, new Date().getYear())
        endDate.setMonth(nextMonth)
        endDate.setDate(endOfMonth)
        endDate = endOfDay(endDate)
        startDate.setMonth(nextMonth)
        startDate.setDate(1)
        startDate.setHours(0)
        finalDate()
    }else {
      return
    };
  };


  //bot state object - allows us to interact with the bot
  let state = {
    inputStep: 0,
    cityName: '',
    eventType: '',
    eventDate: '',
    classificationName: ''
  }

  //search event command
  bot.respond(/busca/i, res => {
    state.step = 1
    res.send('Please input the city name')
    return
  })

  //conversation logic
  bot.hear(/(.*)/, res => {
    if (state.step === 0){
      return
    }
    if (state.step === 1) {
      state.step = 2
      res.send(`Let's see what we have...`)
      return
    }
    if (state.step === 2) {
      state.step = 3
      state.cityName = res.match[1]
      res.send(`ok, in ${state.cityName}. What kind of event are you after boss? Music, Football,...`)
      return
    }
    if (state.step === 3){
      state.step = 4
      state.eventType = res.match[1];
      res.send(`Cool, when? if I may ask`)
      return // important to return to prevent the logging of the other bot respond

    }
    if (state.step === 4){
      state.step = 5
      state.eventDate = res.match[1]
          userInputDate(state.eventDate)
          let city = state.cityName;
          let classificationName = state.eventType;
          let URLrequest = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&startDateTime=' + startDate + '&endDateTime=' + endDate + '&sort=relevance,desc&city=' + city + '&classificationName=&' + classificationName + '&size=1&page=0&countryCode=AU'
          bot.http(URLrequest).header('Accept', 'application/json').get()(function(err, response, body) {
            let data;
            data = JSON.parse(body)
            if (err) {
              res.send("Miguel - what did you do?")
            };
            return res.send(data._embedded.events[0].images[0].url, data._embedded.events[0].name)

          })
          startDate = new Date();
          endDate = new Date();
          classificationName = ""
          city = ""
          URLrequest = " "
          return;
      }
  });

  bot.hear(/What time is it?/i, res =>{
    const date = new Date();
    res.send(`the current date is ${date}`)
  })

};
