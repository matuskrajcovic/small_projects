# CSS

## Basic

```
<tag style="style">             inline version

tag { style }                   in head, affects all tags
#id { style }                   in head, affects all tags with id
.class { style }                int head, affects all tags with a class

<link>                          in head, styles in external file
    rel=”stylesheet”
    href=”styles.css”           source css file

/* text */                      multi-line comment
```


### Styles

```
tag {
  parameter: value;
  parameter_2: value_2;
}
```


## Text

```
font-family:
    "Times New Roman", Arial, "Courier New"

font-size:
    small, medium, large, x-large
    20px, 1.25em, ...                               em=px/16

font-style:
    italic, normal, oblique

font-weight:
    lighter, bold, bolder
    700                                             100 - 900

font-variant:
    normal, small-caps

color:
    green, #0000FF, rgb(255,0,0), ...

text-align:
    left, right, center

vertical-align:
    top, middle, bottom
    baseline, sub, super, %, -10px

text-decoration:
    none 
    inherit                                         from the parent
    overline, underline, line-through

text-indent:                                        tab
    60px

text-shadow:
    5px2px 4px grey;                                x, y, blur, color
    rgba(0,0,255,1) -1px -2px 0.5em                 x, y, blur, color

text-transform:
	capitalize, uppercase, lowercase

letter-spacing: 
    normal, 4px

word-spacing: 
    normal, 30px

white-spacing:
    nowrap, pre, pre-line, pre-wrap
```


## Borders

```
border: 
    5px solid green                         width, style, color

border-width: 
    2px

border-style:
    none, hidden
    solid, double
    dotted, dashed, groove, ridge
    inset, outset

border-color:
    green, #FF600, rgb(0,153,0), ...
```

## Padding

```
margin:
    10 px 5px 15px 10px                     top, right, bottom left

height:
    90px, 100%, ...
max-height:
min-height:

width:
    90px, 50%, ...
max-width:
min-width:
```


## Others

```
background-color:
    LightGreen, #000000, rgb, ...

background-image:
    url                                         "url.png"

background-repeat:
    repeat-x, repeat-y 
    inherit

backround-attachment:
    fixed
    scroll
    inherit

list-style: 
    square
    outside
    none

list-style-type:
    lower-alpha 
    circle, square 
    decimal, disc

list-style-image:
    url

list-style-position:
    inside, outside

border-collapse: <table>
    separate

border-spacing: <table>
    20px 40px

caption-side: <caption>
    top, bottom

empty-cells: <table>
    hide

table-layout: <table>
    auto, fixed

a:link {}
a:visited {}
a:active {}
a:hover {}

cursor:
    default
    crosshair
    help
    pointer
```

## Sizing and positions