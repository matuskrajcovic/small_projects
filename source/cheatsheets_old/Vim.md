# Vim


## Modes

```
:       command mode

v       visual mode (normal mode with highlighting)
V       visual mode per line

i       insert mode (writing)
I       insert mode beginning of the line
a       insert mode after cursor
A       insert mode at the end of the line
o       insert mode in a new line before the cursor
O       insert mode in a new line above the cursor

R       replace mode

esc     exit into normal mode
```


## Command mode

```
:q              quit
:q!             quit without saving (ZQ)
:w              save / save with file name
:wq             quit and save (ZZ)

:help           manual
:set wrap

:set number     set numbers at the beginning of the lines
:set nonumber   turns it off
```


## Navigation in normal/visual mode

```
h       left
l       right
j       down
k       up

w       next word (5w, 10w,...)
b       previous word

W       next blank space
B       previous blank space

0       beggining of the line
$       end of the line
^       first non empty character of the line

gg      beggining of the file
G       end of the file

(       previous sentence
)       next sentence

{       previous paragraph
}       next paragraph

[[, ]]  sections
[], ][  end of sections
```


## Editing in normal mode

```
x       delete letter
dw      delete word
d0      delete to the beggining of the line
d$      delete to the end of the file ('d)', dgg, dG,...)
dd      delete line (5dd, 10dd,...)

r       replace character
R       replace mode

yy      copy line (5yy)
p       paste line after current (5p)
P       paste line before current

~       switch case
c       change row

u           undo
CTRL+r      redo
```


## Editing in visual mode

```
x, d    delete
y       copy
p       paste before cursor
P       paste after cursor
r       replace character
~       switch case
c       change row
```


## Search and replace

```
/text                           forward to the document
?text                           backwards
n                               next instance
N                               previous instance
:%s/original/replacement        one occurence
:%s/original/replacement/g      all occurences
:%s/original/replacement/gc     with confirmation
```
