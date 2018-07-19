#!/usr/bin/perl
#use strict;
use warnings FATAL => 'all';

$text = "a line of text\n second line of the text\n";
print "$text";
print "test chmop\n";
chomp($text);
print "$text";
print "test chmop";

