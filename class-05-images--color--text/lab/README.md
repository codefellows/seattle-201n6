# Assignment Overview: Lab for Class 5

Today will be another exercise in pair programming, and you'll be polishing and deploying your Guessing Game to GitHub Pages.

Since we have Thursday night and Saturday to accomplish this, please focus on finishing your Guessing Game Thursday, and use Saturday for the pair assignment.

### Pair Programming Basics

- In pair programming there are two developers working on a single body of code on a single computer. One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.

- The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using at most a piece of scratch paper to sketch diagrams, take notes, or list ideas. Again, the Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side" except to perhaps to keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN. Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.

### General Workflow for this Assignment

Today in lab you will create a new GitHub repo and pair-program the solutions to some little code problems.

**Be sure to follow instructions carefully.**

Here are a couple of things to keep in mind:

* Place no function calls in your code, unless inside of another function. Everything should be run by hand from the console. This is to give you additional practice using the console and efficient app-switching processes.
* Create a new branch for each code problem and merge each branch into *master* when the problem is completed. Do the problems in order. Don't forget to pull the new master branch from GitHub into your local master branch each time, before creating the branch for the next problem.

---
### Create, fork, and clone a new GitHub repo named class-05-lab

1. Navigator creates the repo
2. Navigator clones the repo
3. Driver forks the repo
4. Driver clones their fork
5. Driver copy/pastes starter code from this directory
6. Partners work on the first code problem (using only the driver's computer)
7. Driver acp
8. Driver makes Pull Request (PR)
9. Navigator accepts PR
10. Both partners pull from master
11. Switch roles and solve question 2 on new driver's computer
12. Repeat steps 7 - 10
13. Switch roles and continue with question 3

---
### HTML and JS setup
You are being given starter code for today in the index.html and app.js files inside of this directory.

Submission instructions are in the Canvas assignment.


### Deployment of Guessing Game

We'll be deploying our finished About Me projects to GitHub Pages. Feel free to work on this with your partner or by yourself. This will make them real, live websites that people can visit. The process is simple:

- Finish all technical requirements and any other tweaks you want to make.
- Add-commit-push your working branch.
- Create a PR on GitHub and merge your final changes to the master branch.
- Pull master in your terminal so you have the final product saved to your local master branch.
- Checkout a new `gh-pages` branch. It must have the exact name `gh-pages`
- To deploy your site, add-commit-push the `gh-pages` branch to GH.
- Verify that deployment was successful: go to your repo on GitHub and open the settings tab. Look for the GitHub Pages section, where you should see a message saying `Your site is published at http://<username>.github.io/<repo-name>` Follow that link and play through your game. Everything should be working correctly. If some part of your deployed page doesn't work, look for console messages or other errors, or consult an instructor.
