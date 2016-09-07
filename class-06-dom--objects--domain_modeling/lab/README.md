# Campfire Coffee - Lab Project for Week 2

### Background

Your friend Jo Kuppa has come up with a new and original method for roasting coffee beans. Jo believes that she has a big money maker on her hands, even in this crowded Seattle coffee market. She's so sure of her idea that she's starting a business to market her product.

While camping one weekend, Jo noticed that the first cup of coffee from the morning campfire was uniquely wonderful and delicious. She thought about why that might be, and realized that it was the combination of the coffee aroma with the smoke from the campfire that created a distinctive flavor blend.

Jo sought to recreate that flavor back in civilization, and over time developed a process for roasting coffee beans over an open wood fire. She also discovered that grinding the beans while they were still warm was the key to getting the flavor she wanted.

### Problem Domain

The challenge: how to provide freshly-roasted and still-warm beans to a chain of coffee kiosks every single day. Jo wants to optimize her profits by roasting and delivering just enough beans to meet the daily needs of each location, while avoiding over-deliveries. After all, the beans need to be warm in order to capture the magic flavor of her special roasting process.

Jo is also planning to sell beans by the pound, using special thermal vacuum packages that are filled and sealed with each order. This way, customers can take home beans from the exact same batch used to make the fresh coffee sold at the kiosks.

As with any business, optimization is the key to success and profitability. In Jo's case, this is going to require careful inventory management of beans, cups, and thermal packages.

Furthermore, Jo needs to consider staffing and scheduling: coffee servings take longer to prepare than selling beans by the pound, and different locations sell different ratios of coffee by the cup and coffee by the pound.

### Details

Customers have two options for purchases from Jo's kiosks:

- Individual 12 oz. cups of coffee
- Whole beans in 1 lb. packages

Jo knows that you have been studying web development and has asked you to build a web application for her business. For now, she wants two pages:

- A public-facing page that visitors and customers will see at campfirecoffee.com
- A private internal data page that will be used for managing the business

### Public-facing page for campfirecoffee.com (index.html)

For the public-facing page, Jo has only a few specific requests. Otherwise, she will let you handle all of the design (for now). Here's what she wants:

- Jo insists that a particular photograph of a coffee pot and a campfire that she took on the very same morning she got her inspiration (*campfire-coffee.jpg* is provided in the adjacent *assets* directory) be featured on the public page and serve as the focal point for the visual identity of Campfire Coffee
- Jo has scoured the internet and found three more images she wants you to use. They are also in the *assets* directory
- A listing of locations and kiosk hours (6:00am to 9:00pm, 7 days a week)
- A color palette that reflects the experience of going camping
- A custom font via Google Fonts (you can choose this to your liking)
- More details will be coming later... she'll get them to you soon... she promises... *(seems like it is always coming "tomorrow")*

### Private data page for business management (data.html)

What Jo wants on the data page (which is by far a bigger priority at the moment, so build it first) is the following:

- The ability to forecast the expected customers per hour at each location, plus a daily customer total, calculated by entering her projected minimum-vs.-maximum customers/hour into a form
- Her market analysis has given some information as a starting point: the expected minimum and maximum number of customers per hour at each location, and the average amounts of cups and beans purchased by customers at each location
- Those numbers will help Jo to plan the amount of warm beans to be delivered to each kiosk each morning and calculate staffing needs
- The total amount of beans sold at each location is a combination of the cups of coffee sold (1 pound of beans makes 16 cups), plus the to-go pounds that are sold.
- Some locations, such as the Seattle Public Library and Capitol Hill, will tend to sell more cups than pounds, whereas others, such as Pike Place Market and Sea-Tac Airport, will tend to sell more pounds to tourists.

### Starting Data

Based on Jo's market analysis, here are the projected numbers for each location that will serve as a basis for the calculations you will present on the data page:

| Location  | Min Customers/Hr  | Max Customers/Hr  | Average Cups/Cust  | Average To-Go Pounds/Cust  |
|---|---|---|---|---|
| Pike Place Market  | 14  | 35  | 1.2  | 0.34  |
| Capitol Hill  | 12  | 28  | 3.2  | 0.03  |
| Seattle Public Library  | 9  | 45  | 2.6  | 0.02  |
| South Lake Union  | 5  | 18  | 1.3  | 0.04  |
| Sea-Tac Airport  | 28  | 44  | 1.1  | 0.41  |

You'll want to calculate and store the following values:

- A random number of customers for each hour of operation that falls between the minimum and maximum hourly boundaries
- The projected cups sold per hour at each location (based on the rate of cups/customer), plus daily totals for each location and the company as a whole
- The projected pounds sold per hour at each location (based on the rate of to-go pounds/customer), plus daily totals for each location and the company as a whole
- The total amount of beans needed to make cups (remember: 1 pound of beans makes 16 cups) and fulfill to-go bean orders - hourly, daily, and companywide totals
- The number of employees she will need at each location, each hour. Assume that each customer will require an average of two minutes of a single employee's time. This number needs to be rounded up to the nearest integer since it requires, for instance, 5 people to adequately do the work of 4.2 people.

### Format of Output

Here's what Jo wants on the data page: for each location, a list that looks *exactly* like this example:

Pike Place Market

- 6:00am: 86.4 lbs [23 customers, 27.6 cups (1.4 lbs), 85 lbs to-go]
- 7:00am: 191.1 lbs [51 customers, 61.2 cups (3.1 lbs), 188 lbs to-go]
- 8:00am etc., same kind of thing calculated for each hour
- 9:00am etc.

*all the way to*

- 8:00pm: 51.1 lbs [21 customers, 61.2 cups (3.1 lbs), 48 lbs to-go]
- Total customers at Pike Place Market: 235
- Total cups sold at Pike Place Market: 189
- Total to-go pound packages sold at Pike Place Market: 26
- Total pounds of beans needed at Pike Place Market: 38.4

## User Stories (MVP) for the Class 06 lab
 - As a user, I want a webpage that displays individual store data for Campfire Coffee, so that I can be informed about how to run my business.
 - As a developer, I want to use object oriented programming to build this site, so that the site will be more effective and the code will be easier to read and understand.
 - As a user, I want a functional, well organized webpage that displays my data in a user friendly fashion.
 - As a user, I want my data broken out in a logical fashion so that I can make informed decisions about my inventory supply.
 - As a user, I want my data compiled so that I can see my product needs as business as a whole.

*...maybe you'll want to add your own as you get a better handle on the problem domain...*

## Technical Requirements for the Class 06 lab
 - New repository properly set up with scaffolding and README, and cloned to local machine
 - Work performed on a non-master branch, with regular commit history and a pull request to merge the day's work into master
 - Good use of Object Literals: one for each store model, with correctly defined properties/values and methods
 - NO CONSTRUCTORS ALLOWED
 - Data page meets requirements of the problem domain
 - Stores are correctly rendered as lists to the data page with text that exactly matches the specified format

## User Stories (Stretch Goals)
- Get started on the public-facing page
- Create a style guide (style.html) for the public facing page
