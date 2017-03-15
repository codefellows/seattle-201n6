## New week, new project!
# BusMall

### Backstory

You've been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel.

But in this case, BusMall catalogs are placed on Puget Sound regional transit system buses... whose overall travel times are now comparable to cross-country flights, after all.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest... before actually putting them into the catalog and getting the manufacturing wheels in motion.

### Problem Domain

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side, so you'll need to manage the size and the aspect ratio of the images and perhaps edit them a bit; Mac users can do this in Preview (very cool!), plus, there are lots of online tools.

The app's purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you'll also need to keep track of how many times each image is displayed and do the associated calculations.

You are also responsible for the look and feel of the app, so don't forget a custom font, color palette, layout with semantic HTML, and so on.

# User Stories

**USER**
- As a user I want a site that instruct a user to make a choice out of three images, which is saved each time to collect data about the personality of the person using the site.

- As a user I want the photos to refresh every time I click them so that I can pick a new one each time.

- As a user I want to be able to click on any one of the three photos displayed.

- As a user I want my choices to be tracked, totaled and returned to me after a certain number of clicks.

- As a user I would like the opportunity to have my choices cleared so that I can go through the images and choose again.

- As a user I want the results of the quiz displayed clearly at the end, and for the quiz to be infinitely repeatable.
  - I need to list simple instructions to the user.

  - I want the pictures to refresh as the user votes, up to 15 times.

  - I want the pictures to randomly display.

  - I want to display a “view results now” button once the user clicked 15 times.

  - I want to display the breakdown of votes the user selected.

  - I want to provide a “reset” option once the user has seen the votes.

  - We are presenting a variety of unique gift ideas.

  - In writing this program, we are helping the user to discover their interests.

**DEVELOPER**
- As a developer I want to build the site using HTML, CSS, and Javascript to keep the structure simple and focused on the images.

- As a developer I want to capture the user’s preferences, using a cross section of three choices.

- As a developer I want to create a loop to allow for 15 clicks.

- As a developer I want to assign a value to each of the photos and then create a function that generates 3 random numbers in that range and uses those to return the photos for each 'round'.

- As a developer I want to create an error exception if the user does not click one of the photos.

- As a developer I want to track the user clicks and tally them. Then render the totals to the DOM.

- After the last click a 'View Results Now' button should be rendered in the DOM.

- After button is clicked, unordered list of results and a list item for the total number of clicks are shown as well as a reset button that will clear the totals and start the count again.

- As a developer I want to style the site simply so that the images are prominently displayed.

(STRETCH)
- As a developer I want to keep track of how many times each item was shown. Also, how many times each item was clicked when it was shown. Calculate the percentage based on those two values.


## Technical Requirements
 - New GitHub repo set up, and working on a feature branch
 - Project scaffolding complete, with proper file and folder structure
 - Images have been properly sized for project
 - Object constructor implemented and used properly for creating objects
 - Object literal implemented and used properly for managing the functionality of the app; proper use of methods and properties

## Goals to complete by the start of next lecture

- Create a new repo for this weekly project called **bus-mall** at the root level of your *~/CF/201* directory.
- Scaffold your repo with the usual README, CSS, JS, and HTML files, plus a *img/* directory.
- Retrieve the assets from the *assets/* directory in the *class-11* directory of our class repo and place them in your image directory (don't forget to resize the images).
- The thing you want to build today will select three random photos from the image directory and display them side-by-side-by-side in the browser window.
- In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image.
- Upon receiving a click, three new random images need to be automatically displayed.
- To do this, you'll want a constructor function that creates an object associated with each image, and has properties for the name of the image, its filepath, the number of times it has been shown, and the number of times it has been clicked.
- After 15 total clicks, disable any further vote functionality, and display a button for the user to view the results.
- Upon clicking the 'view results' button, display a list showing each image name and it's corresponding tally of clicks.
- Don't forget to publish the total amount of clicks (this will be used for a later assignment).

**This is an individual assignment today, but you are free (heck, even encouraged) to collaborate with a classmate if you want. Just be sure that if you do, be sure to make note of that collaboration in your README file.**
