#!/usr/bin/perl
#use strict;
use warnings FATAL => 'all';

# $fred[0] = "hello";
# $fred[1] = "fred";
# print $fred[0] ."\n";
# print $fred[1] ."\n";

$rocks[0] = 'bedrock';
$rocks[1] = 'slate';
$rocks[2] = 'lava';
$rocks[3] = 'crushed rock';
$rocks[99] = 'schist';

$end = $#rocks;

print $end[99]