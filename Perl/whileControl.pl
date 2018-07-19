#!/usr/bin/perl
#use strict;
#use warnings FATAL => 'all';

use warnings FATAL => 'all';
$count1 = 0;
while ($count1 < 10) {
    $count1 += 2;
    print "count is now $count1\n"; # Gives values 2 4 6 8 10
}