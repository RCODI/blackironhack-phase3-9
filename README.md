1. Should I Stay or Should I Go

2. Nearby airports, climate, season, major cities en route

3. Climate Data Online - http://www.ncdc.noaa.gov/cdo-web/api/v2/:
String - locationid (cities) mapped to name
Double - TEMP average over a month
Double - PRECIP average over a month
Double - Latitude
Double - Longitude

Airports of the United States - https://catalog.data.gov/dataset/airports-of-the-united-states-direct-download:
String - Airport Name
Double - Latitude
Double - Longitude

CDC Wonder - https://wwwn.cdc.gov/nndss/conditions/notifiable/2016/
String - Notifiable Condition (virus/disease)
Integer, String - Occurences by state/region in a year
String[] - environmental conditions

US Cities by Population - https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population:
String - City
String - State

Brief description:
      In the interest of determining whether traveling between two places is safe in light of recent virus outbreaks, not only the destination will be considered, but also any major cities or airports one might arrive or stop at during the trip. The incorporation of the entire trip will provide a comprehensive rating of each potential route, also keeping into account the weather of the area at the time of travel. Information will be displayed via a Google map interface, as well as a circular chart and textual details about potential threats.

Fill in the structued description:
 * Map View:
	1. [Y] Basic Map with specific location (your map is located in a meaningful place, city of west lafayette for example)
	---------------------------------------
	2. [Y/N] Markers for location of markets
	3. [Y/N] Labels for markets' names
	4. [Y/N] InfoWindow to show detail information of a market
	---------------------------------------
	As 2, 3, and 4 pertain more to the example project, I will be neglecting to fill them out for this README.
	5. [N] [describe] Any other cover on the map (for example, cloud cover to show the weather effect)

 * Data Visualization:
	1. [Y] [describe] Use Graph? What is the type? (bar chart, pie chart, radar chart ...)
	A sort of progress-based pie chart will assign a percentage of risk for the destination and any major cities encountered during the trip.
	2. [Y] [List] Any interaction available on the graph? List them (enable click on numbers, drag on lines, change time/variables ...)
	Upon click, users will be able to explore the different types of viruses they might encounter in each area.
	
 * Interaction Form:
	1. [Y] [List] Any information output? list them. (text field, text area, label, plain HTML ...)
	2. [N] [List] Any operation option (filters)? List them. (search markets, search vegetables, filter based on price, sort based on convenience ...)
	3. [Y] [List] Any information input? List them. (comments, markers, user preference ...)
	Starting Point, Destination, Month of Travel
	4. [Y] [List] Interaction with Map? List them. (filter on price will affect map markers, sort on price will affect map markers, ...)
	Clicking on map will reveal the names of important locations
	5. [Y] [List] Interaction with data visualization? List them. (filter, sort, set variables ...)
	Clicking on charts will produce more details about viruses

5. Most likely will include some python dependencies for web scraping. Will include more specific instructions later in the project.

6. Tested in Chrome browser

7. 