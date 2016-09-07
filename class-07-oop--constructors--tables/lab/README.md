# Campfire Coffee - Day 2 Lab Assignment

## Implement a Constructor Function

In class, we learned how to refactor a group of object literals by using a constructor function and creating instances. Let's replace your object literals with a single constructor function that, when called with 'new', creates new instances. Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

See pages 106-109 in your textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

## Replace the Lists with Tables

We will also be replacing the lists of data for each store and implementing tables of data instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table (or tables)? Your client, Jo Kuppa, has reviewed the lists of data you dutifully provided to her yesterday, and has decided that's actually too much information. Here's what Jo wants:

- A table to show the total amount of beans needed at each location, with the table displaying the kiosk location, the total number of beans needed for each location, and an hourly breakdown of total beans sales. Remember that you'll need to add the beans sold by the pound *and* the beans needed to make cups to calculate these totals! Here's what it should look like:

### Beans Needed By Location Each Day

|               | Daily Location Total | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm |
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|
| Pike Place Market      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Public Library |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| South Lake Union       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Sea-Tac Airport        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |

- In addition, Jo wants a similar table that will display her hourly staffing needs at each location, both hourly and totals, so that she can work out schedules and analyze her profitability at each location. Keep in mind that each transaction (making a cup of coffee or packaging a pound of beans) requires two minutes of work by her employees, so to calculate staffing you need to know the total number of cups and the total number of beans-by-the-pound sold per hour and then divide accordingly.

### Baristas Needed By Location Each Day

|                | Total | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm |
|------------------------|-------|--------|--------|--------|--------|---------|---------|---------|--------|--------|--------|--------|--------|--------|
| Pike Place Market      |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Capitol Hill           |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Seattle Public Library |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| South Lake Union       |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Sea-Tac Airport        |       |        |        |        |        |         |         |         |        |        |        |        |        |        |
| Totals                 |       |        |        |        |        |         |         |         |        |        |        |        |        |        |

## User Stories (MVP)
- As a developer, I want to implement a constructor function so that I can reuse code and eliminate much of the duplication in my JavaScript.
- As a user, I want coffee sales data represented in tables rather than lists.

## Technical Requirements
- Good use of a constructor function; style and syntax are correctly implemented
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history

## User Stories (Stretch)
- As a developer, I will continue to work on design aspects of the public-facing page.
- As a developer, I will build a style guide to facilitate design work.
