# CMD


## Basic
```
EXIT            quit command line

ECHO            show status of echo
    on/off      turns on/off echo
    text        prints the text

CLS             clear screen
```


## Files and directories
```
DIR                 lists directory
    /B              bare (simple) format
    /O              sorted by:
        :N              name
        :S              size
        :D              date
    /A              with attributes:
        :D              directory
        :H              hidden files
        :-D             not directories

CD                  prints current directory
    \               root folder
    ..              parent folder
    path            change path

MD
    dir_name        make new directory

RD/RMDIR
    dir_name        delete derectory(ies)
DEL/ERASE
    file_name       delete file(s)

REN/RENAME
    name new_name   rename directory/file

TYPE
    file_name       prints file

COPY
    file_name path  copy file(s)

MOVE
    file_name path  moving file(s)

REPLACE
    file_name path  replacing files

TREE                all subdirectories and files in a tree structure

FC
    file1 file2     difference between two files

FIND/FINDSTR
    file string     search for a string in a file
```


## System

```
DATE            sets the date
    /t              only prints the date

TIME            sets time
    /t              only prints the time

CMD             new instance of cmd
START           new instance of cmd in a new window

TASKLIST        running tasks

TITLE
    string      changes the title of current cmd window

VER             Windows version