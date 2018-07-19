# Scalar Data

## What a Scalar

    `A Scalar is the simpleset kind of data that Perl Mainipulates. Mosts Scalars are either a number or a string`

## Numbers

  - Floating_point Literals

        eg. 1.25, 255.00

  - Integer Literals

        eg. 0, 2001, -40

  - Nondecimal Integer Literals

        eg. 0377, 0xff, ob11111111

  - Numeric Operations

        + - * / %

## Strings

  - Single-Quoted String Literals

        'fred' # Those forur characters: f, r, e and d
        ''     # the null string
        'hello\n' # hello followed by backslach followed by n
        `\`\\`  # single quto followed by backslash

  - Double-Quoted String Literals

        "barnery" # just the same as 'barney'
        "hello\n" # hello and a newline
        "coke\tsprite" #Coke, a tab and sprite

  - String Operations

        "Hello" . "world" #Same as "Helloworld"
        "Hello" . ' '."world" # same as 'Hello world'
        "fred" * 3 # "fredfredfred"
        "barney"*(4+1) # "barney"*5
        5 * 4 # "5" x 4, whci is "5555"

  - Automatic Conversion Between Numbers and Strings

    `For the most part, Perl automatically converts between numbers and strings as needed.`
    It all depends upon the operator being used on the
    scalar value. If an operator expects a number (like + does), Perl will see the value as a
    number. If an operator expects a string (like . does), Perl will see the value as a string.
    So you don’t need to worry about the difference between numbers and strings; just use
    the proper operators, and Perl will make it all work.

        eg:
        "Z" . 5 * 7 # same as "Z" . 35, or "Z35"

  - Perl’s Built-in Warnings

        $ perl -w my_program

        #!/usr/bin/perl -w

        #!/usr/bin/perl
        use warnings;

        #!/usr/bin/perl
        use diagnostics;

  - Perl Diagnostics

        code
        #!/usr/bin/perl
        use strict;
        use warnings FATAL => 'all';
        Argument "12fred34" isn't numeric}

        OutPut
        perl ericchang$ perl -Mdiagnostics warningTest.pl
        String found where operator expected at warningTest.pl line 4, near "Argument
                "12fred34"" (#1)
            (S syntax) The Perl lexer knows whether to expect a term or an operator.
            If it sees what it knows to be a term when it was expecting to see an
            operator, it gives you this warning.  Usually it indicates that an
            operator or delimiter was omitted, such as a semicolon.

        Uncaught exception from user code:
                String found where operator expected at warningTest.pl line 4, near "Argument "12fred34""

  - Scalar Variaable

  - Scalar Assignment

        $fred = 17; # give $fred the value of 17
        $barney = 'hello'; # give $barney the five-character string 'hello'
        $barney = $fred + 3; # give $barney the current value of $fred plus 3 (20)
        $barney = $barney * 2; # $barney is now $barney multiplied by 2 (40)

  - Binary Assignment Operators

        $fred = $fred + 5; # without the binary assignment operator
        $fred += 5; # with the binary assignment operator

        $barney = $barney * 3;
        $barney *= 3;

  - Interpolation of Scalar Variables into Strings

         $what = "brontosaurus steak";
         $n = 3;
         print "fred ate $n $whats.\n"; # not the steaks, but the value of $whats
         print "fred ate $n ${what}s.\n"; # now uses $what
         print "fred ate $n $what" . "s.\n"; # another way to do it
         print 'fred ate ' . $n . ' ' . $what . "s.\n"; # an especially difficult way

  - Operator Precedence and Associativity

        4 ** 3 ** 2 # 4 ** (3 ** 2), or 4 ** 9 (right associative)
        72 / 12 / 3 # (72 / 12) / 3, or 6/3, or 2 (left associative)
        36 / 6 * 3 # (36/6)*3, or 18

  - Comparison Operators

        < <= == >= > !=.

  - The if Control Structure

            #!/usr/bin/perl
            #use strict;
            use warnings FATAL => 'all';

            $name = 'fred1';

            if ($name gt 'fred') {
                print "'$name' comes after 'fred' in sorted order.\n";
            }
            --
            Output

            'fred1' comes after 'fred' in sorted order.

  - Boolean Values


            $is_bigger = $name gt 'fred';
            if ($is_bigger) { ... }

  - Getting User Input

            $line = <STDIN>;
            if ($line eq "\n") {
                print "That was just a blank line!\n";
            } else {
                print "That line of input was: $line";
            }

  - The chomp Operator

        if the string ends in a newline character, chomp can get rid of the newline.

  - while control Structure


  - The undef Value


  - The defined function














