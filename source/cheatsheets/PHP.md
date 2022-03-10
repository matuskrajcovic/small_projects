# PHP


## Basic

```
<?php                   beginning of the script
?>                      end of the script

// comment          single line comment
/* comment */       multi line comment

echo "text";        prints text/tags/variables into html file

include "file";     pastes another PHP script into HTML file

\n                  new line
\t                  tab
\", \$, \\          special symbols
```


## Variables, constants and arrays

```
$var                        variable
$var = 7;
isset($var);                returns true of variable is set
unset($var);                deletes variable
echo $var;

define("name", "value");    constant

$var = array(1, 2, ...);
$var = array(name=>"name",...);
echo($var['name']);

count($var);                number of items in array
```


### Notable arrays

```
$_GET               form data
$_POST              form data
$_SERVER            server data
$_SESSION           data on the server, deleted on browser exit
$_COOKIE            client data in browser
```


## IF, SWITCH and loops

```
if (expression) { }
else if (expression) { }
else { }

switch (value) {
    case val:
        break;
    default:
}

while (expression) { }

do { }
while (expression);

for (initialization; expression; do-every-time command) { }

foreach (array as $val => $key) { }         for each array item
                                            key is index, val is value
foreach (array as $val) { }
```