#!/usr/bin/perl
#use strict;
use warnings FATAL => 'all';
# sub marine {
#     $n += 1; # Global variable $n
#     print "Hello, sailor number $n!\n";
# }
# &marine;
# &marine;
# &marine;
# &marine;

# sub sum_of_fred_and_barney {
#     print "Hey, you called the sum_of_fred_and_barney subroutine!\n";
#     $fred + $barney; # That's the return value
# }


$fred = 3;
$barney = 4;

# $wilma = &sum_of_fred_and_barney;
#
# print "\$wilma is $wilma.\n";
#
# $betty = 3;
# print "\$betty is $betty.\n";

sub larger_of_fred_or_barney {
    if ($fred > $barney) {
        $fred;
    } else {
        $barney;
    }
}


if (&larger_of_fred_or_barney == 5) {
    print "thanks .\n";
} else {
   print "wrong .\n";
}

sub max {
    if ($_[0] > $_[1]) {
        $_[0];
    }else {
        $_[1];
    }
}

$n = &max(10, 15);
print $n;

foreach (1..10) {
    my($square) = $_ * $_; # private variable in this loop
    print "\n$_ squared is $square.\n";
}