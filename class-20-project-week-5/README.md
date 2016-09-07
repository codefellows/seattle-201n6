# Project Week, Day 5
[**Week 8 Feedback**]()
*You will receive an email from Code Fellows with a link to the survey. Once complete, please complete this assignment as well.*
## Presentation Day

* Be mindful of the presentation schedule, when your team presents, and go see as many other presentations as you can.

* Your presentations should take approximately **10 minutes**. 

* Have one team member track time, and help keep things moving forward.

* Expect and be ready to answer questions at the end of your presentation. 

* Have fun!!

* Please submit all Canvas assignments by their deadlines.

## Submitting Your Work

In this step you will finish up the last bits of submitting your final project.
Once you have completed all the work, and deployment is complete, make sure you have merged all your shared work to master and have completed deployment.

Make sure that everything is working as you intend and that this is a final product for submission.

Finally, for your submission, a special pull request.

On your local machine, check out the earliest commit you made to the project repository prior to starting work on the actual code. This should include nothing more than a bit of basic folder & file scaffolding. You can do so by providing the commit hash as the argument to ``git checkout``:

```bash
$ git checkout 1a39dc40
```

Once you've made that checkout, you will see that you are in "detached HEAD" state.
From here create a new branch called start:

```bash
$ git checkout -b start
```

Then, push this branch up to your repository in github:

```bash
$ git push -u origin start
```

Finally, make a pull request in github **FROM** your master branch **TO** the new start branch. It might be helpful to add something like **DO NOT MERGE** to the title of the Pull Request. This will result in a pull request containing all the code you've written during the tutorial.

**Do not merge this pull request**.

To submit this assignment, use the text box to add two links.
1. One will be the link to your pull request in github.
2. The other will be the link to your deployed app.

## Grading
Your grade is based on your individual effort and your project's technical merit.
* Individual effort is graded based on **links to commits and Pull Requests** that demonstrate your contributions.
* Technical merit is graded based on the following criteria:
 * **Good and proper use of HTML**
   * Clear, readable, and efficient structure
    * Uses semantic markup whenever possible
 * **Good and proper use of CSS**
    * Clear, readable, and efficient styles
    * Layout on various screen sizes like desktop and mobile
    * Well organized file structure.
 * **Good and proper use of JavaScript**
    * Clear, readable, and efficient code
    * Uses domain models to encapsulate data and behavior
    * Responds to user events and possibly AJAX events
    * Uses 3rd party libraries like jQuery
    * Contains no unnecessary code
 * **Generally useful and functional**
    * Works as expected with no bugs
    * Has at least 3 interlinked pages with a clear navigation
    * Has at least two pages that accept and process user input
    * State is persisted between page reloads
    * Deployed live on the Internet

## Congratulations!
Thanks for all your hard work through this course! We can't wait to see where you go with your new super powers. :)
