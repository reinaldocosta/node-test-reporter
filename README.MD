# Repo to showcase some actions

The workflows used in this repo are present here:
https://github.com/gentrop-cloud/actions_workflows

The idea of this repo is to show how to use, and discuss how to improve our workflows. 

## Linting

In some cases, our projects are not being linted, or the linting tool stop working in the middle of the project. 
To help up with that, we can run our Lint in the actions instead of having hooks. 

This action help us in two great ways:
### Annotating the linting issue on the PR. 
![alt text](annotation-pr.png)
### Fixing auto. some linting issues
![alt text](auto-fix.png)