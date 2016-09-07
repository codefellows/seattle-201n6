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


**DEVELOPER**


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
