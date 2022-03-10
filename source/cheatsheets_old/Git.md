# Git


## Creating repositories andd basic commands

```
git init            creates a repository

git clone [url]     clones a repository from an url

git command --help  manual to a command
```


## Commiting changes

```
git status                  shows modified files in your repository

git add
    file_name               stage a file (prepare for commit)
    --all                   stage all modified and untracked files

git commit                  commit all staged files
    -m "text"               add commit message

git reset 
    file_name               unstage a file, keep changes

git rm
    file_name               delete a staged file
    --cached file_name      remove file from the index, not directory
```


## Remote repository

```
git remote add [name] [url]         add remote repository

git push [remote_name] [branch]     push branch to a remote repository
    -u                              all branches

git pull                            fetch and merge from remote

git remote                          all remotes (push, pull)
    -v                              verbose, with url's
```


## Branches

```
git branch          list of branches
    branch_name     create a new branch
    -d branch       deletes the branch

git checkout
    branch_name     switch to another branch
    -d file_name    deletes a file from a branch

git merge
    branch_name     merge the branch to current branch
```


## History

```
git log                     all commits in current branch
    --follow file_name      changes to a file
    branch_1..branch_2      commits on branch 1 which are not in branch 2
    --author=name           commits from an author
    --pretty=oneline        simple list

git diff                    changes to unstaged files in current branch
    --staged                changes to staged files in current branch
    branch_1..branch_2      difference between branches (what is in 1 that is not in 2)
```


## .gitignore

```
file.txt    ignore file 
*.exe       ignore all .exe files
```


## Configuration

```
git config --global
    user.name "first_name last_name"        sets user name
    user.email "email"                      sets user email
```


## Undo

```
git rebase 
    branch_name             reapply commits on top of another base tip

git reset                   
    commit_name             reset current head to a new one
    --hard commit_name      also clears staged changes        
```


## Stash

```
git stash           save all changes to a stash
    list            list all stashes
    pop             apply top of the stash and delete it
    drop            delete top of stash stack
```