#!/usr/bin/perl
#use strict;
use warnings FATAL => 'all';

$what = "brontosaurus steak";
$n=3;
print "fred ate $n $what.\n";
print "fred ate $n ${what}s.\n";
print "fred ate $n $what" . "s.\n";
print 'fred ate ' . $n . ' ' . $what . "s.\n";