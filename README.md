DISCOVER DUBLIN

Arriving in Dublin and you don't know where to go? 
Don't worry, DiscoverDublin is exactly what you need. Whether it be a bar, a resaurant or a cafe, DiscoverDublin will find all the places in whichever location you desire.
Just drag the map to your location and rightclick. It is as easy as that. 

UX

This website is designed to be as easily navigated as possible. This is for people that have limited time in Dublin. They don't want too much text, too many videos or boring descriptions of
various locations around the city. DiscoverDublin is quick and easy. Once they open the site they can choose from 3 options, located in the navbar, either nightlife, restaurants or cafes.
The information box on the left gives them the basic instructions for using the map. Once their desired map has loaded they just drag the map to their preferred location and right click. This 
creates red markers for every location in that area. If they click on the marker the name of the location is displayed. This can be shown to taxi drivers to clear up any language issues.

--User Stories---

1.As somebody visiting with a group of friends, I want to find all the bars and restaurants in my area so I don't waste time looking around.
2.As an early morning coffee addict, I want to choose from the cafes in my area, I don't live here, so I am not familiar with the area.
3.I am planning a day in an area of Dublin that I am not familiar with, I want to find a nice bar for a drink and we eat at a local restaurant.
4.I am new to the area, I was in a bar/restaurant/cafe a few weeks ago but I don't remember the name.

I have always liked the idea of having high resolution, fullscreen images on website. I decided to use images of Dublin as my backdrop. Because I liked the images so much, I made the footer and the navbar 
transparent. 
While looking at various sites that use google maps, I decided against having the map in the center of the screen. I moved it to the right and placed some info text to the left.
I feel that this adds to the UX of the site.




FEATURES

-DiscoverDublin brand in the navbar allows the user to remove the border on the map and change the font color (JQuery)
-Nightlife navbar link loads a map that automatically adds marker and an infowindow to all the bars and nightclubs in the preferred area.
-Restaurants navbar link loads a map that automatically adds marker and an infowindow to all the restaurants in the preferred area.
-Cafes navbar link loads a map that automatically adds marker and an infowindow to all the cafes in the preferred area.
-Each HTML pages has a different high def background image of Dublin.
-The map can be dragged to a specific location. When rightclicked, local markers are added to the locations. When the locations are clicked, the name of the location is displayed.
-The link at the bottom brings the user to the Dublin Tourist Centre website.


--Features left to implement--

-I would like to add the ability to add personal notes to each marker after it has been visited.
-After your trip to Dublin, you can save all your visited destinations and personal notes in a folder.
-This folder can then be shared to friends that are visiting Dublin or used again the next time you visit, providing a personalised map of your trip.

-I would like to add a more detailed description of the location.
-The map is connected to your google mapp app on your phone and once you click the marker it shows you directions and routes to the given location.





TECHNOLOIES USED

--JQuery <https://jquery.com/>

Used for the onClick function to change the font.

--CSS<https://developer.mozilla.org/en-US/docs/Web/CSS>

Used to style he page and to customise the different elements that were taken from other libraries.

--HTML<https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5>

--Javascript<https://www.javascript.com/>

Used to add functionality and interactivity to my page and in conjunction with google maps API

--Google API <https://developers.google.com/docs/api>

Used tp create the map, the markers and the infowindows.

--Bootstrap<https://getbootstrap.com/>

Used for general grid system and navbar

--MDBootstrap<https://mdbootstrap.com/>

Got ideas from their samples.

--Google Fonts<https://fonts.google.com/>

Used for the fonts 


TESTING

Testing was carried out on 3 different browsers, Firefox, Opera and Chrome. It was also carried out on an Amazon Prime tablet and a Samsung J5 cellphone.

-I stated each test by checking the Google Map. I dragged, rightclicked and then clicked the marker for each HTML (nightlife, restaurants and cafes).
-I tested the onClick function of the navbar brand to see if it changed the font color and removed the border.
-I tested the link in the footer to make sure it opened the website in a new tablet
-I made sure that the media queries worked under screens with max-width of 768px.
-With reference to the user stores, I made sure that the site was able to fulfill each one (1,2,3and 4) of these stories in all the aforementioned devices and browsers.

The one major problem I found was the loading time of the image. In Opera the browser occasionally stalled due to the size and resolution of the image. 
On the cellphone, the footer overlapped the body but it did not overlap on the developer tools.



DEPLOYMENT

I deployed my project to github pages after regular pushes and commits. Version control was done through github.


CREDITS

-Content
-Bootstrap for the grid system and navabr
-MDBootstrap for footer ideas 
-The pictures are from <https://unsplash.com/s/photos/dublin>
-The map and info are from GOOGLE MAPS API
-Fonts are from Google Fonts

-Acknowledgements 
-I received excellent help from the Code Institute Slack and from my mentor
