module.exports = (bot) => {

  bot.hear(/toma/i, res => {

    bot.http("https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&startDateTime=2017-04-16T11:53:00Z&endDateTime=2017-04-22T11:53:00Z&size=1&page=0&countryCode=AU").header('Accept', 'application/json').get()(function(err, response, body) {
      let data;
      data = JSON.parse(body)
      if (err) {
        res.send("Miguel - what did you do?")
      };
      return res.send(data._embedded.events[0].name);
    })
  });
};
