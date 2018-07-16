# vim Editor

## commands

   ```
   :e!
   #wipe out all of the edits you have made in a session and then return
    to the original file

   :q!
   #quits the file you’re editing and returns you to the Unix prompt

   h
   #Left, one space

   j
   #Down, one line

   k
   #Up,one line

   l
   #Right, one space

   cw
   To the end of a word
   c2b
   Back two words
   c$
   To the end of line
   c0
   To the beginning of line

   The R command, like its lowercase counterpart, replaces text. The difference is
   that R simply enters overstrike mode.

   The S command, as is usually the case with uppercase commands, lets you change
   whole lines.

   The substitute command (s), by itself, replaces a single character. With

    A
    Append text to end of current line.
    I
    Insert text at beginning of line.
    o (lowercase letter “o”)
    Open blank line below cursor for text.
    O (uppercase letter “o”)
    Open blank line above cursor for text.
    s
    Delete character at cursor and substitute text.
    S
    Delete line and substitute text.
    R
    Overstrike existing characters with new characters.

    H
    Move to home—the top line on screen.
    M
    Move to middle line on screen.
    L
    Move to last line on screen.
    nH
    Move to n lines below top line.
    nL
    Move to n lines above last line.


    E
    Move to end of word (ignore punctuation).
    (
    Move to beginning of current sentence.
    )
    Move to beginning of next sentence.
    {
    Move to beginning of current paragraph.
    }
    Move to beginning of next paragraph.
    [[
    Move to beginning of current section.
    ]]
    Move to beginning of next section.

    / ENTER
    Repeat search forward.
    ? ENTER
    Repeat search backward.

    fx
    Find (move cursor to) next occurrence of x in the line, where x stands for any
    character.
    Fx
    Find (move cursor to) previous occurrence of x in the line.
    tx
    Find (move cursor to) character before next occurrence of x in the line.
    Tx
    Find (move cursor to) character after previous occurrence of x in the line.
    ;
    Repeat previous find command in same direction.
    ,
    Repeat previous find command in opposite direction.

    CTRL-G is useful either for displaying the line number to use in a command or for
    orienting yourself if you have been distracted from your editing session.

    The G (Go To) Command
    Movement Command
    Scroll forward one screen ^F
    Scroll backward one screen ^B
    Scroll forward half screen ^D
    Scroll backward half screen ^U
    Scroll forward one line ^E
    Scroll backward one line ^Y
    Move current line to top of screen and scroll z ENTER
    Move current line to center of screen and scroll z.
    Move current line to bottom of screen and scroll z-
    Redraw the screen ^L
    Move to home—the top line of screen H
    Move to middle line of screen M
    Move to bottom line of screen L
    Move to first character of next line ENTER
    Move to first character of next line +

    Change Delete Copy From cursor to...
    cH dH yH Top of screen
    cL dL yL Bottom of screen
    c+ d+ y+ Next line
    c5| d5| y5| Column 5 of current line
    2c) 2d) 2y) Second sentence following
    c{ d{ y{ Previous paragraph
    c/pattern d/pattern y/pattern Pattern
    cn dn yn Next pattern
    cG dG yG End of file
    c13G d13G y13G Line number 13


    $ vi +n file
    Opens file at line number n.
    $ vi + file
    Opens file at last line.
    $ vi +/pattern file
    Opens file at the first occurrence of pattern.


    vi -r practice

    Option Meaning
    +n file Open file at line number n.
    + file Open file at last line.
    +/pattern file Open file at first occurrence of pattern (traditional version of POSIX -c).
    -c command file Run command after opening file; usually a line number or search (POSIX version of +).
    -R Operate in read-only mode (same as using view instead of vi).
    -r Recover files after a crash.


    :%s/editer/editor/g
    global replacement

    :g/pattern/s/old/new/g
    The first g tells the command to operate on all lines of a file. pattern identifies the lines
    on which a substitution is to take place

    :g/<keycap>/s/Esc/ESC/g
    If the pattern being used to find the line is the same as the one you want to change, you
    don’t have to repeat it.
    :g/string/s//new/g
    would search for lines containing string and substitute for that same string.

:%s/\(That\) or \(this\)/\2 or \1/
You can also use the \n notation within a search or substitute string. For example:
:s/\(abcd\)\1/alphabet-soup/

:%s/1\. Start/2. Next, start with $100/
note that the replacement string treats the characters . and $ literally, without your
having to escape them. By the same token, let’s say you enter:
:%s/[ABC]/[abc]/g

:%s/child/children/g
:%s/child□/children□/g
:%s/child[□,.;:!?]/children[□,.;:!?]/g
:%s/child\([□,.;:!?]\)/children\1/g


:set option
:set nooption

:set ic
to specify that pattern searches should ignore case, type:


The display should look something like this:†
autoindent nomodelines noshowmode
autoprint nonumber noslowopen
noautowrite nonovice tabstop=8
beautify nooptimize taglength=0
directory=/var/tmp paragraphs=IPLPPPQPP LIpplpipnpbp tags=tags /usr/lib/tags
noedcompatible prompt tagstack
errorbells noreadonly term=vt102
noexrc redraw noterse
flash remap timeout
hardtabs=8 report=5 ttytype=vt102
noignorecase scroll=11 warn
nolisp sections=NHSHH HUuhsh+c window=23
nolist shell=/bin/ksh wrapscan
magic shiftwidth=8 wrapmargin=0
nomesg showmatch nowriteany

   ```

### Executing Unix Commands
```bash
:!command
:!date
````
### vim


`split windows`
```
Vim -o5 file1 file2
:[n]split [++opt] [+cmd] [file]
```
`vim variable`

```
b:
A variable recognized in a single Vim buffer
w:
A variable recognized in a single Vim window
t:
A variable recognized in a single Vim tab
g:
A variable recognized globally—i.e., it can be referenced anywhere
l:
A variable recognized within the function (a local variable)
s:
A variable recognized within the sourced Vim script
a:
A function argument
v:
A Vim variable—one controlled by Vim (these are also global variables)

```