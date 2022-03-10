# Linux


## Shortcuts

```
CTRL +
    C           stops the process
    Z           if CTRL+C doesn't help
    A           line beginning
    E           line end
    B           back in line
    F           forward in line
    XX          toggle between start of the line and current position
    K           deletes everything after the cursor
    W           deletes the words one by one
    L           clears the screen

TAB             automatic filling in the terminal
2x TAB          shows options

UP/DOWN ARROW   command history
```


## Basic commands

```
sudo                    runs commands with superuser privileges

man                     manual, help information
    "command"               manual for the command
    
help                    help

"command" --help        help in terminal

history                 list of past commands
    !"number"               repeats history entry
    !"command"              repeats last history command

clear                   clears the terminal (CTRL+L)
```


## Directiories
```
pwd                 present working directory

cd       
    path_name       changes a directory
    blank           home directory
    ~               home directory
    ..              one level up
    /               root directory
    ~name           foreign directory of another user

ls
    blank           lists all files and directories
    -R              with sub-directories
    -a              with hidden files
    -al             detailed information
    -l              with file types and permissions
                        r = read
                        w = write
                        x = execute
                        - = no permission
    -lah            file sizes

mkdir
    dir_name        creates new directory   

rmdir
    dir_name        deletes the directory      
```


## Files

```
>                           rewrite the file
>>                          insert at the end of the file
2>                          rewrite with errors

echo
    string                  prints the string
    string >> file_name     prints the string into a file

cat
    file_name               displays the file content
    > file_name             creates new file
    file_1 file_2 > file_3  joins two files into a third one

mv
    file_name new_path      moves the file to a new place
    file_name new_name      renames the file
    dir_name new_name

rm
    file_name               deletes a file    

touch
    file_name               creates a new file (txt, zip,...)

cp
    file_name location      copies the file

cmp
    file1 file2             compare two files, prints first difference

diff
    file1 file2             compare two files

file
    file_name               print the type of the file

locate
    string                  finds the files with this string
    str_1*str_2             when two strings are known
    -i                      ignore case

chmod
    [...] file_name         modifies rights
    first: ugo              user/group/other
    second: +/-             pridat/odobrat
    third: rwx              read/write/execute
    ug+x "file"
        4                       read
        2                       write
        1                       execute
    700                     everything to me, nothing to others
    
wc                          number of lines
    -l                      just lines
    -c                      characters
    
cut                         splits the input into columns
    -d 'char'               delimeter to split into columns
    -f 'num'                output of the column

tr                          replaces characters in a file
    'chars' 'chars'         replaces all characters occurences with other ones
    -s 'char'               replaces all occurences with one character - itself
    -d 'chars'              deletes characters

head                        prints beginning of file
    -n 'num'                number of lines
    -n -'num'               without last n lines

tail                        prints end of file
    -n 'num'                number of lines
    -n +'num'               without first n lines
```


## Movement in manual/more/less
```
"arrows"        moves

q               quit

/               find
n               next
b               back
```


## System

```
passwd              password change

date                current date

w                   who is logged into system

whoami              my name

id                  info about me

last                last logged users

df                  see available disk space
    -m              in megabytes
    folder_name     size of a folder

du                  disk usage

uname               linux information
    -a              most of the information

apt                 work with packages

apt-get             install packages
    update          updating packages
    upgrade         installing updated packages
    dist-upgrade    upgrade the system

apt-cache search    searching for a package

/etc/passwd         users
/etc/group          groups
/etc/shadow         passwords
```

## FILTER, FIND AND SORT
```
find 
    "path"
    -type           type of the file (f - regilar file)
    -name           name of the file (expression, basic regex)
        *               whatever string
    -print
    -mtime          last change
        +/-"number"     more/less than number of days
        "number"
    -size           file size
        "number"c       in characters
    -and            implicit
    -or
    \(\)            structural expressions
    -exec "command" {} \;
    

grep
    -n      line numbers in the output
    -i      ignore case
    -E      extended grep
    -B      basic grep
    -A "n"  shows lines after
    -B "n"  shows lines above
    -C "n"  shows before and after
    -c      count instead of output
    -v      invert match

sort        sort alphabetically
    -n      sort by number
    -r      reverse results

uniq        unique grouped lines
    -c      with counts
```

## REGEX
```
RegEx
    BRE (Basic), ERE (Extended)
    
    .           character
    \'c'        takes function from the characer / or gives
    ['chars']   contains these characters
        abc
        a-c
        0-8
    [^'chars']  does not contain these characters
    [:class:]
        alnum, alpha, lower, upper, digit, xdigit, blank, space, punct, sntrl, graph,...
        
    *           0 and more repeatings
    +           1 or more repeatings
    ?           0 or 1 repeating
    {n}         n repeatings
    {n,}        n or more repeatings
    {,n}        0 to n repeatings
    {n, m}      n to m repeatings
    ?           PERL lazy match
    
    ^           beginning of the line
    $           end of the line
    \<          beginning of the word
    \>          end of the word
    \b          end or beginning of the word
    
    ()          group of expressions
    |           or
```


## Archives

```
tar
    -cvf        creating tar archive
    -xvf        untaring the archive
    -tvf        list the contents of an archive

zip             compress files
unzip           extract files
```


## Network

```
hostname            PC name in a network
    -I              IP adress

ping
    adress          checks the connection
```

## SCRIPTS
```
for i in "path"               path = /, *, [A-Z]*, ...
do
    echo $i
done

while [$i -"?" "number"]      ? = -eq, -gt, -lt, -le, -ge
do
    i=$((i+1))
done
```