#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';
my @names = qw/ fred barney betty dino wilma pebbles bamm-bamm /;
my $result = &which_element_is("dino", @names);
sub which_element_is {
    my($what, @array) = @_;
    foreach (0..$#array) {
        if ($what eq $array[$_]) {
            return $_;
        }
    }

}
&which_element_is("fred",@names)