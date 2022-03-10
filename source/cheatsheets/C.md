# C

## Structure

```
int main(int argc, char *argv[]) 
{
    //single line comment

    /*
    multi line
    comment
    */

    return 0;
}

```


## Preprocessor directives and predefined macros

```
#include
    <stdio.h>     	    printf, scanf,..
    <stdlib.h>	        malloc, rand, srand,...
    <ctype.h>           toupper, tolower,...
    <string.h>          strcpy, strcat,...
    <math.h>            sqrt,...
    <time.h>	        time,... 
    "file.h"            user's file in the same directory

#define
    X 2                                     defined constant
    max(x,y) ((x) > (y) ? (x) : (y))        pseudofucntion

#ifdef constant         if constant is defined do this
#else                   else do this
#endif                  end

#undef constant         undefines constant
#if expression          
#elif
#error message          generates error

#pragma                 provide additional info for the compiler
    once                only compile once


__LINE__        which line is being compiled
__FILE__        name of the file
__DATE__        date of binary build
__TIME__        time of binary build
```


## Keywords and character sets

```
auto        double      int         struct 
break       else        long        switch 
case        enum        register    typedef 
char        extern      return      union 
const       float       short       unsigned 
continue    for         signed      void 
default     goto        sizeof      volatile 
do          if          static      while

A, B, ..., Z
a, b, ..., z
0, 1, ..., 9
- ~ ‘ ! @ # % ^ & * ( ) _ - + = | \ { } [ ] : ; " ' < > , . ? /
```


## Data types

| Data type              | Bytes | Range                           | Format specifier |
|------------------------|-------|---------------------------------|------------------|
| short int              | 2     | -32,768 to 32,767               | %hd              |
| int                    | 4     | -2,147,483,648 to 2,147,483,647 | %d               |
| long int               | 4     | -2,147,483,648 to 2,147,483,647 | %ld              |
| long long int          | 8     | -(2^63) to (2^63)-1             | %lld             |
| char                   | 1     | -128 to 127	                   | %c               |
| unsigned short int     | 2     | 0 to 65,535                     | %hu              |
| unsigned int           | 4     | 0 to 4,294,967,295              | %u               |
| unsigned long int      | 4     | 0 to 4,294,967,295              | %lu              |
| unsigned long long int | 8     | 0 to 18,446,744,073,709,551,615 | %llu             |
| unsigned char          | 1     | 0 to 255                        | %c               |
| float                  | 4     |                                 | %f               |
| double                 | 8     |                                 | %lf              |
| long double            | 12    |                                 | %Lf              |


## Control characters

```
\a      Bell
\n      New line
\r      Carriage return
\b      Backspace
\f      Formfeed
\t      Horizontal tab
\"      Quotation mark
\v      Vertical tab
\'      Apostrophe
\\      Backslash
\?      Question mark
\0      Null
```


## Expression operators precedence

|     Category   |             Operator                      | Associativity |
|----------------|-------------------------------------------|---------------|
|     Postfix    |             () [] -> . ++ - -             | Left to right |
|      Unary     |   +  -  !  ~  ++  - -  (type)*  & sizeof  | Right to left |
| Multiplicative |                  *  /  %                  | Left to right |
|    Additive    |                    +  -                   | Left to right |
|      Shift     |                   << >>                   | Left to right |
|   Relational   |                 < <=  > >=                | Left to right |
|    Equality    |                   ==  !=                  | Left to right |
|   Bitwise AND  |                     &                     | Left to right |
|   Bitwise XOR  |                     ^                     | Left to right |
|   Bitwise OR   |                     \|                    | Left to right |
|   Logical AND  |                     &&                    | Left to right |
|   Logical OR   |                    \|\|                   | Left to right |
|   Conditional  |                     ?:                    | Right to left |
|   Assignment   | =  +=  -=  *=  /=  %=>>=  <<=  &=  ^= \|= | Right to left |
|      Comma     |                     ,                     | Left to right |


## Variables and numbers

```
char c = '5';

static int x = 5;       x remains when out of scope

int x;                  before main = global variable

y = ++x;                y = 1, x = 1
y = x++;                y = 0, x = 1  

10 / 3                  3
10.0 / 3                3.3333
(float) 3 / 2           1.5000
(float) (3 / 2)         1.0000

pow(x,y)                x to the power of y
sqrt(x)                 square root of x
ceil(x)                 ceiling of x
floor(x)                floor of x
round(x)                round of x
fmax(x,y)               bigger of parameters
fmin(x, y)              smaller of parameters
```

## IF and SWITCH statements

```
if (expression) 
    statement;

if (expression){
}
else if (expression) {
}
else {
}

x = (y > z) ? y : z;        ternary operator, if y > z, assign y to x, else z to x
&&                          AND
||                          OR

if(6 > 5 || expression)     expression doesnt get evaluated (6>5, so it stops)


switch (discrete expression){
    case value1:
        statements;
        break;
    default:
        statements;
}
```


## Loops

```
for (initialization; test condition; run every time command){
}

while (expression){
}

do {
} while (expression);

break;                  terminates the loop
continue;               skips the current iteration of the loop
```


## Input and output

```
printf("%s %d", string, integer);       output
printf("%5.2f", 3.14159);               3.14

printf("%s", str);                      string output without \n
puts(str);                              string output with \n

putchar(char);


scanf(%s %d, &string, &integer);        input, arguments passed by reference

c = getchar();                          input of one character

gets(string);                           input of a string
fgets(string, n, stdin);                string with max. n characters, stdin = input

ungetc(c, stdin);                       gives a character back to buffer
```


## Functions

```
void fname(char x[], int y) {           void = returns nothing
}
fname("hi", y);                         calling the function

void fname(char x[], int y);            declaration of functions, definition can be after main() function

double fn(double x) {                   function returns type double
 return x*x*x;
}
printf("%f", fn(3.0));                  printing result
double x = fn(y);                       assigning result

static void x() {                       static = accesible only in the file containing the function
}

void infinity(){                        recursive function
    infinity();
}

int *funkcia(){}                        fenction returns pointer
```


## Pointers

```
*                   value of pointer (dereference)
&                   adress (reference)

int x = 5;
x                   value 5
&x                  adress of variable x
*&x                 value of adress = 5

int *px = &x;
px                  pointer to x
*px                 value of x

void add(int *x) {  argument passed by reference
    (*x)++;
}
add(&x);            function is going to change the value x

void *p;            void type
*(void *)p = 7;     we declare type when assigning value

int (*p)();         pointer to function returning int
int *(*p)();        pointer to function returning pointer to int
int (*p)(int);      pointer to function with 1 argument returning int

int **p;            pointer to pointer
int *pp = &p;
*pp = &a;
**pp = 8;

void f(int **p){}   changing adresses of pointers
```


### Tip
1. Find a identificator, read to the right until first ")"
2. We find the corresponding "(" and continue reading to the right skipping over what has already been read.
3. When we find ";", we go to the most left already read place and start reading to the left.


## Static arrays

```
int arr[10];                array of 10 integers
int arr[] = {1, 5, 6};      array of 3 integers
arr[0] = 4;                 assign value 4 to the first item
*arr = 4;                   same, first item
*(arr + 1) = 7;             assign 7 to the second item

char arr[][5] = {           two dimensional array
 {a, b, c, d, e}
 {s, d, f, r, e}
}
arr[0][0] = 4;

scanf("%d", a[0][0]);       without & in scanf function
```


## Strings

```
char x[20];                 array of characters sized 19 (last is \0)
char x[] = "text";

char *name = "text"         pointer version, can't edit the string

strlen(str);                lenght of the string

strcpy(str1, str2);         copy str2 to str1, returns pointer to str1
strncpy(str1, str2, n);     maximally n characters

strcat(str1, str2);         connects str2 to str1, returns pointer to str1

strchr(str, c);             returns pointer to the first character occurence in a string
strrchr(str, c);            from the end

strcmp(str1, str2);         returns 0 when str1==str2, -1/1 when str1 is lexicologically smaller/bigger that str2

strstr(s1, s2);             returns pointer to first occurence of str2 in 

atoi(str);                  converts string to int
atol(str);                  converts string to long
atof(str);                  converts string to float

sprintf(str, "%s", "text"); write to string
sscanf(str, "%s", str2);    read from string
```


## Memory and dynamic arrays <stdlib.h>
- static memory
- dynamic memory
    - stack = controls OS
    - heap = we are in control

```
int* p = (char*)malloc(10*sizeof(char));        dynamic alocation of 10 bytes - array of 10 characters
int* r = (int*)calloc(20, sizeof(int));         allocation of 80 bytes set to zero - array of 20 integers

*(p+1) = p[1]                                   different inscription
*p = p[]

int *p = realloc(p, 20*sizeof(int));            reallocation (possibly for making the array bigger)

int x[10]                                       sizeof(x) = 40
int *x                                          sizeof(x) = 10

func(*arr){}                                    passing array as an argument
func(arr)

func(**arr){}                                   passing by reference (possibly for allocation)
func(&arr)
```


### 2-dimensional arrays

```
int a[m][n];            static array

type *p[R];             array of pointers, static number of rows
for (each row):         allocating each row
	p[i] = (type*)malloc(C*sizeof(type));


type (*p)[C];           pointer to array, static number of columns - alocating one pointer pointing to static pointers
p = (type(*)[N])malloc(R*C*sizeof(type));


type **p;               pointer to pointer, we allocate everything
p=(type**)malloc(R*sizeof(type*));
for (each row)
	p[i] = (type*)malloc(C*sizeof(type));
```


## Files

```
FILE *f;                    file variable (pointer to file)

fopen(file, mode);          opens a file, returns pointer to it / NULL on error
    file                        path to file
    modes:
        "r"                     for reading                        
        "w"                     rewrites the file
        "a"                     appending to the end

fclose(FILE*);              loses a file, returns EOF on error

fgetc(FILE*);               returns character / EOF / \n
fputc(char, FILE*);         writes character into file

fscanf(FILE*, "%", &var);   reading from file, doesn't care about \n
fprint(FILE*, "%", var);    writing the variable into the file

har line[255];
fgets(char*, int, FILE*);   reads the string from file, maximum of int characters, with \n at the end
fputs(char*, FILE*);        writes string into file, without \n or \0

rewind(FILE*);              set cursor on the beginning of the file

ftell(FILE*);               position of cursor/pointer
foef(FILE*);                is pointer at the end?
```


## Structs

```
struct s_name {         struct of more variables
    type v_name;
    type2 v_name2;
    ...
};

struct s_name x;        new struct x
x.v_name = value;       assigning value to member variable

typedef struct s_name {
    ...
} S_NAME;

S_NAME x;               defined type S_NAME

S_NAME* x;              pointer to struct
x->v_name = value;      use of -> instead of (*x).v_name
```


## Bitwise operations

```
~x          negation (010 -> 101)
x & 1       bitwise AND (111 & 101 -> 101)
x | 1       bitwise OR (100 & 001 -> 101)

x ^ 1       bitwise XOR (010 ^ 111 -> 101)
x ^ x       always 0

x << 1      111 -> 110
x >> 1      111 -> 011
```


## Random numbers <time.h>, <stdlib.h>

```
srand(time(NULL));          randomize

rand();                     random number from 0 to RAND_MAX
rand() % 10                 from 0 to 9

(double) rand()/RAND_MAX    double from 0 to 1

a + (b-a) * (double) rand() / RAND_MAX
    double from a to b
```


## Compiling and linking multiple files

```
auto            automatic, local variables in stack
extern          global variables, variable from another file
static          local variables visible only in the module, keep their value when out of scope
register        quick operations

const           modifier = constant

modules .c      definitions of global variables and functions, static variables/functions
modules .h      declarations, used with #include
```