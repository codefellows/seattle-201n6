# Git & Branches

**Contents**
- [Creating a new repository](#create)
  - [create on GitHub](#GHcreate)
  - [create in terminal](#CLIcreate)
- [Git workflow with branches](#workflow)
- [.gitignore file](#gitignore)

Git branches let you build new features without the risk of breaking existing code. By working on a branch, you can modify an existing file without affecting the versions of that file that exist on other branches. Git does this without creating new copies of the file by tracking your changes in the `.git` folder.

When you start a new repository, git automatically creates a `master` branch. The master branch should always reflect the most up-to-date working version of your project, so you should never work directly on master. Instead, create a new branch for each feature that you want to build and when your feature is complete, merge it to master.


<a id="create"></a>
## Creating a new repository

You can start a new repo either on GitHub or in your terminal. If you create the repo on GH, you will then need to clone it to your computer. If you create the repo in your terminal, you will also need to create it on GH and link the existing repo from your terminal to GH.

<a id="GHcreate"></a>
## Creating a new repository on GitHub

To create a repo called `myProject` on GitHub:

1. navigate to your GitHub user home page in the web browser
2. from the `+` menu in the top right corner, select `create a new repository`
3. enter `myProject` as the name for the new repo
4. click the box to add a README file
5. the easiest way to make a `.gitignore` file is to do so in your terminal [click for details](#gitignore)
5. if you want to include a a license, select a license to include (MIT is always a good choice)
6. click the `create repository` button

You will be redirected to the new repo home page. From there, you can clone the repo to your computer:

1. click the green `clone or download` button and copy the link (it should be `https://github.com/username/myProject.git`, where `username` is your GH user name)
2. in your terminal, navigate to the directory you want to be the *parent* directory of your new repo. For example, if you want the `myProject` folder to be inside `codefellows`, you should `cd` to the `codefellows` directory and continue with step 3. **DO NOT `mkdir myProject`**.
3. enter the command `git clone [link]` and paste the link to the GH repo in `[link]`, so the full command is `git clone https://github.com/username/myProject.git`
4. cloning will create a new `myProject` directory inside `codefellows`, copy any files (README and license) from the GH repo into that directory, and link the project to GH.
5. to verify the setup, `cd myProject` and do `git status`. You should see a message like
```
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```

If that works, you're ready to start coding. Continue with [git workflow](#workflow)

<a id="CLIcreate"></a>
## Creating a new repository in the terminal

To create a repo called `myProject` in the terminal:

1. in your terminal, `mkdir myProject` and `cd myProject`
2. inside the `myProject` directory, do `git init`. You should see a message `Initialized empty Git repository in [filepath]`
3. create any files that you want (e.g. `touch index.html`)
4. when you're ready to connect the new repo with GitHub, `git add` and `git commit` all the files you have created.
5. before you can push your files to GH, you need to create the repo on GH and link it to your local `myProject` directory.
6. navigate to your GitHub user home page in the web browser
7. from the `+` menu in the top right corner, select `create a new repository`
8. enter `myProject` as the name for the new repo
9. **DO NOT add a README, .gitignore, or license. Leave all of those unchecked**
10. click the `create repository` button

You will be redirected to a page with instructions to "push an existing repository from the command line"
1. in your terminal (still inside your `myProject` directory), do `git remote add origin https://github.com/username/myProject.git`. You can copy this command from GitHub. This command links the repo on your computer to the GH address and sets that GH repo as a remote with the name `origin`.
2. Assuming you have already added and committed the project files (see step 4 above), you can now push those files to GH with `git push -u origin master`. The `-u` means 'upstream', and only needs to be included the first time you push to the new GH repo. If that works, you're ready to start coding. Continue with [git workflow](#workflow)

<a id="workflow"></a>
## Git Workflow with Branches

Once you have a working repo on your computer and GitHub, it's time to code. You will write your new code on a feature branch, then use a Pull Request on GH to update the GH master branch.

Assuming the master branch is up-to-date, the workflow to create `myFeature` is as follows:

1. create a new feature branch. In terminal (on master branch), do `git checkout -b myFeature`
2. write code to implement the feature. Add/commit regularly during this process
3. when the feature is complete, add/commit and push the feature branch to GitHub with `git push origin myFeature`
4. on GitHub, create a Pull Request (PR) from the feature branch to master. GH is usually good at creating the right PR by default, but check to make sure that `myFeature` is listed as the 'compare' branch and `master` is the 'base' branch.
5. GitHub will check to see if the PR can be automatically merged. If it can, click the button to 'create pull request', then click the button to 'merge pull request', then 'confirm merge'.
6. After confirming the merge, navigate back to the repo's home page. The master branch on GH should now be up-to-date
7. to update the master branch on your computer, go back to the terminal and `git checkout master`, then `git pull origin master`.
8. Everything should now be up-to-date. You can confirm this with `git diff master myFeature` - if the branches have no differences, you'll get no output and you're good to go.
9. Repeat!

<a id="gitignore"></a>
## Gitignore

You will often have files in your project folder that don't need to be tracked or committed to GitHub. You can tell git to ignore these files by creating a `.gitignore` file.

1. in terminal, navigate to your project folder
2. `touch .gitignore` and open it with Atom
3. write the name of any file or directory you want to ignore, one per-line. For example,

```
.DS_Store
.gitignore
.eslintrc
```

Save that file and you're good to go.
