# Assignment Overview: Lab for Class 2

- Your assignment will be to enhance your "About Me" HTML and JS project, and begin working on your Git/GitHub workflow routine.

- Note that as we progress through the week, new user stories will be added to the "About Me" project to guide the development of new features.

### User Stories for "About Me" (MVP)

("MVP" = "Minimum Viable Product" which is the most basic successful functionality of our project. Extensions, added features, and other enhancements fall under the category of "Stretch Goals.")

User Stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view.

User stories typically take the form of, "As X, I want Y, so that Z" but do not necessarily need that structure.

- As a student, I want to enhance my About Me page using CSS to style and customize the look and feel of my site.
- As a developer, I want my code clean and separated into specific modular files, so its easy to read and understand.
- As a developer, I want to include a fifth question in my script which...
- As a developer, I want to practice my Git workflow, so I will ACP regularly with clean commit messages.

### Technical Requirements for "About Me"

- Use the existing Git repository that was initialized for the Class-01 guessing game.
- Create a new GitHub repository and connect it to the existing repo that we already created.
- HTML, CSS, and JavaScript must be cleanly written with correct indentation and syntax. Look at examples online and in your textbook.
  - Note that your JS must pass the rules in the linter that we installed.
- Enhance the guessing game to include a fifth and sixth question.
  - One of these questions should include the use of logical operators (refer to page ~157 of the JS text book for example usage). As a secondary example, one of your questions can validate use input in the form of 'Yes' and 'Y', or 'No' and 'N'.
  - One of the questions should include multiple answers (more than two). These answers can be stored in an array, and you will want to use the array method `indexOf()` to find out whether the user's guess exists in the array or not. If it does, use the index returned to you to select that value and tell the user that they guessed the answer correct.
- Useful and descriptive `console.log()` messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
- Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have.
- Add, Commit, Push process is being followed; evident in GitHub that commits are made regularly, and with good commit messages.


### Supporting Information

#### Git

- Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

##### Git command basics:

- `git status`              Provides a detailed description of current state in working directory

- `git add <file/s>`          Include file/s in staged/tracked status of working directory; you can use `.` as a wildcard to capture all files

- `git commit -m "Your commit message"`        Snapshot the tracked changes in current working directory, with a brief message describing the changes

- `git push <destination> <branch>`                Push local commits to GitHub

### Add, Commit, Push (ACP): Learn it. Know it. Live it
