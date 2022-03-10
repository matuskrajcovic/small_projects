# Python


## Input and output
```
print("text")                   prints text
print(x)                        print variable

\n                              enter
\'                              special symbols

input("text")                   returns user input
```


## Comments
```
# comment 

"""
multiline
comment
"""
```


## Libraries
```
import math                     imports whole library
from random import *            same
from math import cos            imports cos from math

math.cos(int)                   use of library functions

math:
    floor(float)
    ceil(float)
    sqrt(int)

random:
    randint(x,y)                random integer between x and y

other libraries:
    string, re, datetime, math, random, os, multiprocessing, subprocess, socket, email, json, doctest, unittest, pdb, argparse, sys
```


## Operations and variables
```
x = 5               no type definitions
del x               deletes variable x

+                   sum / concatenation
-
*
**                  power
/                   divide with remainder
//                  integer divide
%                   modulo

int("text")         text into integer
str(int)            integer/float into string
float("text")

max(x,y,...)        returns max. value
min(x,y,...)

round(double)
pow(x, y)           power

abs(int)            absolute value

```

## If, loops
```
if (expression):
 ...
elif:
 ...
else:
 ...

and                 &&
or                  ||
not                 !

while(expression):
 ...

break                       breaks the cycle
continue                    continue with the next iteration of the cycle

for x in list:              iterater through a list
 ...

for x in range(int):        number of iterations
 ...

for x in enumerate(list):   x = pairs (tuples) of index and element from the list
 ...

range(3,6)                  from 3 to 6-1 (5)
range(5,15,3)               from 5 to 15-1 (14), each third
```

## Lists
```
x = [a, b, c,...]

[0]                     first element
[-1]                    first element from the end
[2:4]                   elements from index 2 to 4
[:6]                    all until index 6
[0:10:3]                each third element between indexes 0 and 10
[::2]                   each second
[2:-3]                  from 2 to 3 from the end

list + [y, z]           prints concatenated two lists
list * 2                prints concatenated two same lists
x in list               True/False
not x in lsit           True/False

.append(int)            appends element at the end of list
.index(int)             first the index of a element
.extend([list])         concatenates two lists
.clear()                deletes list contents
.pop()                  deletes last element
.count()                number of elements
.sort()                 sort the list
.reverse()              reverse the list



min(list)               smallest element from the list
sum(list)               sum of the list

all([x > 5 for x in list])          if all elements are larger than 5, returns True
any([x % 2 == 0 for x in list])     if there is even number, return True

list(range(int))                    returns [0,1,...]

[]                                  empty list
[int, string, [list],...]           many different types in a list

[x**3 for x in range(10) if i**2 % 2 == 0] -> [0, 1, 9, 27]
```

## Functions and lambdas
```
def fn(x,y):            function definition
 ...

fn(2,5)                 function call

x = fn                  "pointer" to function
x(3,4)

x = lambda x,y : x+y    function defined through lambda

(lambda x: x**x)(3)     prints 27

map(lambda list: list*2, list)           returns all elements timed by 2
filter(lambda list: x%2==0, list)        returns all even elements
```


## Errors
```
try:
 ...
except "exception":     what happens at certain exception
 ...
except:                 what happens at all exceptions
 ...
finally:                what happens everytime
 ...

ZeroDivisionError       division by zero
ValueError
TypeError
NameError
AssertionError          assert(2 == 3) raises this error

raise "error_name"      raise an error
```


## Text files
```
f = open()              opes the file
    file                    file name
    mode                    r, w, a, b
        r                       read
        w                       write
        a                       append
        b                       binary

with open(file) as f:   also an option
 ...

try:
 f = open(file)
finally:
 f.close()

.close()                close the file

.read()                 returns the whole file contents
.read(int)              returns first int bytes
.readlines()            returns list of rows from the file

write(text)             rewrites the whole file
```


## Dictionaries and tuples
```
x = {"key" : value, ...}        dictionary

x["key"]                        first value is index, second is value

"key" in dict                   False/True

.get("key")                     get the entry with index "key"
.get("key", otherwise)          returns otherwise when there is no key "key"

x = ("text", int, ...)          tuple, not modifiable

x[0]                            read tuple item
```


## Strings
```
x = "text"                      string variable
x[0]                            first character

str + str                       concatenate

"{0} {1}".format("a", 8)        formatting string
"{x} text".format(x = 5)

.join(list)                     returns iterable elements joined into one string, with source string as a separator
.replace(str, str)              replace substring with another
.startswith(str)                if string is at the beginning
.endswith(str)                  at the end
.upper()
.lower()
.split(str)                     returns list, string is splitted by dividers
.index(str)                     index at whoch the substring is
.isupper()
```


## Generators
```
def gen():                  generator, similar to range()
 i = 100
 while i > 0:
  yield i
  i -= 10

for i in gen():             use of a generator
 ...
```