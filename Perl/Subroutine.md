# Perl Subroutine

            #!/usr/bin/perl
            #use strict;
            use warnings FATAL => 'all';
            sub marine {
                $n += 1; # Global variable $n
                print "Hello, sailor number $n!\n";
            }
            &marine;
            &marine;
            &marine;
            &marine;
