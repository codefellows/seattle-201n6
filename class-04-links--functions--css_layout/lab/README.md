# Assignment Overview: Lab for Class 4

Today will be your first exercise in pair programming.

### Pair Programming Basics

- In pair programming there are two developers working on a single body of code on a single computer. One member of the pair is the Driver, and this person will be the one doing all of the actual typing work on the laptop. The other member of the pair is the Navigator, and this person will work with only their voice and their thoughts.

- The Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side". The Navigator is fully engaged with the work that the pair is doing, typically using at most a piece of scratch paper to sketch diagrams, take notes, or list ideas. Again, the Navigator does not touch the keyboard, nor does the Navigator work on their laptop "on the side" except to perhaps to keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page like MDN. Under no circumstances does the Navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.

### General Workflow for this Assignment

**Be sure to follow instructions carefully.**

1. Navigator forks Driver's repo
2. Navigator clones their fork (`git clone <url>`)
  - Reminder: `cd ../` out of your own Game directory before cloning
3. Driver forks Navigator's repo
4. Driver clones their fork (`git clone <url>`)
  - Reminder: `cd ../` out of your own Game directory before cloning
5. *Create and move to a new branch (<yourName>-class04) for your work*
6. Partners work on the first half of the assignment problem (using only the driver's computer)
  - Deciding what is "the first half" does not have to be exact science.
7. On a regular basis: Driver acp (push to branch)
8. When first half complete: Driver makes Pull Request (PR) from branch to master
9. Both Driver and Navigator review PR; Navigator accepts PR to merge branch to master
10. Both partners switch branches back to master locally; Pull from master
11. Switch roles (New driver should remember to move back to branch after, and pull from master to branch)

## Extend and Refine

- You'll be making some edits to your game. After each bit of work is completed, be sure to do an add-commit-push cycle (**a-c-p**) to place the code on GitHub and preserve a versioned history of your work.

- DON'T FORGET TO DO YOUR WORK ON BRANCHES! Push each new feature to GitHub when it is complete, do a Pull Request to merge the work into the master branch, and pull master before starting work on the next feature.

- Move the logic for all questions into functions: We learned about functions, so now we'll move the logic for the individual questions into separate functions and call those functions to initiate the game.

- In its most basic sense, this is pretty simple and straightforward: 'wrap' the logic and variables for a given question with `function someFuncNameYouChoose() {` at the beginning, and add a closing curly brace `}` at the end. To make the function execute, just call it afterwards: `someFuncNameYouChoose();` After completing this step the game should behave exactly as it did before. **a-c-p**

- Stretch goal #1: For the yes/no questions, refactor so that your questions, the correct answers, and the two possible responses are in separate arrays. (The same applies if you've added in any other pieces to the questions besides the most basic structure.) Once this is done you can replace that content in the functions by accessing the arrays.  **a-c-p**

- Stretch goal #2: depending on time: Reduce the yes/no questions from five functions to one, and then use a 'for' loop to iterate through the arrays and call the function for each question.  **a-c-p**

### Technical Requirements

- All work should be completed on Git branches and merged to master by using a Pull Request on GitHub. If you work on stretch goals, use separate branches for the function-wrapping goal and each of the stretch goals.

- All logic for getting the username and running the quiz should be encapsulated in functions that are called to run the quiz. NO NAKED JS STATEMENTS except global variable declarations.

### Submitting Your Assignment

- Submit the link to both your Driver Pull Requests and your partner's Driver Pull Request.
- Add a comment to this Canvas submission with answers to the following questions.
  - How did this go, overall?
  - What observations or questions do you have about what you've learned so far?
