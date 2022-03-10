# HTML


## Structure

```
<html></html>               beginning end end of a document

<head></head>               head
    <title></title>         page title

<body></body>               contents of the page
    background="url"            
    bgcolor="color"         background color: white, #00000,...
    text="color"
    link="color"            URL link coloe
    vlink="color"           visited URL link color
```


## Format

```
<h1></h1>                   headings (h1-h6)
<p></p>                     paragraph

<div></div>                 division/section of the document
<span></span>               inline container

<b></b>                     bold
<strong></strong>
<u></u>                     underline
<ins></ins>
<i></i>                     italics
<del></del>                 strikethrough font

<sup></sup>                 superscript
<sub></sub>                 subscript
<small></small>             small font
<big></big>                 big font

<br>                        new line
<center></center>           centering
<pre></pre>                 preformatted text

<font></font>
    face="font"             font family (arial,...)
    size="size"             sizes 0-7
    color="color"
```


## Images, links and lines

```
<hr>                        horizontal line
	size="num"                  in px, %
	width="num"
	color="color"
	align="position"

<img>                       image
    src="source"                relative path / URL
    width="num"
    height="num"
    border="border"
    align="position"
    alt="text"
    title="text"

<a></a>                     link
    href="source"               relative path / URL (./pic.jpg)
    target=”_blank”             open in a new tab
```


## Lists

```
<ul></ul>                   bullet point list
    <li></li>                   item in the list
    
<ol></ol>                   numbered list
    type="type"
    start="value”           starting value (2, C,...)
    <li></li>
```


## Tables

```
<table></table>
    border="num"
    width="num"
    bgcolor="col"
    align="pos"

    <tr></tr>                   table row

    <td></td>                   table cell
        colspan=”num”           number of merges cells in a culumn
        rowspan=”num”           number of merges cells in a row

    <th></th>                   emphasised cell
```


## Forms

```
<form></form>
    action="action"                     script path (./index.php)
    method="method"                     get / post
    enctype="multipart/form-data"

    <input type="text">                 text input
        name="name"
        size="num"
        value="text"                    predefined value

    <input type="password" ...>         password input

    <textarea>text</textarea>           large text area with predefined text
        name="name"
        rows="num"
        cols="num"

    <select></select>                   multiple choice selection
        name="name"
        <option> choice_1 </option>     one of the options
            value=”value”               value to send to script
            selected                    preselected

    <input type="checkbox">             checkbox
        name="name"
        value="value"
        checked                         prechecked

    <input type="radio">                single choice selection
        name="name" 
        value="value" 
        checked                         prechecked

    <input type="submit">               submit button
        name="name"
        value="value"                   button name on the page
```


## HTML 5

```
<!DOCTYPE HTML>
<meta charset=”UTF-8”>
<header></header>
<nav></nav>
<article></article>
<section></section>
<aside></aside>
<footer></footer>
```

### Audio, video, progress

```
<audio controls></audio>
    autoplay                    automatic start
    loop                        repeating
    <source>
        src=”path”
        type=”type”             audio/mpeg

<video controls></video>
    autoplay
    loop
    <source>
        src=”path”
        type=”type”             video/mp4

<progress></progress>
	min=”num”
	max=”num”
	value=”num”
```