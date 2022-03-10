# LaTeX


## Document structure

```
\documentclass[parameters]{class_name}
    class names:
        article
        book
        report
        slides              presentation
    parameters:
        a4paper             page-size
        12pt                font-size

% comment

\begin{document}            end of the head, beginning of a document
\end{document}              end of the document

\section{section_name}      section/chapter
    *{name}                 section without the number
\subsection{name}
\subsubsection{name}

\chapter{name}              section parent, in class report
```


## Content
```
\tableofcontents        register

\label{id}              label to chapter/section
\ref{id}                reference to chapter/section/figure
```

## Formatting

```
\\                  newline

\textbf{text}       bold
\bf                 turns on bold

\rm                 turns off bold, italics,...

\textit{text}       italics
\underline{text}    underline
\emph{text}         ephasise, according to template

TEXT SIZE:
    \large
    \huge
    \Large
    \LARGE
    \small
    \normalsize
    {\large ...text...}
    \begin{large} ...text... - \end{large}

FLUSH:  
    \begin{center} - \end{center}     
    \begin{flushleft} - \end{flushleft}
    \begin{flushright} - \end{flushright}
```


## Lists

```
\begin{...} - \end{...}:
    itemize                 bullet point list
    enumerate               numbered list
    description

\item ...text...            bullet
\item[desc] ...text...      for description type

\item \begin{itemize}       second level
```


## Pictures

```
\usepackage{graphicx}           

\begin{figure}[parameter]

    \centering                                              centers the imag
    \includegraphics[width=\textwidth]{path/image.png}      relative path to image
    \label{label_name}                                      image label
    \caption{caption_name}                                  image caption
    
    parameter:
        t           top
        b           bottom
        h           at the place of declaration
        f           on a separate page
        bh          LaTeX decides
        h!          for sure at the place of declaration

\end{figure}

\clearpage          page break, when picture is too big it doesn't go to another chapter
```


## Tables

```
\begin{table}
    \centering
    \caption{caption_name}
    \label{label_name}

    \begin{tabular}{[columns]}
        item & item & item ...
        \hline                      horizontal line
        item & item & item ...

        columns:
            l                       left
            r                       right
            c                       center
            p                       according to text
            |                       vertical line

    \end{tabular}

\end{table}
```


## Equations

```
$x = 5$                 inline version
$$x = 5$$               separate line

\begin{equation}
    \label{label_name}
    ...text...
\end{equation}

x^{2}                   power

_xy                     x is subscript
_{xy}                   xy is subscript
_{_{}}                  two level subscript

\frac{a}{b}             fraction a/b
\frac{\frac{}}{}        composed fraction

\sqrt{text}             square root

CHARACTERS:
    \alpha
    \beta
    \gama

()                      parentheses
\big()                  bigger parenthesses
\bigg()                 even bigger ones   

\subset                 subset symbol
\cap                    intersection symbol

\usepackage{gensymb}
    \degree             °

```


## Bibliography and citations

```
\bibliographystype{style_name}
    style_names:
        plain
        abbrv               shortened names
        slovakiso           slovak

\bibliography{file.bib}     the bibliography itself

\cite{item_key}             use in text to cite a publication
```

### Bibtex file

```
@article{key,
 author = name,
 title = title,
 ...
}

@book
@inproceedings
...
```


## Special characters

```
\%  \_  \$  \&              special characters
\v{o}                       ô
\'{u}                       ú
``text''                    quotation marks:
~                           full space
\mbox{text}                 no splitting at the end of the line
\hyphenation{text, te-xt}   custom hyphenation
\-                          splitting the word at the end of the line
```


## Source codes

```
\begin{verbatim}
\end{verbatim}

\verb{text}                 inline version

\usepackage{listings}
\begin{lstlistings}[language=Python]
```


## Slovak language

```
\usepackage[slovak]{babel}          slovak terms, titles
\usepackage[cp1250]{inputenc}       diacritics
\usepackage[utf8]{inputenc}         encoding
\usepackage[T1]{fontenc}            encoding
```