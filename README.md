# eventsHubot
#Srgordo
SrGordo is a chat bot built on the [Hubot][hubot] framework. It was
initially generated by [generator-hubot][generator-hubot], and configured to be
deployed on [Heroku][heroku] to get you up and running as quick as possible.


[heroku]: http://www.heroku.com
[hubot]: http://hubot.github.com
[generator-hubot]: https://github.com/github/generator-hubot

# Srgordo Bot
Introduction:<br>
Srgordo Bot is a bot based on the famous bot created by the Git community Hubot. <br>
This hubot - SrgordoBot is an app running in Heroku and mantained through git.<br>

#Bot capabilities
Srgordo bot is able to interact in a slack channel by either listening or responding to questions in which the bot has been tagged. Srgordo is designed to find events through Ticketmaster Explore V1 API. In order to make sucessful calls to the API, we need to request from users:
<ul> 
<li> the city in which they would like to search for events </li> 
<li> the event type e.g. Music, Football, Sports etc. </li>
<li> the time period of the search </li>
</ul>

The event type search is based on keywords. Whilst this is the option we used, it is preferable to use event type ID or venue ID. This is why occasionally, Hubot returns random items. 

The API call date format is in Zulu Time. In order to make the conversation with Hubot more natural, we had to take user input and transform it in to a time frame with a start date and end date, both in Zulu Time. 

In order to activate the event search, the user needs to tag Hubot plus the keyword 'busca'. Hubot will ask the user to input a city name. The user then types a city name that has to be within Australia, as the URL within the search is Australia-based. If a different country were to be used, one would need to change the country code in the request URL. 

After this the bot will ask the user to input the type of event of the search. The bot will give suggestions such as music, football etc. Once an event type is input, the bot will ask about a time-frame. These are the options available:
<ul>
<li> today </li>
<li> tomorrow </li>
<li> this week </li>
<li> next week </li>
<li> this month </li>
<li> next month </li>
</ul>

Finally, the bot returns the best matching result with an event name and image. 

# Sample Interactions

user input
<strong>@srgordo busca </strong>

srgordoAPP [7:28 PM] 
<strong>Please input the city name 
Let's see what we have...</strong>

user input 
<strong>sydney</strong>

srgordoAPP [7:28 PM] 
<strong>ok, in sydney. What kind of event are you after boss? Music, Football,...</strong>

user input 
<strong>music</strong>

srgordoAPP [7:28 PM] 
<strong>Cool, when? if I may ask</strong>

user input
<strong>this week</strong>

srgordoAPP [7:28 PM] 
<strong>The Whitlams w/ Sydney Symphony Orchestra
https://s1.ticketm.net/dam/c/ab4/6367448e-7474-4650-bd2d-02a8f7166ab4_106161_RETINA_LANDSCAPE_16_9.jpg</strong>

# Known Issues
Error handling when object is undefined in the API response.
Error handling when date is not valid. 
Random results in the search. 

